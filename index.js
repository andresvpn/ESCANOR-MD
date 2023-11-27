(async () => {
require("./settings")
const { default: makeWASocket, Browsers, makeInMemoryStore, useMultiFileAuthState, DisconnectReason, proto , jidNormalizedUser,WAMessageStubType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, msgRetryCounterMap, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const { state, saveCreds } = await useMultiFileAuthState('./authFolder')
const moment = require('moment')
const fs = require('fs')
const yargs = require('yargs/yargs')
const { smsg, sleep } = require('./lib/fuctions')
const _ = require('lodash')
const NodeCache = require('node-cache')
const os = require('os')
const { execSync } = require('child_process')
const util = require('util')
const pino = require('pino')
const { tmpdir } = require('os')
const { join } = require('path')
const { readdirSync, statSync, unlinkSync } = require('fs')



//base de datos
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./database/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./database/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase() //mario baboso me lo robas y te rompo tu madre

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './temp')];
  const filename = [];
  
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  
  return filename.map((file) => {
    const stats = statSync(file);
    
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) {
      return unlinkSync(file); // 3 minutes
    }
    
    return false;
  });
}


 
if (!opts['test']) { 
   if (global.db) { 
     setInterval(async () => { 
       if (global.db.data) await global.db.write(); 
       if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'temp'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete']))); 
     }, 30 * 1000); 
   } 
 }
setInterval(async () => {
await clearTmp()
await console.log(`
 ╭┈ ┈ ┈ ┈ ┈ • ${vs} • ┈ ┈ ┈ ┈ ┈╮
 ┊ ✅ Eliminando archivos temporales
 ╰┈ ┈ ┈ ┈ ┈ ┈ ┈┈ ┈ ┈ ┈ ┈ ┈ ┈╯`, '#00FFFF')
}, 180000)
//_________________
    
async function startBot() {

console.info = () => {}
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }), })
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
let { version, isLatest } = await fetchLatestBaileysVersion();   

const socketSettings = {
    printQRInTerminal: true,
    logger: pino({ level: 'silent' }),
    auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
    browser: ['ESCANOR-MD', 'Safari', '1.0.0'],
    msgRetry,
    msgRetryCache,
    version,
    syncFullHistory: true,
    getMessage: async (key) => { 
    if (store) { 
    const msg = await store.loadMessage(key.remoteJid, key.id); 
    return sock.chats[key.remoteJid] && sock.chats[key.remoteJid].messages[key.id] ? sock.chats[key.remoteJid].messages[key.id].message : undefined; 
    } 
    return proto.Message.fromObject({}); 
    }
}

const sock = makeWASocket(socketSettings)


async function getMessage(key) {
    if (store) {
    const msg = store.loadMessage(key.remoteJid, key.id)
    return msg.message && undefined
    } return {
    conversation: 'escanor Bv',
    }
    }



sock.ev.on('messages.upsert', async chatUpdate => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
    chatUpdate.messages.forEach(async (mek) => {
    try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        if (mek.key.id.startsWith('FatihArridho_')) return
        global.numBot = sock.user.id.split(":")[0] + "@s.whatsapp.net"
        global.numBot2 = sock.user.id
        m = smsg(sock, mek)
        require("./escanor")(sock, m, chatUpdate, mek, store)
        } catch (e) {
        console.log(e)
        }
       })
    } catch (err) {
        console.log(err)
    }
})

    sock.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                sock.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })


    


sock.ev.on('call', async (fuckedcall) => { // Mario is going to steal this
    sock.user.jid = sock.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
    let anticall = global.db.data.settings[sock.user.jid].antiCall
    if (!anticall) return
    console.log(fuckedcall)
    for (let fucker of fuckedcall) {
    if (fucker.isGroup == false) {
    if (fucker.status == "offer") {
    await sock.sendTextWithMentions(fucker.from, `*${sock.user.name} no recibe ${fucker.isVideo ? `videollamadas` : `llamadas` }*\n*@${fucker.from.split('@')[0]} serás bloqueado.*\n*Si accidentalmente llamaste, comunícate con el propietario para que lo desbloquee.*\n*wa.me/+573043603261*`)
    await sleep(8000)
    await sock.updateBlockStatus(fucker.from, "block")
    }
    }
    }
    })

