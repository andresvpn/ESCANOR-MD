const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./functions2.js')
const { default: makeWASocket, relayMessage, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const fs = require('fs')
const child_process = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const Crypto = require('crypto')
const axios = require('axios')
const pino = require('pino')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')
const FileType = require("file-type")
const path = require("path")
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const PhoneNumber = require('awesome-phonenumber')

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

const downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
        let extension = mime.split('/')[1]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
}



exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error')
        }
    })
}


const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds


function msToTime(duration) { 
   var milliseconds = parseInt((duration % 1000) / 100), 
     seconds = Math.floor((duration / 1000) % 60), 
     minutes = Math.floor((duration / (1000 * 60)) % 60), 
     hours = Math.floor((duration / (1000 * 60 * 60)) % 24); 
  
   hours = hours < 10 ? "0" + hours : hours; 
   minutes = minutes < 10 ? "0" + minutes : minutes; 
   seconds = seconds < 10 ? "0" + seconds : seconds; 
  
   return minutes + " m y " + seconds + " s "; 
 }

exports.msToTime = msToTime

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}


exports.fetchBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url,
			headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
    //𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗
	var dDisplay = d < 10 ? String("𝟎" + d) : d >= 10 ? String(d) : "𝟎𝟎";
	var hDisplay = h < 10 ? String("𝟎" + h) : h >= 10 ? String(h) : "𝟎𝟎";
	var mDisplay = m < 10 ? String("𝟎" + m) : m >= 10 ? String(m) : "𝟎𝟎";
	var sDisplay = s < 10 ? String("𝟎" + s) : s > 10 ? String(s) : "𝟎𝟎";
    dDisplay = dDisplay.replace(/1/g, "𝟏")
    dDisplay = dDisplay.replace(/2/g, "𝟐")
    dDisplay = dDisplay.replace(/3/g, "𝟑")
    dDisplay = dDisplay.replace(/4/g, "𝟒")
    dDisplay = dDisplay.replace(/5/g, "𝟓")
    dDisplay = dDisplay.replace(/6/g, "𝟔")
    dDisplay = dDisplay.replace(/7/g, "𝟕")
    dDisplay = dDisplay.replace(/8/g, "𝟖")
    dDisplay = dDisplay.replace(/9/g, "𝟗")
    hDisplay = hDisplay.replace(/1/g, "𝟏")
    hDisplay = hDisplay.replace(/2/g, "𝟐")
    hDisplay = hDisplay.replace(/3/g, "𝟑")
    hDisplay = hDisplay.replace(/4/g, "𝟒")
    hDisplay = hDisplay.replace(/5/g, "𝟓")
    hDisplay = hDisplay.replace(/6/g, "𝟔")
    hDisplay = hDisplay.replace(/7/g, "𝟕")
    hDisplay = hDisplay.replace(/8/g, "𝟖")
    hDisplay = hDisplay.replace(/9/g, "𝟗")
    mDisplay = mDisplay.replace(/1/g, "𝟏")
    mDisplay = mDisplay.replace(/2/g, "𝟐")
    mDisplay = mDisplay.replace(/3/g, "𝟑")
    mDisplay = mDisplay.replace(/4/g, "𝟒")
    mDisplay = mDisplay.replace(/5/g, "𝟓")
    mDisplay = mDisplay.replace(/6/g, "𝟔")
    mDisplay = mDisplay.replace(/7/g, "𝟕")
    mDisplay = mDisplay.replace(/8/g, "𝟖")
    mDisplay = mDisplay.replace(/9/g, "𝟗")
    sDisplay = sDisplay.replace(/1/g, "𝟏")
    sDisplay = sDisplay.replace(/2/g, "𝟐")
    sDisplay = sDisplay.replace(/3/g, "𝟑")
    sDisplay = sDisplay.replace(/4/g, "𝟒")
    sDisplay = sDisplay.replace(/5/g, "𝟓")
    sDisplay = sDisplay.replace(/6/g, "𝟔")
    sDisplay = sDisplay.replace(/7/g, "𝟕")
    sDisplay = sDisplay.replace(/8/g, "𝟖")
    sDisplay = sDisplay.replace(/9/g, "𝟗")
    dDisplay = dDisplay.replace(/0/g, "𝟎")
    hDisplay = hDisplay.replace(/0/g, "𝟎")
    mDisplay = mDisplay.replace(/0/g, "𝟎")
    sDisplay = sDisplay.replace(/0/g, "𝟎")

	return dDisplay + ":" + hDisplay + ":" + mDisplay + ":" + sDisplay;
}