sock.ev.on('group-participants.update', async (anu) => {
let isWelcome = global.db.data.chats[anu.id].welcome
if(!isWelcome) return
console.log(anu)
try {
let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await sock.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Get Profile Picture Group
try {
ppgroup = await sock.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

if (anu.action == 'add') {
sock.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `
*「 Grupos 」*

*╭┈⊰* ${metadata.subject} *⊰┈ ✦*
*┊👋 BIENVENIDO(A)!!*
*┊🎭 @${num.split("@")[0]}⁩*
*┊📄 *LEA LA DESCRIPCIÓN DEL GRUPO**
*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*
${metadata.desc}
`})
} else if (anu.action == 'remove') {
sock.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `
*「 Grupos 」*

*se nos fue @${num.split("@")[0]}*
*adios 👋*
`})
} else if (anu.action == 'promote') {
sock.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*「 Grupos 」*\n\n*@${num.split('@')[0]} 𝙴𝙽𝚃𝚁𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴 ${metadata.subject} 🎉🎉*`})
} else if (anu.action == 'demote') {
sock.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `*「 Grupos 」*\n\n*@${num.split('@')[0]} 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴 ${metadata.subject} 😑*`})
  }
}
} catch (err) {
console.log(err)
}
})

sock.ev.on("groups.update", async (json) => {
			console.log(json)
			const res = json[0];
			let autoDetect = global.db.data.chats[res.id].autoDetect
			if (!autoDetect) return
			if (res.announce == true) {
				await sleep(2000)
				try {
        ppgroup = await sock.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }

				let text = `*「 Grupos 」*\n\n*El grupo ha sido cerrado por el administrador.*\n*¡Ahora solo los administradores pueden enviar mensajes!*`
		sock.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/+573043603261`,  
        "sourceUrl": `https://wa.me/+573043603261`  
        }
        }  
        }, { quoted: null })
			} else if (res.announce == false) {
				await sleep(2000)
				try {
        ppgroup = await sock.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
				let text = `*「 Grupos 」*\n\n*el grupo a sido abierto por un admin*\n*los participantes pueden mandar mensajes*`
		sock.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/+573043603261`,  
        "sourceUrl": `https://wa.me/+573043603261`  
        }
        }  
        }, { quoted: null })
			} else if (res.restrict == true) {
				await sleep(2000)
				try {
        ppgroup = await sock.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
			let text = `*「 Grupos 」*\n\n La información del grupo ha sido restringida, ¡ahora solo el administrador puede editar la información del grupo!`
		sock.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/+573043603261`,  
        "sourceUrl": `https://wa.me/+573043603261`  
        }
        }  
        }, { quoted: null })
			} else if (res.restrict == false) {
				await sleep(2000)
				try {
        ppgroup = await sock.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
		    let text = `*「 Grupos 」*\n\n*Se ha abierto la información del grupo para todos los participantes*\n*¡Ahora los participantes pueden editar la información del grupo!*`
	    sock.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/+573043603261`,  
        "sourceUrl": `https://wa.me/+573043603261`  
        }
        }  
        }, { quoted: null })
			} else if(!res.desc == ''){
				await sleep(2000)
				try {
        ppgroup = await sock.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
	    let text = `*「 Grupos 」*\n\n*La descripción del grupo se ha cambiado:*\n\n*nueva descripción: ${res.desc}*`
	    sock.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/+573043603261`,  
        "sourceUrl": `https://wa.me/+573043603261`  
        }
        }  
        }, { quoted: null })
      } else {
				await sleep(2000)
				try {
        ppgroup = await sock.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
				let text = `*「 Grupos 」*\n\n*El nombre del grupo ha sido cambiado:*\n\n*nuevo nombre: ${res.subject}*`
        sock.sendMessage(res.id, {   
        text: text,  
        contextInfo:{  
        forwardingScore: 9999999,  
        isForwarded: true,   
        mentionedJid:[m.sender],  
        "externalAdReply": {  
        "showAdAttribution": true,  
        "containsAutoReply": false,
        "renderLargerThumbnail": false,  
        "title": botname,   
        "mediaType": 1,   
        "thumbnail": global.query,  
        "mediaUrl": `https://wa.me/+573043603261`,  
        "sourceUrl": `https://wa.me/+573043603261`  
        }
        }  
        }, { quoted: null })
				}
			
		})


sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr, receivedPendingNotifications } = update;
    console.log(receivedPendingNotifications)
    if (connection == 'connecting') {
        console.log(`
╭┈ ┈ ┈ ┈ ┈ • ${vs} • ┈ ┈ ┈ ┈ ┈╮
┊🧡 INICIANDO AGUARDE UN MOMENTO...
╰┈ ┈ ┈ ┈ ┈ ┈ ┈┈ ┈ ┈ ┈ ┈ ┈ ┈╯`)
    } else if (qr !== undefined) {
        console.log(`
╭┈ ┈ ┈ ┈ ┈ • ${vs} • ┈ ┈ ┈ ┈ ┈╮
┊ESCANEA EL QR, EXPIRA 45 SEG...
╰┈ ┈ ┈ ┈ ┈ ┈┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`)
    } else if (connection === 'close') {
        console.log(
        `⚠️ CONEXION CERRADA, SE INTENTARA RECONECTAR`);
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
            ? startBot()
            : console.log(
`Wa Web logged Out`
            );;
    } else if (connection == 'open') {
        console.log(`
╭┈ ┈ ┈ ┈ ┈ • ${vs} • ┈ ┈ ┈ ┈ ┈╮
┊ESCANOR-MD Se Conecto Correctamente a WhatsApp
╰┈ ┈ ┈ ┈ ┈┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯` + receivedPendingNotifications);
    }
});




sock.public = true
store.bind(sock.ev)
sock.ev.on('creds.update', saveCreds)

process.on('uncaughtException', console.log)
process.on('unhandledRejection', console.log)
process.on('RefenceError', console.log)


}

startBot()

})()