exports.clockString = (ms) => {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.buffergif = async (image) => {
const filename = `${Math.random().toString(36)}`
await fs.writeFileSync(`./tmp/${filename}.gif`, image)
child_process.exec(`ffmpeg -i ./tmp/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./tmp${filename}.mp4`)
await sleep(4000)
var buffer5  =  await  fs.readFileSync(`./tmp/${filename}.mp4`)
Promise.all([unlink(`./tmp/${filename}.mp4`), unlink(`./tmp/${filename}.gif`)])
return buffer5
}



exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms)); // promises?
}

exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}

exports.tanggal = (numer) => {
	myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
				myDays = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function delay(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await jimp_1.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.getGroupAdmins = (participantes) => {
	const admins = []
	for (let i of participantes) {
		i.admin ? admins.push(i.id) : ''
	}
	return admins
}



/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {Boolean} hasParent 
 */
exports.smsg = (conn, m, hasParent) => {
    
    if (!m) return m
    let M = proto.WebMessageInfo
    if (m.key) {
        m.id = m.key.id
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
        m.chat = m.key.remoteJid
        m.fromMe = m.key.fromMe
        m.isGroup = m.chat.endsWith('@g.us')
        m.sender = m.fromMe ? (conn.user.id.split(":")[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
        m.device = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
    }

try {   
  let isNumber = x => typeof x === 'number' && !isNaN(x)  // NaN in number?
  let user = global.db.data.users[m.sender]  
  if (typeof user !== 'object') global.db.data.users[m.sender] = {}  
  if (user) { 
  if (!('registered' in user)) 
     user.registered = false // register
     if (!user.registered) { 
     if (!('name' in user)) 
     user.name = conn.user.name
     if (!isNumber(user.age)) 
     user.age = -1 
     if (!isNumber(user.regTime)) 
     user.regTime = -1 
  }
  if (!isNumber(user.afkTime)) user.afkTime = -1  
  if (!('afkReason' in user)) user.afkReason = ''  
  if (!isNumber(user.limit)) user.limit = 20  
  if(!isNumber(user.money)) user.money = 100  
  if(!isNumber(user.health)) user.health = 100  
  if(!isNumber(user.warn)) user.warn = 0  
  if(!isNumber(user.exp)) user.exp = 100
  if(!isNumber(user.role)) user.role = '🍱 Novato I'
  if(!isNumber(user.level)) user.level = 0
  if(!isNumber(user.armor)) user.armor = 0
  if(!isNumber(user.sword)) user.sword = 0
  if(!isNumber(user.pickaxe)) user.pickaxe = 0
  if(!isNumber(user.axe)) user.axe = 0
  if(!isNumber(user.gems)) user.gems = 0
  if(!isNumber(user.gold)) user.gold = 0
  if(!isNumber(user.copper)) user.copper = 0
  if(!isNumber(user.diamonds)) user.diamonds = 0
  if(!isNumber(user.swordDurability)) user.swordDurability = 100
  if(!isNumber(user.pickaxeDurability)) user.pickaxeDurability = 100
  if(!isNumber(user.axeDurability)) user.axeDurability = 100
  if(!isNumber(user.armorDurability)) user.armorDurability = 100
  if(!isNumber(user.lastMining)) user.lastMining = 0
  if(!isNumber(user.potion)) user.potion = 0
  if(!isNumber(user.rock)) user.rock = 0
  if(!isNumber(user.iron)) user.iron = 0
  if(!isNumber(user.trash)) user.trash = 0
  if(!isNumber(user.lastClaim)) user.lastClaim = 0
  if(!isNumber(user.common)) user.common = 0
  if(!isNumber(user.rare)) user.rare = 0
  if(!isNumber(user.lastTrain)) user.lastTrain = 0
  if(!isNumber(user.ability)) user.ability = 0
  if(!isNumber(user.papel)) user.papel = 0
  if(!isNumber(user.perfil)) user.perfil = "https://telegra.ph/file/2384896a1193a4f707ab9.jpg"
  if(!isNumber(user.stronger)) user.stronger = 'Muy debil'
   } else global.db.data.users[m.sender] = {  
  afkTime: -1,  
  afkReason: '',  
  limit: 20,  
  money: 100,  
  health: 100,  
  warn: 0, 
  exp: 100,
  role: '🍱 Novato I',
  level: 1,
  armor: 0,
  sword: 0,
  pickaxe: 0,
  axe: 0,
  gems: 0,
  gold: 0,
  copper: 0,
  diamonds: 0,
  swordDurability: 100,
  pickaxeDurability: 100,
  axeDurability: 100,
  armorDurability: 100,
  lastMining: 0,
  potion: 0,
  rock: 0,
  iron: 0,
  trash: 0,
  lastClaim: 0,
  common: 0,
  rare: 0,
  papel: 0,
  ferrari: 0,
  perfil: "https://telegra.ph/file/2384896a1193a4f707ab9.jpg",
  }  
  
  let chats = global.db.data.chats[m.chat]  
  if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}  
  if (chats) {  
  if (!('antilink' in chats)) chats.antilink = false  
  if (!('isBanned' in chats)) chats.isBanned = false  
  if (!('modeadmin' in chats)) chats.modeadmin = false  
  if (!('welcome' in chats)) chats.welcome = false
  if (!('audios' in chats)) chats.audios = false
  if (!('antiNsfw' in chats)) chats.welcome = false  
  if (!('antiFake' in chats)) chats.antiFake = false
  if (!('antiArabe' in chats)) chats.antiArabe = false
  if (!('autoDetect' in chats)) chats.autoDetect = false 
  if (!('antiBadWord' in chats)) chats.antiBadWord = false
  if (!('detect2' in chats)) chats.detect2 = false
  } else global.db.data.chats[m.chat] = {  
  antilink: false,  
  isBanned: false,   
  modeAdmin: false,  
  welcome: false,  
  audios: false,
  antiNsfw: false,  
  audios: false,
  antiFake: false,
  antiArabe: false,
  autoDetect: false,
  antiBadWord: false,
  detect2: false,
  }
  
  let setting = global.db.data.settings[conn.user.jid]
  if (typeof setting !== 'object') global.db.data.settings[conn.user.jid] = {}  
  if (setting) {  
  if (!isNumber(setting.status)) setting.status = 0  
  if (!('autobio' in setting)) setting.autobio = true
  if(!('privateMode' in setting)) setting.privateMode = false
  if (!('jadibot' in setting)) setting.jadibot = true 
  if(!('antiCall' in setting)) setting.antiCall = false
  } else global.db.data.settings[conn.user.jid] = {  
  status: 0,  
  autobio: true,
  privateMode: false,
  jadibot: true,
  antiCall: false
  }


  global.db.data.sticker = global.db.data.sticker || {} // sticker for addcmd
if (user) {

if (user.level <= 3) {
  user.role = '🍱 Novato I'
} else if (user.level <= 6) {
  user.role = '🍱 Novato II'
} else if (user.level <= 9) {
  user.role = '🍱 Novato III'
} else if (user.level <= 12) {
  user.role = '🍱 Novato IV'
} else if (user.level <= 15) {
  user.role = '📜 Principiante I'
} else if (user.level <= 18) {
  user.role = '📜 Principiante II'
} else if (user.level <= 21) {
  user.role = '📜 Principiante III'
} else if (user.level <= 24) {
  user.role = '📜 Principiante IV'
} else if (user.level <= 27) {
  user.role = '⚔️ Veterano I'
} else if (user.level <= 30) {
  user.role = '⚔️ Veterano II'
} else if (user.level <= 33) {
  user.role = '⚔️ Veterano III'
} else if (user.level <= 36) {
  user.role = '⚔️ Veterano IV'
} else if (user.level <= 39) {
  user.role = '🏆 Elite I'
} else if (user.level <= 42) {
  user.role = '🏆 Elite II'
} else if (user.level <= 45) {
  user.role = '🏆 Elite III'
} else if (user.level <= 48) {
  user.role = '🏆 Elite IV'
} else if (user.level <= 51) {
  user.role = '👑 Maestro I'
} else if (user.level <= 54) {
  user.role = '👑 Maestro II'
} else if (user.level <= 57) {
  user.role = '👑 Maestro III'
} else if (user.level <= 60) {
  user.role = '🌟 Leyenda I'
} else if (user.level <= 63) {
  user.role = '🌟 Leyenda II'
} else if (user.level <= 66) {
  user.role = '🌟 Leyenda III'
} else if (user.level <= 69) {
  user.role = '🔥 Mítico I'
} else if (user.level <= 72) {
  user.role = '🔥 Mítico II'
} else if (user.level <= 75) {
  user.role = '🔥 Mítico III'
} else if (user.level <= 78) {
  user.role = '💫 Supremo I'
} else if (user.level <= 81) {
  user.role = '💫 Supremo II'
} else if (user.level <= 84) {
  user.role = '💫 Supremo III'
} else if (user.level <= 87) {
  user.role = '🌀 Divino I'
} else if (user.level <= 90) {
  user.role = '🌀 Divino II'
} else if (user.level <= 93) {
  user.role = '🌀 Divino III'
} else if (user.level <= 96) {
  user.role = '🌌 Celestial I'
} else if (user.level <= 99) {
  user.role = '🌌 Celestial II'
} else if (user.level <= 102) {
  user.role = '🌌 Celestial III'
} else if (user.level <= 105) {
  user.role = '🌟 Estelar I'
} else if (user.level <= 108) {
  user.role = '🌟 Estelar II'
} else if (user.level <= 111) {
  user.role = '🌟 Estelar III'
} else if (user.level <= 114) {
  user.role = '🌠 Universal I'
} else if (user.level <= 117) {
  user.role = '🌠 Universal II'
} else if (user.level <= 120) {
  user.role = '🌠 Universal III'
} else if (user.level <= 123) {
  user.role = '🎖️ Supremacía I'
} else if (user.level <= 126) {
  user.role = '🎖️ Supremacía II'
} else if (user.level <= 129) {
  user.role = '🎖️ Supremacía III'
} else if (user.level <= 132) {
  user.role = '🔱 Divinidad I'
} else if (user.level <= 135) {
  user.role = '🔱 Divinidad II'
} else if (user.level <= 138) {
  user.role = '🔱 Divinidad III'
} else if (user.level <= 141) {
  user.role = '🌌 Infinito I'
} else if (user.level <= 144) {
  user.role = '🌌 Infinito II'
} else if (user.level <= 147) {
  user.role = '🌌 Infinito III'
} else if (user.level <= 150) {
  user.role = '🌠 Eterno'
} else if(user.level <= 153) {
  user.role = '🌠 Eterno I'
} else if(user.level <= 156) {
  user.role = '🌠 Eterno II'
} else if(user.level <= 159) {
  user.role = '🌠 Eterno III'
} else if(user.level <= 162) {
  user.role = '🌠 Eterno IV'
} else if(user.level <= 165) {
  user.role = '🌠 Eterno V'
} else if(user.level <= 168) {
  user.role = '🌎 Dios I'
} else if(user.level <= 171) {
  user.role = '🌎 Dios II'
} else if(user.level <= 174) {
  user.role = '🌎 Dios III'
} else if(user.level <= 177) {
  user.role = '🌎 Dios IV'
} else if(user.level <= 180) {
  user.role = '🌎 Dios V'
} else if(user.level <= 183) {
  user.role = '🪐 Dios elite I'
} else if(user.level <= 186) {
  user.role = '🪐 Dios elite II'
} else if(user.level <= 189) {
  user.role = '🪐 Dios elite III'
} else if(user.level <= 192) {
  user.role = '🪐 Dios elite IV'
} else if(user.level <= 195) {
  user.role = '🪐 Dios elite V'
} else if(user.level <= 198) {
  user.role = '🌕 Dios maestro I'
} else if(user.level <= 201) {
  user.role = '🌕 Dios maestro II'
} else if(user.level <= 204) {
  user.role = '🌕 Dios maestro III'
} else if(user.level <= 207) {
  user.role = '🌕 Dios maestro IV'
} else if(user.level <= 210) {
  user.role = '🌕 Dios maestro V'
} else if(user.level <= 213) {
  user.role = '🌄 Dios leyenda I'
} else if(user.level <= 216) {
  user.role = '🌄 Dios leyenda II'
} else if(user.level <= 219) {
  user.role = '🌄 Dios leyenda III'
} else if(user.level <= 222) {
  user.role = '🌄 Dios leyenda IV'
} else if(user.level <= 225) {
  user.role = '🌄 Dios leyenda V'
} else if(user.level <= 228) {
  user.role = '🎆 Dios Mítico I'
} else if(user.level <= 231) {
  user.role = '🎆 Dios Mítico II'
} else if(user.level <= 234) {
  user.role = '🎆 Dios Mítico III'
} else if(user.level <= 237) {
  user.role = '🎆 Dios Mítico IV'
} else if(user.level <= 240) {
  user.role = '🎆 Dios Mítico V'
} else if(user.level <= 243) {
  user.role = '🎇 Dios Supremo I'
} else if(user.level <= 246) {
  user.role = '🎇 Dios Supremo II'
} else if(user.level <= 249) {
  user.role = '🎇 Dios Supremo III'
} else if(user.level <= 252) {
  user.role = '🎇 Dios Supremo IV'
} else if(user.level <= 255) {
  user.role = '🎇 Dios Supremo V'
} else if(user.level <= 258) {
  user.role = '⚡ Dios Divino I'
} else if(user.level <= 261) {
  user.role = '⚡ Dios Divino II'
} else if(user.level <= 264) {
  user.role = '⚡ Dios Divino III'
} else if(user.level <= 267) {
  user.role = '⚡ Dios Divino IV'
} else if(user.level <= 270) {
  user.role = '⚡ Dios Divino V'
} else if(user.level <= 273) {
  user.role = '🏛️ Dios Celestial I'
} else if(user.level <= 276) {
  user.role = '🏛️ Dios Celestial II'
} else if(user.level <= 279) {
  user.role = '🏛️ Dios Celestial III'
} else if(user.level <= 282) {
  user.role = '🏛️ Dios Celestial IV'
} else if(user.level <= 285) {
  user.role = '🏛️ Dios Celestial V'
} else if(user.level <= 288) {
  user.role = '☄️ Dios Estelar I'
} else if(user.level <= 291) {
  user.role = '☄️ Dios Estelar II'
} else if(user.level <= 294) {
  user.role = '☄️ Dios Estelar III'
} else if(user.level <= 297) {
  user.role = '☄️ Dios Estelar IV'
} else if(user.level <= 300) {
  user.role = '☄️ Dios Estelar V'
} else if(user.level > 301) {
  user.role = '🌘OMNIPOTENTE🌒'
}

}
} catch (error) {
m.error = error
if (error) {
console.error(m.error)
}
}

  

    if (m.message) {
        m.mtype = Object.keys(m.message)[0]
        m.body = m.message.conversation || m.message[m.mtype].caption || m.message[m.mtype].text || (m.mtype == 'listResponseMessage') && m.message[m.mtype].singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.message[m.mtype].selectedButtonId || m.mtype
        m.msg = m.message[m.mtype]
        if (m.mtype === 'ephemeralMessage') {
            exports.smsg(sock, m.msg)
            m.mtype = m.msg.mtype
            m.msg = m.msg.msg
        }
        let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
        if (m.quoted) {
            let type = Object.keys(m.quoted)[0]
			m.quoted = m.quoted[type]
            if (['productMessage'].includes(type)) {
				type = Object.keys(m.quoted)[0]
				m.quoted = m.quoted[type]
			}
            if (typeof m.quoted === 'string') m.quoted = {
				text: m.quoted
			}
            m.quoted.id = m.msg.contextInfo.stanzaId
			m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
            m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
			m.quoted.sender = m.msg.contextInfo.participant.split(":")[0] || m.msg.contextInfo.participant
			m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
            m.quoted.text = m.quoted.text || m.quoted.caption || ''
			m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })

            /**
             * 
             * @returns 
             */
            m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

            /**
              *
              * @returns
            */
            m.quoted.download = () => downloadMediaMessage(m.quoted)
        }
    }
    if (m.msg.url) m.download = () => downloadMediaMessage(m.msg)
    m.text = (m.mtype == 'listResponseMessage' ? m.msg.singleSelectReply.selectedRowId : '') || m.msg.text || m.msg.caption || m.msg || ''
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    buffer = await writeExifImg(buff, options)
    } else {
    buffer = await imageToWebp(buff)}
    await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer}
    
    conn.sendPayment = async (jid, amount, text, quoted, options) => { // 🤓
         conn.relayMessage(jid, { 
           requestPaymentMessage: { 
             currencyCodeIso4217: 'PEN', 
             amount1000: amount, 
             requestFrom: null, 
             noteMessage: { 
               extendedTextMessage: { 
                 text: text, 
                 contextInfo: { 
                   externalAdReply: { 
                     showAdAttribution: true, 
                   }, mentionedJid: conn.parseMention(text)}}}}}, {})
       }
      

    /**
    * @param {*} jid
    * @param {*} path
    * @param {*} caption 
    */
    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => { 
     let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0) 
     return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted }) 
     } 
     
    /**
    * @param {*} jid
    * @param {*} caption
    * @param {*} thumbnail
    * @param {*} quoted
    */
    conn.adReply = (jid, caption, thumbnail, quoted, inTrue) => {
    conn.sendMessage(jid ? jid : m.chat, {   
    text: caption,  
    contextInfo:{  
    forwardingScore: 9999999,  
    isForwarded: true,   
    mentionedJid:[m.sender],  
    "externalAdReply": {  
    "showAdAttribution": true,  
    "containsAutoReply": true,
    "renderLargerThumbnail": inTrue ? inTrue : false,  
    "title": botname,   
    "containsAutoReply": false,  
    "mediaType": 1,   
    "thumbnail": thumbnail ? thumbnail : global.menu,  
    "mediaUrl": `https://chat.whatsapp.com/Ebbo3i9xxiZFErul4gyApJ`,  
    "sourceUrl": `https://chat.whatsapp.com/Ebbo3i9xxiZFErul4gyApJ`  
    }
    }  
    }, { quoted: quoted ? quoted : m }) 
    }
    
    /**
    * @param {*} jid
    * @param {*} caption
    * @param {*} thumbail // optional
    * @param {*} orderTitle // optional
    * @param {*} userJid // optional
    */
    
    conn.sendCart = async (jid, text, thumbail, orderTitle, userJid) => {
    var messa = await prepareWAMessageMedia({ image: thumbail ? thumbail : success }, { upload: conn.waUploadToServer })
    var order = generateWAMessageFromContent(jid, proto.Message.fromObject({
    "orderMessage":{ "orderId":"3648563358700955",
    "thumbnail": thumbail ? thumbail : success,
    "itemCount": 999999,
    "status": "INQUIRY",
    "surface": "CATALOG",
    "message": text,
    "orderTitle": orderTitle ? orderTitle : 'unknown',
    "sellerJid": "5218442114446@s.whatsapp.net",
    "token": "AR4flJ+gzJw9zdUj+RpekLK8gqSiyei/OVDUFQRcmFmqqQ==",
    "totalAmount1000": "-500000000",
    "totalCurrencyCode":"USD",
    "contextInfo":{ "expiration": 604800, "ephemeralSettingTimestamp":"1679959486","entryPointConversionSource":"global_search_new_chat","entryPointConversionApp":"whatsapp","entryPointConversionDelaySeconds":9,"disappearingMode":{"initiator":"CHANGED_IN_CHAT"}}}
    }), { userJid: userJid ? userJid : conn.user.id})
    conn.relayMessage(jid, order.message, { messageId: order.key.id })
    }
    
    conn.user.jid = conn.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
    conn.user.chat = m.chat // chat in user?????????
    
    /**
    * @param {*} jid
    * @param {*} caption
    * @param {*} fakenumber
    * @param {*} fakecaption
    */

    conn.fakeReply = (jid, caption,  fakeNumber, fakeCaption) => {
    conn.sendMessage(jid, { text: caption }, {quoted: { key: { fromMe: false, participant: fakeNumber, ...(m.chat ? { remoteJid: null } : {}) }, message: { conversation: fakeCaption }}})
    }

    /**
    * @param {*} jid
    * @param {*} text
    * @param {*} editedText
    * @param {*} quoted
    */
    conn.editMessage = async (jid, text, editedText, seconds, quoted) => {
     const {key} = await conn.sendMessage(jid, { text: text }, { quoted: quoted ? quoted : m}); 
     await delay(1000 * seconds); // message in seconds?? (delay)
     await conn.sendMessage(m.chat, { text: editedText, edit: key }); 
    }
    
    /**
    * @param {*} jid
    * @param {*} audio
    * @param {*} quoted
    */
    conn.sendAudio = async (jid, audio, quoted, ppt, options) => { // audio? uwu
    await conn.sendPresenceUpdate('recording', jid)
    await conn.sendMessage(jid, { audio: { url: audio }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: ppt ? ptt : true, ...options }, { quoted: quoted ? quoted : m })
    }
    
    
    /**
    * @param {*} jid
    * @param {*} text
    * @param {*} quoted
    * @param {*} options
    */
    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
    
    
    /**
    * @param {*} jid
    * @param {*} text
    * @param {*} quoted
    * @param {*} options
    */
    
    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
   
    /**
    * @returns
    */
    
    conn.parseMention = async(text) => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
    
    /**
    * @param {*} jid
    */

    conn.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
    let decode = jidDecode(jid) || {}
    return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
    }
    
    /**
    * @param {*} jid?
    */
    
    conn.getName = (jid, withoutContact  = false) => { // jid = m.chat?
    id = conn.decodeJid(jid)
    withoutContact = conn.withoutContact || withoutContact 
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
    v = store.contacts[id] || {}
    if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
    else v = id === '0@s.whatsapp.net' ? {
    id,
    name: 'WhatsApp'
    } : id === conn.decodeJid(conn.user.jid) ?
    conn.user :
    (store.contacts[id] || {})
    return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    
    /**
    * @param {*} jid
    * @param {*} path
    * @param {*} fileName
    * @param {*} quoted
    * @param {*} options
    * @return
    */
	conn.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
    let types = await conn.getFile(PATH, true)
    let { filename, size, ext, mime, data } = types
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
    let { writeExif } = require('./lib/fuctions2.js')
    let media = { mimetype: mime, data }
    pathFile = await writeExif(media, { packname: global.packname, author: global.author})
    await fs.promises.unlink(filename)
    type = 'sticker'
    mimetype = 'image/webp'}
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await conn.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)
    }

    
    /**
    *
    * @param {*} jid
    * @param {*} kon
    * @param {*} quoted
    * @param {*} opts = options?
    */
    
    conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:toca aqui uwu\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${github}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Contacto`, contacts: list }, ...opts }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }
    
    
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)
    /**
    * a normal reply
    */
    m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, detectLinks: false, thumbnail: global.thumb, ...options })

    /**
    * copy message?
    */
    m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
    
    /**
     * 
     * @param {*} path 
     * @returns 
     */
    conn.getFile = async (PATH, save) => {
    let res
    let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) || {
    mime: 'application/octet-stream',
    ext: '.bin'
    }
    filename = path.join(__filename, '../temp/' + new Date * 1 + '.' + type.ext)
    if (data && save) fs.promises.writeFile(filename, data)
    return {
    res,
    filename,
	size: await getSizeMedia(data),
    ...type,
    data
    }
    }
    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])}
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
    }
    
    return m
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
