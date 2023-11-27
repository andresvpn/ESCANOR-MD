// Código desde cero y comentarios hecho por:   
  // @gata_dios  
  // @Skidy89  
  // @a
  // Importaciones   
  const { WaMessageStubType, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, relayMessage} = require('@whiskeysockets/baileys'); 
  const moment = require('moment-timezone')  
  const gradient = require('gradient-string')
  const { execSync, exec, spawn  } = require('child_process') 
  const chalk = require('chalk')   
  const os = require('os') 
  const fs = require('fs') 
  const fetch = require('node-fetch')  
  const axios = require('axios')  
  const cheerio = require('cheerio')
  const QrCode = require('qrcode-reader')
  const qrcode = require('qrcode')
  const yts = require("youtube-yts")
  const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader.js')
  const { toAudio, toPTT, toVideo } = require('./lib/converter.js')
  const mimetype = require("mime-types")  
  const ws = require('ws')
  const webp = require("node-webpmux")  
  const ffmpeg = require('fluent-ffmpeg')
  const JavaScriptObfuscator = require('javascript-obfuscator')
  const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage } = require('./lib/fuctions')  
  const { default: makeWASocket, proto } = require("@whiskeysockets/baileys")
  const speed = require("performance-now")  
  const util = require('util')
  const diskusage = require('diskusage')
  const { pinterest, formatByte } = require('./lib/RandomFuctions.js')  
  const { skmenu } = require('./lib/menu.js')
  const { jadibot, listJadibot, killJadibot } = require('./serbot.js')  
  const { jadibot2 } = require('./serbot2.js')
  const { before } = require('./lib/detect.js')
  const { canLevelUp, xpRange } = require('./lib/levelling.js')
  
  const msgs = (message) => { 
  if (message.length >= 10) { 
  return `${message.substr(0, 500)}` 
  } else { 
  return `${message}`}} 
    
  const getFileBuffer = async (mediakey, MediaType) => {  
  const stream = await downloadContentFromMessage(mediakey, MediaType)  
  let buffer = Buffer.from([])  
  for await(const chunk of stream) {  
  buffer = Buffer.concat([buffer, chunk]) }  
  return buffer
  }  
  
  /**  
  * @param {proto.IWebMessageInfo.message} mek  
  * @param {proto.IWebMessageInfo} chatUpdate  
  * @param {import("@whiskeysockets/baileys").WASocket}   
  */  
  module.exports = conn = async (conn, m, chatUpdate, mek, store) => {  
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  
  
  if (m.key.id.startsWith("BAE5")) return  
  var budy = (typeof m.text == 'string' ? m.text : '') 
  const from = m.chat 
  const msg = JSON.parse(JSON.stringify(mek, undefined, 2)) 
  const content = JSON.stringify(m.message) 
  const type = m.mtype 
  const arg = body.substring(body.indexOf(' ') + 1) 
  const prefixes = ['/'] // modifica el prefijo
  global.prefix = prefixes.find(pref => body.startsWith(pref))
  const isCmd = body.startsWith(prefix);
  const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
  const args = body.trim().split(/ +/).slice(1) 
  const q = args.join(" ") 
  let t = m.messageTimestamp 
  const pushname = m.pushName || "Sin nombre" 
  const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
  const _isBot = conn.user.jid
  const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
  const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
  const itsMe = m.sender == conn.user.id ? true : false 
  const text = args.join(" ") 
  const quoted = m.quoted ? m.quoted : m 
  const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid 
  const mime = (quoted.msg || quoted).mimetype || ''  
  const isMedia = /image|video|sticker|audio/.test(mime) 
  const mentions = []  
  if (m.message[type].contextInfo) {   
  if (m.message[type].contextInfo.mentionedJid) {  
  const msd = m.message[type].contextInfo.mentionedJid  
  for (let i = 0; i < msd.length; i++) {  
  mentions.push(msd[i])}}}  
  
  const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : ''
  const groupName = m.isGroup ? groupMetadata.subject : '' 
  const participants = m.isGroup ? await groupMetadata.participants : '' 
  const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' 
  
  const isBotAdmins = m.isGroup ? groupAdmins.includes(botnm) : false  
  const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false 
  const isBaneed = m.isGroup ? blockList.includes(userSender) : false 
  const isPremium = m.isGroup ? premium.includes(userSender) : false   
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
  const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: menu, surface: 200, message: "puta gata", orderTitle: "puto aiden me lo folle", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}  
  const vcard =
`BEGIN:VCARD\n`
+ 'VERSION:3.0\n' 
+ `FN:ANDRES-VPN \n`
+ `ORG:ESCANOR-MD-BOT;\n`
+ `TEL;type=CELL;type=VOICE;waid=573043603261:+57 304 360 3261\n`
+ `END:VCARD`

  const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: "❗𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙶𝙻𝙾𝙱𝙰𝙻", jpegThumbnail: null}}}  
  const fgif = { key: {  participant: "0@s.whatsapp.net", }, message: { videoMessage: { title: botname, h: `Hmm`, seconds: "999999999", gifPlayback: "true", caption: vs, jpegThumbnail: success, }, }, }
  global.fakevovid = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: botname, jpegThumbnail: success, viewOnce: true }}}
  global.fpay = { "key": { "participant": `0@s.whatsapp.net`, "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "requestPaymentMessage": { "currencyCodeIso4217": "USD", "amount1000": "100000", "requestFrom": "5218442114446@s.whatsapp.net", "noteMessage": { "extendedTextMessage": { "text": botname }}, "expiryTimestamp": "0", "amount": { "value": "100000", "offset": 1000, "currencyCode": "USD" }, "background": { "id": "BBB9307B17C17F928E57A7435E45033E", "fileLength": "94896", "width": 64, "height": 64, "mimetype": "image/webp", "placeholderArgb": 4288282521, "textArgb": 4278190080, "subtextArgb": 4288282521}}}}
  const kick = function (from, orangnya) {  
  for (let i of orangnya) {  
  conn.groupParticipantsUpdate(m.chat, [i], "remove");  
  }}  
  const time = moment(Number(msg.messageTimestamp + "000")).locale("es-co").tz("America/Bogota").format('MMMM Do YYYY, h:mm:ss a')  
  
  const reply = (text) => {  
  m.reply(text)} 
  const sendAdMessage = (text, title, body, image, url) => { conn.sendMessage(m.chat, {text: text, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})}  
  const sendImage = ( image, caption ) => { conn.sendMessage(m.chat, { image: image, caption: caption }, { quoted: m })}  
  const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(m.chat, { image:  {url: url }, caption: caption }, { quoted: m })}  

  
  // ‿︵‿︵ʚɞ『 TIPOS DE MENSAJES Y CITADOS 』ʚɞ‿︵‿︵  
  const isAudio = type == 'audioMessage' // Mensaje de Audio  
  const isSticker = type == 'stickerMessage' // Mensaje de Sticker  
  const isContact = type == 'contactMessage' // Mensaje de Contacto  
  const isLocation = type == 'locationMessage' // Mensaje de Localización   
  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')  
  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')  
  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')  
  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')  
  const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')  
  const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo  
  const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)  
  
  if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.jid,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.jid)
        messages.key.id = m.key.id
        messages.pushName = pushname
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }
        
        if (global.db.data.chats[m.chat].autoSticker) {  
          if (/image/.test(mime)) {  
          reply(`Espera, estamos creando tu sticker...\n*Auto Sticker Activado*`)  
          media = await quoted.download()  
          let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })  
          await fs.unlinkSync(encmedia)  
        } else if (/video/.test(mime)) {  
          if ((quoted.msg || quoted).seconds > 40) return reply('¡Máximo 40 segundos!')  
          media = await quoted.download()  
          let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: goblal.author })  
          await new Promise((resolve) => setTimeout(resolve, 2000));   
          await fs.unlinkSync(encmedia)  
      }}
      
    before(m, command, participants)
    if (m.messageStubType == 29) throw 'test'

    if (global.db.data.chats[m.chat].antiFake) {
     if (m.chat && m.sender.startsWith('1')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    
    if (global.db.data.chats[m.chat].antiArabe) {
      if (m.chat && m.sender.startsWith('212')) return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }

    if (global.db.data.chats[m.chat].isBanned && isCmd && !isGroupAdmins) {
    return
    }
  
  if (global.db.data.chats[m.chat].modeAdmin && isCmd && !isGroupAdmins) return
    
  if (global.db.data.chats[m.chat].antilink) {  
  if (budy.match(`chat.whatsapp.com`)) {  
  let delet = m.key.participant  
  let bang = m.key.id  
  reply(`*「 ANTI LINK 」*\n\n*𝚕𝚒𝚗𝚔 𝚍𝚎𝚝𝚎𝚌𝚝𝚊𝚍𝚘*\n*𝚕𝚘 𝚜𝚒𝚎𝚗𝚝𝚘 𝚙𝚎𝚛𝚘 𝚗𝚘 𝚜𝚎 𝚙𝚎𝚛𝚖𝚒𝚝𝚎𝚗 𝚕𝚒𝚗𝚔𝚜 𝚜𝚎𝚛𝚊𝚜 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘*`)  
  if (!isBotAdmins) return reply(`𝚎𝚕 𝚋𝚘𝚝 𝚗𝚎𝚌𝚎𝚜𝚒𝚝𝚊 𝚜𝚎𝚛 𝚊𝚍𝚖𝚒𝚗`)  
  if (isGroupAdmins) throw '*eres admin -_-*'
  let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))  
  let isLinkThisGc = new RegExp(gclink, 'i')  
  let isgclink = isLinkThisGc.test(m.text)  
  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})  
  conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}} 
  
   //antipv 
   if (!m.isGroup) {
    tett = `❏------------------------❏
❏ *QUERIDO USUARIO EL BOT SOLO SE PUEDE UTILIZAR EN GRUPOS*
❏------------------------❏
❏ *ENTRA AL GRUPO OFICIAL*
❏------------------------❏`
    conn.sendMessage(from, {   
      text: tett,  
      contextInfo:{  
      forwardingScore: 9999999,  
      isForwarded: true,   
      mentionedJid:[m.sender],  
      "externalAdReply": {  
      "showAdAttribution": true,  
      "renderLargerThumbnail": true,  
      "title": botname,   
      "containsAutoReply": true,  
      "mediaType": 1,   
      "thumbnail": menu,  
      "mediaUrl": `https://chat.whatsapp.com/JnXjZlbW3JjIlcxfjzMGdD`,  
      "sourceUrl": `https://chat.whatsapp.com/JnXjZlbW3JjIlcxfjzMGdD`  
      }  
      }  
      }, { quoted: fkontak }) 
  return
    }


  if (!conn.public) {
    if (!m.key.fromMe) return
    }
    

      
  // ‿︵‿︵ʚɞ『 COLOR CONSOLE 』ʚɞ‿︵‿︵
  
const GREEN = '\033[0;32m'
const BLUE = '\033[0;34m'
const RED = '\033[0;31m'
  // ‿︵‿︵ʚɞ『 INFO CONSOLE 』ʚɞ‿︵‿︵         

//console de comando en grupo 
if (m.isGroup && isCmd) console.log(`
╭══════════════⪩
╰╮→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑬𝑵 𝑮𝑹𝑼𝑷𝑶
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}
┃│→ ${GREEN}𝑵𝑼𝑴𝑬𝑹𝑶: ${sender.split("@")[0]}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶:${BLUE}${groupName}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵
┃╰══⪨
╰══════════════⪨`)

//console de mensage en grupo
if (m.isGroup && !isCmd && m.message) console.log(`
╭══════════════⪩
╰╮→ ${GREEN}𝑴𝑬𝑵𝑺𝑨𝑱𝑬 𝑬𝑵 𝑮𝑹𝑼𝑷𝑶
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}
┃│→ ${GREEN}𝑵𝑼𝑴𝑬𝑹𝑶: ${sender.split("@")[0]}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶: ${BLUE}${groupName}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵
┃╰══⪨
╰══════════════⪨`)

//console de comando en privado
if (!m.isGroup && isCmd && m.message) console.log(`
╭══════════════⪩
╰╮→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑬𝑵 𝑷𝑹𝑰𝑽𝑨𝑫𝑶
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}
┃│→ ${GREEN}𝑵𝑼𝑴𝑬𝑹𝑶: ${sender.split("@")[0]}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶:𝑵𝑶
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵
┃╰══⪨
╰══════════════⪨`)
//console mensage en privado
if (!m.isGroup && !isCmd && m.message) console.log(`
╭══════════════⪩
╰╮→ ${GREEN}𝑴𝑬𝑵𝑺𝑨𝑱𝑬 𝑬𝑵 𝑷𝑹𝑰𝑽𝑨𝑫𝑶
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${sender.split("@")[0]}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶: 𝑵𝑶
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵
┃╰══⪨
╰══════════════⪨`)
///////////////∆NO TOCAR ARRIBA∆\\\\\\\\\\\\\\\\
const repusta = global.respuesta = {
creador: "𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁",
text: "𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾"
}
const linkk = args.join(" ")
const linkss = linkk.split("https://")[1]
    
//const web = "https://escanorweb-andres.onrender.com"
const web = "https://escanorweb.andresvpn.repl.co"
const web1 = "https://web.andresvpn.repl.co"
const apiOpenAi = "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"
const apikey = "andres"
  try {  
  switch (command) {
    case 'menu':
var timestamp = speed();  
var latensi = speed() - timestamp   
  let menuu = ` 
╭═══════|❏|═════⪩
╰╮女⃟⃟女MENU❈⃟き 
╭┤ ©andres vpn®
┃│ _~nombre:~_ [ *${pushname}* ]
┃│ _~numero:~_ [ *wa.me/${sender.split('@')[0]}* ]
┃│ _~modo:~_ [ *${conn.public ? 'publico' : 'privado'}* ]
┃│ _~velocidad:~_ [ *${latensi.toFixed(4)}* ]
┃│ _~usuarios:~_ [ *${Object.keys(global.db.data.users).length}* ]
┃│ _~prefijo:~_ [ *${prefix}* ]
┃╰══⪨
╰══════════════⪨
 ~∆ 𝙇𝙤𝙜𝙤𝙨 ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *Para/logos*
╭┤
┃│ ➣${prefix}blackpink [texto]
┃│ ➣${prefix}neon [texto]
┃│ ➣${prefix}greenneon [texto]
┃│ ➣${prefix}advanceglow [texto]
┃│ ➣${prefix}advanceglow [texto]
┃│ ➣${prefix}thunder [texto]
┃│ ➣${prefix}horrorblood [texto]
┃│ ➣${prefix}summersand [texto]
┃│ ➣${prefix}luxury [texto]
┃│ ➣${prefix}icecold [texto]
┃│ ➣${prefix}breakwall [texto]
┃│ ➣${prefix}roadwarning [texto]
┃│ ➣${prefix}box3d [texto]
┃│ ➣${prefix}strawberry [texto]
┃│ ➣${prefix}toxic [texto]
┃│ ➣${prefix}bokeh [texto]
┃│ ➣${prefix}natureleaves [texto]
┃│ ➣${prefix}fireworksparkle [texto]
┃│ ➣${prefix}jokerlogo [texto]
┃│ ➣${prefix}halloween [texto]
┃│ ➣${prefix}bloodfrosted [texto]
┃│ ➣${prefix}newyearcard [texto]
┃│ ➣${prefix}deluxesilver [texto]
┃│ ➣${prefix}minion [texto]
┃│ ➣${prefix}text1917 [texto]
┃│ ➣${prefix}holographic [texto]
┃│ ➣${prefix}neonlight [texto]
┃│ ➣${prefix}metaldark [texto]
┃│ ➣${prefix}sandengraved [texto]
┃│ ➣${prefix}sandsummer [texto]
┃│ ➣${prefix}sandwriting [texto]
┃│ ➣${prefix}futureneon [texto]
┃│ ➣${prefix}carvedwood [texto]
┃│ ➣${prefix}harrypotter [texto]
┃│ ➣${prefix}flamming [texto]
┃│ ➣${prefix}fallleaves [texto]
┃│ ➣${prefix}glowingneon [texto]
┃│ ➣${prefix}letterleaves [texto]
┃│ ➣${prefix}summernature [texto]    
┃│ ➣${prefix}golderrose [texto]
┃│ ➣${prefix}underwater [texto]
┃│ ➣${prefix}nature3d [texto]
┃│ ➣${prefix}wolfmetal [texto]
┃│ ➣${prefix}summer3d [texto]
┃│ ➣${prefix}woodenboard [texto]
┃│ ➣${prefix}woodheart [texto]  
┃│ ➣${prefix}coffe [texto]
┃│ ➣${prefix}love [texto]
┃│ ➣${prefix}undergrass [texto]
┃│ ➣${prefix}lovemessage [texto]
┃│ ➣${prefix}burnpaper [texto]
┃│ ➣${prefix}smoke [texto]
┃│ ➣${prefix}romance [texto]
┃│ ➣${prefix}cup1 [texto]
┃│ ➣${prefix}cup [texto]
┃│ ➣${prefix}shadow [texto]
┃│ ➣${prefix}avatarlolnew [texto]
┃│ ➣${prefix}freefire [texto]
┃│ ➣${prefix}silverplaybutton [texto]
┃│ ➣${prefix}goldplaybutton [texto]
┃│ ➣${prefix}birthdayday [texto]
┃│ ➣${prefix}snow3d [texto]
┃│ ➣${prefix}galaxybat [texto]
┃│ ➣${prefix}writegalacy [texto]
┃│ ➣${prefix}textbyname [texto]
┃│ ➣${prefix}wooden3d [texto]
┃│ ➣${prefix}starsnight [texto]
┃│ ➣${prefix}textcake [texto]
┃│ ➣${prefix}glittergold [texto]
┃│ ➣${prefix}noeltext [texto]
┃│ ➣${prefix}metallogo [texto]
┃│ ➣${prefix}greenbush [texto]
┃│ ➣${prefix}glossychrome [texto]
┃│ ➣${prefix}greenneon [texto]
┃│ ➣${prefix}hologram3d [texto]
┃│ ➣${prefix}galaxystyle [texto]
┃│ ➣${prefix}birthdaycake [texto]
┃│ ➣${prefix}heartshaped [texto]
┃│ ➣${prefix}royaltext [texto]
┃│ ➣${prefix}puppycute [texto]
┃│ ➣${prefix}beautifulflower [texto]
┃│ ➣${prefix}lighttext [texto]
┃│ ➣${prefix}galaxywallpaper [texto]
┃│ ➣${prefix}luxurygold [texto]
┃│ ➣${prefix}watercolor [texto]
┃│ ➣${prefix}multicolor3d [texto]
┃│ ➣${prefix}wetglass [texto]
┃╰══⪨
╰══════════════⪨
~∆ *ALTERADORES* ∆~
╭═══════|❏|═════⪩
╰╮
╭┤ ➣${prefix}bass
┃│ ➣${prefix}blown
┃│ ➣${prefix}deep
┃│ ➣${prefix}earrape
┃│ ➣${prefix}fast
┃│ ➣${prefix}fat
┃│ ➣${prefix}nightcore
┃│ ➣${prefix}reverse
┃│ ➣${prefix}robot
┃│ ➣${prefix}slow
┃│ ➣${prefix}smooth
┃│ ➣${prefix}squirrel
┃╰══⪨
╰══════════════⪨
~∆ *ADMIN* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *Para/Adms*
╭┤
┃│ ➣${prefix}salir
┃│ ➣${prefix}promote
┃│ ➣${prefix}demote
┃│ ➣${prefix}gp on/off
┃│ ➣${prefix}ban
┃│ ➣${prefix}linkgp
┃│ ➣${prefix}mudardc
┃│ ➣${prefix}mudarn
┃│ ➣${prefix}todos
┃│ ➣${prefix}todos2
┃╰══⪨
╰══════════════⪨
~∆ *CONFIGP* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *Para/configurar gp*
╭┤     *${prefix}activos*
┃│ ➣${prefix}on antilink
┃│ ➣${prefix}on antiarabes
┃│ ➣${prefix}on antifakes
┃│ ➣${prefix}on detect
┃│ ➣${prefix}on welcome
┃│ ➣${prefix}on audios
┃│ ➣${prefix}on jadibot
┃│ ➣${prefix}on antillamadas
┃│ ➣${prefix}on adultos
┃│ ➣${prefix}on dialogbot
┃│ ➣${prefix}off antilink
┃│ ➣${prefix}off antiarabes
┃│ ➣${prefix}off antifakes
┃│ ➣${prefix}off detect
┃│ ➣${prefix}off welcome
┃│ ➣${prefix}off audios
┃│ ➣${prefix}off jadibot
┃│ ➣${prefix}off antillamadas
┃│ ➣${prefix}off adultos
┃│ ➣${prefix}off dialogbot
┃╰══⪨
╰══════════════⪨
~∆  *STIKERS* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *Para/stikes*
╭┤
┃│ ➣${prefix}sticker
┃│ ➣${prefix}s
┃│ ➣${prefix}si
┃│ ➣${prefix}simg
┃│ ➣${prefix}attp
┃│ ➣${prefix}attp2
┃│ ➣${prefix}attp3
┃│ ➣${prefix}attp4
┃│ ➣${prefix}attp5
┃╰══⪨
╰══════════════⪨
~∆ *DESCARGAS* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *Para/descargas*
╭┤
┃│ ➣${prefix}playstore + [nombre]
┃│ ➣${prefix}tiktok_video + [link]
┃│ ➣${prefix}tiktok_music + [link]
┃│ ➣${prefix}tiktokvid + [link]
┃│ ➣${prefix}play +[nombre | link]
┃│ ➣${prefix}play2 +[nombre | link]
┃│ ➣${prefix}play3 +[nombre | link]
┃│ ➣${prefix}playvid +[nombre | link]
┃│ ➣${prefix}face_video + [link]
┃│ ➣${prefix}mediafire + [link]
┃│ ➣${prefix}imglink + [imagen]
┃│ ➣${prefix}acortar + [link]
┃│ ➣${prefix}toqr
┃│ ➣${prefix}mp3
┃╰══⪨
╰══════════════⪨
~∆ *BUSQUEDA* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *Para/busquedas*
╭┤
┃│ ➣${prefix}yts + [nombre]
┃│ ➣${prefix}gpt + [nombre]
┃│ ➣${prefix}gpt2 + [nombre]
┃│ ➣${prefix}infoanime + [nombre]
┃│ ➣${prefix}pinterest + [nombre]
┃│ ➣${prefix}imagen + [nombre]
┃│ ➣${prefix}ia + [texto]
┃│ ➣${prefix}lyrics + [nombre]
┃│ ➣${prefix}styletext + [texto]
┃│ ➣${prefix}whatmusic + [video-audio]
┃╰══⪨
╰══════════════⪨
 ~∆ *SERBOT* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *para que tengas tu propio bot*
╭┤
┃│ ➣${prefix}serqr
┃│ ➣${prefix}sercode
┃│ ➣${prefix}bots
┃│ ➣${prefix}public [modo publico]
┃│ ➣${prefix}self [modo privado]
┃│ ➣${prefix}deljadibot
┃│ ➣${prefix}serbug [solo reportes de serbot]
┃╰══⪨
╰══════════════⪨
 ~∆ *JUEGOS* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *para diversion en gp*
╭┤
┃│ ➣${prefix}fake
┃│ ➣${prefix}simi
┃│ ➣${prefix}cassino
┃│ ➣${prefix}vergrupo
┃│ ➣${prefix}rankgay
┃╰══⪨
╰══════════════⪨
~∆ *IMG EDIT* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *para modificar una imagen*
╭┤
┃│ ➣${prefix}anime
┃╰══⪨
╰══════════════⪨
~∆ *ECONOMIA* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *en estado de prueba[inestable]*
╭┤
┃│ ➣${prefix}trabajar
┃│ ➣${prefix}cartera
┃╰══⪨
╰══════════════⪨
 ~∆ *POKEMON* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *usa la pokedex para informarte*
╭┤
┃│ ➣${prefix}bulbasaur
┃│ ➣${prefix}ivysaur
┃│ ➣${prefix}venusaur
┃│ ➣${prefix}charmander
┃│ ➣${prefix}charmeleon
┃│ ➣${prefix}charizard
┃│ ➣${prefix}squirtle  
┃│ ➣${prefix}wartortle
┃│ ➣${prefix}blastoise
┃│ ➣${prefix}caterpie
┃│ ➣${prefix}metapod
┃│ ➣${prefix}butterfree
┃│ ➣${prefix}weedle
┃│ ➣${prefix}kakuna
┃│ ➣${prefix}beedrill      
┃│ ➣${prefix}pidgey
┃│ ➣${prefix}pidgeotto
┃│ ➣${prefix}pidgeot
┃│ ➣${prefix}rattata
┃│ ➣${prefix}raticate
┃│ ➣${prefix}spearow
┃│ ➣${prefix}fearow
┃│ ➣${prefix}ekans
┃│ ➣${prefix}arbok
┃│ ➣${prefix}pikachu
┃│ ➣${prefix}raichu
┃╰══⪨
╰══════════════⪨
~∆ *+18* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *[solo para mayores de edad]*
╭┤
┃│ ➣${prefix}hentai
┃│ ➣${prefix}hentai2
┃│ ➣${prefix}xxx + [nombre | link]
┃│ ➣${prefix}xnxxvid + [link]
┃│ ➣${prefix}xnxx + [nombre]
┃╰══⪨
╰══════════════⪨
 ~∆ *SOPORTE* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 *para reportar fallas en el bot*
╭┤
┃│ ➣${prefix}bug
┃╰══⪨
╰══════════════⪨
 ~∆ *CREADOR* ∆~
╭═══════|❏|═════⪩
╰╮𖡦 ${botname}
╭┤
┃│ ➣${prefix}update
┃│ ➣${prefix}entrar + [linkgp]
┃│ ➣${prefix}estado
┃│ ➣${prefix}ping
┃╰══⪨
╰══════════════⪨` 
 conn.sendMessage(from, {   
  text: menuu,  
  contextInfo:{  
  forwardingScore: 9999999,  
  isForwarded: true,   
  mentionedJid:[m.sender],  
  "externalAdReply": {  
  "showAdAttribution": true,  
  "renderLargerThumbnail": true,  
  "title": botname,   
  "containsAutoReply": true,  
  "mediaType": 1,   
  "thumbnail": menu,  
  "mediaUrl": `https://chat.whatsapp.com/JnXjZlbW3JjIlcxfjzMGdD`,  
  "sourceUrl": `https://chat.whatsapp.com/JnXjZlbW3JjIlcxfjzMGdD`  
  }  
  }  
  }, { quoted: fkontak }) 
   break
   
    case 'estadofc': case 'activos':
     if(!m.isGroup) return conn.sendMessage(from, { text: 'este comando es solo para grupos' }, { quoted: msg });
     
     conn.sendMessage(from, { text: `
|------❏ ~*GRUPO INFO*~ ❏------
| _*NOMBRE:*_ [ ${groupName} ]
| _*MIEMBROS:*_ [  ${participants.length} ]
| _*ADMINISTRADORES:*_ [ ${groupAdmins.length} ]
|
|❏-----on/off------❏
|❏ *antilink:* ${global.db.data.chats[m.chat].antilink ? '✓' : 'X'}
|❏-----------------------❏
|❏ *antiarabes:* ${global.db.data.chats[m.chat].antiArabe ? '✓' : 'X'}
|❏-----------------------❏
|❏ *antifakes:* ${global.db.data.chats[m.chat].antiFake ? '✓' : 'X'}
|❏-----------------------❏
|❏ *detect:* ${global.db.data.chats[m.chat].autoDetect ? '✓' : 'X'}
|❏-----------------------❏
|❏ *welcome:* ${global.db.data.chats[m.chat].welcome ? '✓' : 'X'}
|❏-----------------------❏
|❏ *audios:* ${global.db.data.chats[m.chat].audios ? '✓' : 'X'}
|❏-----------------------❏
|❏ *jadibot:* ${global.db.data.settings[conn.user.jid].jadibot ? '✓' : 'X'}
|❏-----------------------❏
|❏ *antillamadas:* ${global.db.data.settings[conn.user.jid].antiCall ? '✓' : 'X'}
|❏-----------------------❏
|❏ *adultos:* ${global.db.data.chats[m.chat].adultos ? '✓' : 'X'}
|❏-----------------------❏
|❏ *dialogbot:* ${global.db.data.chats[m.chat].dialogbot ? '✓' : 'X'}
|❏-----------------------❏
  ` }, { quoted: msg });
     
     break 
    
  case 'acortar':
  if (!text) return m.reply(`*[❗] INFO [❗]*\n*Ingresa un link para acortar!!*`)
  let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
  if (!shortUrl1) return m.reply(`*[❗] ERROR [❗]*`)
  let done = `
❏================•
❏ *𝙻𝙸𝙽𝙺 𝙰𝙲𝙾𝚁𝚃𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 [ ✓ ]*
❏================•
❏ *𝙻𝙸𝙽𝙺 𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻:* ${text}
❏================•
❏ *𝙻𝙸𝙽𝙺 𝙰𝙲𝙾𝚁𝚃𝙰𝙳𝙾:* ${shortUrl1}
❏================•`
  m.reply(done)
  break
   
   
  case 'nowa': 
  let regex = /x/g 
  if (!text) m.reply('⚠️ Falto el número.')
  if (!text.match(regex)) m.reply(`*Ejemplo de uso: ${prefix + command} 521999340434x*`)
  let random = text.match(regex).length, total = Math.pow(10, random), array = [] 
  for (let i = 0; i < total; i++) { 
  let list = [...i.toString().padStart(random, '0')] 
  let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net' 
  if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) { 
  let info = await conn.fetchStatus(result).catch(_ => {}) 
  array.push({ exists: true, jid: result, ...info }) 
  } else { 
  array.push({ exists: false, jid: result }) 
  }} 
  let txt = 'Registrados\n\n' + array.filter(v => v.exists).map(v => `• Nro: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'Sin descripcion'}\n*• Fecha:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*No registrados*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n') 
  m.reply(txt) 
  function formatDate(n, locale = 'id') { 
  let d = new Date(n) 
  return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })} 
  break 


    case 'addcase':
    if (!isCreator) throw mess.owner
    if (!text) throw 'envia el case'
    try {
    const addcase =[fs.readFileSync('escanor.js', 'utf8').slice(0, fs.readFileSync('escanor.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('escanor.js', 'utf8').slice(fs.readFileSync('escanor.js', 'utf8').lastIndexOf('break') + 5)].join('\n');
    fs.writeFileSync('escanor.js', addcase)
    conn.editMessage(m.chat, '*adding command temporarily*', '*command added!!*', 5, m)
    } catch (error) {
    throw new error
    }
    break
    
   case 'claim': case 'reclamar':
    let time = global.db.data.users[m.sender].lastClaim + 86400000
    if (new Date() - global.db.data.users[m.sender].lastClaim < 86400000) throw `*❗Ya reclamaste tu cofre*\n_*vuelve en ${msToTime(time - new Date())} para volver a reclamar*_`
    let expp = Math.floor(Math.random() * 5000)
    let _money = Math.floor(Math.random() * 50)
    let _limit = Math.floor(Math.random() * 10)
    global.db.data.users[m.sender].money += _money
    global.db.data.users[m.sender].exp += expp
    global.db.data.users[m.sender].limit += _limit
    var ttext = `*🌀 Obtienes un cofre 🌀*\n_*este cofre contiene*_\n*Dinero: ${_money}*\n*diamantes: ${_limit}*\n_*Exp: ${expp}*_`

    m.reply(ttext)
    global.db.data.users[m.sender].lastClaim = new Date() * 1

   break
   
   
    
    
        
   case'si': case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return conn.sendMessage(from, { text: `*ingresa un texto*` }, { quoted: msg });
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await conn.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await conn.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      conn.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      reply('no pude crear tu stiker lo siento')
    }
    }
    break
    
    case 'del':
    if (!m.isGroup) return reply(mess.group);  
    if (!isBotAdmins) return reply(mess.botAdmin);  
    if (!isGroupAdmins) return reply(mess.admin);
    if (!m.quoted) throw `*❗ Etiqueta un mensaje*`
      try { 
     const delet = m.message.extendedTextMessage.contextInfo.participant; 
     const bang = m.message.extendedTextMessage.contextInfo.stanzaId; 
     return conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}}); 
     } catch { 
     m.quoted.delete()
     }
     break
//grpos
case 'descripcion':// BY ALIZINDEV BY ALIZIN DEV 
case 'mudardc':// BY ALIZINDEV BY ALIZIN DEV 
    if (!m.isGroup) return reply('_*~ESTE COMANDO ES SOLO PARA GRUPOS~*_');  
    if (!isBotAdmins) return reply('_*~NESECITO SER ADMI~*_');  
    if (!isGroupAdmins) return reply('_*~SOLO LO PUEDE USAR UN ADM~*_');  
if (!text) return reply(`escriba un msg, ejemplo; ${prefix}cambiar dc`)
try {
await conn.groupUpdateDescription(from, `${text}`)
reply('descripcion alterada con exito ✓')
} catch(e) {
console.log(e)
reply('error...')
}
break
case 'mudarnm':
case 'mudanm': 
if(!m.isGroup) return reply(`este comando es para grupos`)
if (!text) return reply(`escriba un msg, ejemplo; ${prefix}mudarnm del Grupo ${groupName}`)
try {
await conn.groupUpdateSubject(from, `${text}`)
reply('Nombre alterado con exito ✓')
} catch(e) {
console.log(e)
reply('erro...')
}
break

case 'linkgp': 
case 'linkgroup': 
if (!m.isGroup) return reply('_*~ESTE COMANDO ES SOLO PARA GRUPOS~*_');  
    if (!isBotAdmins) return reply('_*~NESECITO SER ADMI~*_');  
    if (!isGroupAdmins) return reply('_*~SOLO LO PUEDE USAR UN ADM~*_');  
linkvc = await conn.groupInviteCode(from)
reply('_este es el link de este grandioso grupo_\n\nhttps://chat.whatsapp.com/'+linkvc)
break
     case 'gp':
    if (!m.isGroup) return reply(mess.group);  
    if (!isBotAdmins) return reply(mess.botAdmin);  
    if (!isGroupAdmins) return reply(mess.admin)
      if (args[0] === 'on') {
    m.reply(`*GRUPO ABIERTO CON EXITO✅*`)
    await conn.groupSettingUpdate(m.chat, 'not_announcement')
    } else if (args[0] === 'off') {
    m.reply(`*GRUPO CERRADO CON EXITO✅*`)
    await conn.groupSettingUpdate(m.chat, 'announcement')
    } else {
    conn.sendPoll(m.chat, '*❗ Elige una opcion*', [`${command.charAt(0).toUpperCase()+command.slice(1)} abrir`,`${command.charAt(0).toUpperCase()+command.slice(1)} cerrar`])
    }
    break


case 'global': 
case 'tmgrupo': {
 if (!isCreator) throw respuesta.creador
if (!args.join(" ")) return reply(`_*QUE MENSAJE QUIERE COMPARTIR*_?`)
const tm = args.join(" ")
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anuu = groups.map(v => v.id)
reply(`*𝙲𝙾𝙼𝙿𝙰𝚁𝚃𝙸𝙴𝙽𝙳𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙰 ${anuu.length} 𝙶𝚁𝚄𝙿𝙾𝚂*`)
for (let lll of anuu) {
await sleep(1500)
conn.sendMessage(lll, { text: `\t\t${botname} \n\n ${tm ? tm : 'no hay mensaje'}` }, { quoted: fdoc });
}
m.reply("𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙲𝙾𝙼𝙿𝙰𝚁𝚃𝙸𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 ✓")
}
break
    case 'public':
    if(_isBot !== m.sender) return conn.fakeReply(m.chat, 'este comando solo lo pueden usar bots o subbots', '0@s.whatsapp.net', '❌ No eres bot')
      conn.public = true
      m.reply('*ahora el bot es de uso publico*')
      break
  
      case 'self':
      if(_isBot !== m.sender) return conn.fakeReply(m.chat, 'este comando solo lo pueden usar bots o subbots', '0@s.whatsapp.net', '❌ No eres bot')
      conn.public = false
      m.reply('*ahora el bot es de uso privado*')
      break
  
  
      case 'serqr':  case 'serbot': case 'sercode':
      if (m.isGroup) return m.reply(mess.priv) 
      await jadibot(conn, m, command)  
      break 
      case 'deljadibot':
      killJadibot(conn, m, command)
      break
      
    case 'bots':
    try {
    let user = [... new Set([...global.listJadibot.filter(conn => conn.user).map(conn => conn.user)])];
    te = "*lista de subbots*\n\n";
    for (let i of user) {
      y = await conn.decodeJid(i.id);
      te += "Usuario: " + i.name + "\n";
      te += "Numero: https://wa.me/+" + y.split("@")[0] + "?text=/menu\n\n";
    }
    conn.sendMessage(from, { text: te }, { quoted: m });
  } catch (err) {
    reply(`*no hay subbots activos*`);
  }
    break;
 

    case 'fake':
    var gh = body.slice(11);
    var mentioned = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
    var replace = gh.split("|")[0];
    var target = gh.split("|")[1];
    var bot = gh.split("|")[2];
    if (mentioned && target && bot) {
    conn.fakeReply(m.chat, bot, mentioned, target)
    } else {
      conn.sendMessage(m.chat, { text: `Uso incorrecto del comando. Ejemplo: ${prefix + command} @usuario1|Este es el mensaje falso|Hola, esto es un mensaje real que se citará` });
    }
    break
    
    case 'levelup':
    let name = conn.getName(m.sender); 
    let user = global.db.data.users[m.sender]; 
   if (!canLevelUp(user.level, user.exp, global.multiplier)) { 
     let {min, xp, max} = xpRange(user.level, global.multiplier); 
     throw ` 
 ┌───⊷ *NIVEL* 
 ▢ Nombre : *${name}* 
 ▢ Nivel : *${user.level}* 
 ▢ XP : *${user.exp - min}/${xp}* 
 └────────────── 
  
 Te falta *${max - user.exp}* de *XP* para subir de nivel 
 `.trim(); 
   } 
   const before = user.level * 1; 
   while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++; 
   if (before !== user.level) {
     const str = ` 
 ┌─⊷ *LEVEL UP* 
 ▢ Nivel anterior : *${before}* 
 ▢ Nivel actual : *${user.level}* 
 └────────────── 
  
 *_Cuanto más interactúes con los bots, mayor será tu nivel_* 
 `.trim()
 throw str
 }    
 break
    
    
      case 's':  
      case 'sticker': {  
          if (/image/.test(mime)) {  
          m.reply(mess.wait)  
          media = await quoted.download()  
          let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })  
          await fs.unlinkSync(encmedia)  
        } else if (/video/.test(mime)) {  
          if ((quoted.msg || quoted).seconds > 40) return m.reply('¡Máximo 40 segundos!')  
          media = await quoted.download()  
          let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author })  
          await new Promise((resolve) => setTimeout(resolve, 2000));   
          await fs.unlinkSync(encmedia)  
      } else {  
          m.reply(`𝙴𝙽𝚅𝙸𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 | 𝚅𝙸𝙳𝙴𝙾 𝙲𝙾𝙽 ${prefix + command}\n\n𝙻𝙰 𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙳𝙴 40 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂`)  
          }  
      }  
      break
  
      //descargas
    
case 'gerarnick':
case 'styletext':
case 'fazernick':
case 'nombre':
try {
if (!text) throw respuesta.text
let { styletext } = require("./lib/styletext.js")
m.reply('𝙰𝙿𝙻𝙸𝙲𝙰𝙽𝙳𝙾 𝚂𝚃𝚈𝙻𝙾')
resultado = await styletext(text)
if (resultado.length > 0) {
let estilos = resultado.map((item, index) => `${index + 1}. ${item.result}`).join('\n—\n')
if (resultado.length > 5) {
estilos = estilos.split('\n—\n')
estilos = estilos.join('\n—\n')}
m.reply(`• 𝙰𝙿𝙻𝙸𝙲𝙰𝙽𝙳𝙾 𝚂𝚃𝚈𝙻𝙾𝚂 𝙿𝙰𝚁𝙰: ${text}\n\n${estilos}`)
} else {
m.reply('no fue posible aplicar los stylos')}
} catch (e) {
console.log(e)
m.reply(e)}
break

			

   
case 'face_video':
    if(!text) return reply(`utiliza ${prefix + command} + link`)
    try {
    face = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${text}`)
    await conn.sendMessage(from, {video: { url: face.result[0] },caption : `${botname}`, fileName: `escanor.mp4`, mimetype: 'video/mp4' }, { quoted: fkontak });  
    } catch (e) {
      console.log(e)
      reply('*lo siento, no pude realizar la descarga*')
    }
    break
  
   
    case 'tiktok_video':
     
     if(!text) return reply(`*utilize ${prefix + command} + link`)
     try{
         tk = await fetchJson(`${web}/api/tiktokvideo?url=${text}&apikey=${apikey}`)
        tkk = `
❏--------------------
❏ *titulo:* ${tk.titulo}
❏--------------------
❏ *nombre de usuario*: ${tk.nombreuser}
❏--------------------
❏ *nick:* ${tk.nick} 
❏--------------------
❏ *reproducciones:* ${tk.reproducciones} 
❏--------------------
❏ 👍: ${tk.likes} 💭: ${tk.comentarios} 🖇️: ${tk.compartido}
❏--------------------
${botname}
 
  `
    await conn.sendMessage(from, {video: { url: tk.video }, caption: tkk, fileName: `escanor.mp4`, mimetype: 'video/mp4' }, { quoted: fkontak }); 
     } catch (e) {
      console.log(e)
      reply('*lo siento, no pude descargar tu video*')
     }
    break 
    
case 'tiktokvid':
          if (!text) return m.reply( `*Ejemplo: ${prefix + command} link`)
           if (!q.includes('tiktok')) return m.reply(`*link invalido!*`)
    require('./lib/tiktok').Tiktok(q).then( data => {
    conn.sendMessage(m.chat, { video: { url: data.nowm }, caption: `
❏--------------------
❏𝚃𝙸𝚃𝚄𝙻𝙾: ${data.title}
❏--------------------
❏𝙰𝚄𝚃𝙾𝚁: ${data.author}
❏--------------------
❏ ${botname}
❏--------------------
    ` }, { quoted: m })
    })    
    break
       
    case 'tiktokmp3':
    case 'tiktokaudio':
    case 'tiktok_music':
        if (!text) return m.reply( `*Ejemplo: ${prefix + command} link*`)
         if (!q.includes('tiktok')) return m.reply(`*link invalido!*`)
    require('./lib/tiktok').Tiktok(q).then( data => {
    conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
    })    
    break
            
    
    

            
    
         case 'ofuscar':
       if (!text) return m.reply("*Ingresa el codigo que vas a ofuscar.*"); 
         function obfuscateCode(code) { 
        return JavaScriptObfuscator.obfuscate(code, { 
        compact: false, 
          controlFlowFlattening: true, 
        deadCodeInjection: true, 
        simplify: true, 
          numbersToExpressions: true, 
        }).getObfuscatedCode(); 
       } 
      let obfuscatedCode = await obfuscateCode(text); 
       conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
       break
            
  case 'getcase':  
    if (!isCreator) return conn.sendMessage(m.chat, { text: `*ESTE COMANDO ES PARA MI JEFE*` }, { quoted: msg });  
    if (!text) return m.reply(`no hay comando a buscar o que?`)  
    try {  
    bbreak = 'break'  
  reply('case ' + `'${args[0]}'` + fs.readFileSync('./escanor.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak)  
  } catch (err) {  
  console.error(err)  
  reply(" Error, tal vez no existe el comando")  
  }  
  break
  
  case 'sendcase':
  if (!isCreator) return conn.sendCart(m.chat, mess.owner)
  if (!text) return m.reply(`no hay comando a buscar o que?`)  
  if (!who) return m.reply(`*etiqueta a alguien*`)
  try {
  bbreak = 'break'
  m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./escanor.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak, who)
  conn.sendMessage(m.chat, { text: `enviado con exito a @${who.split("@")[0]}`, mentions: [who] })
  } catch (error) {
  console.error(error)
  m.reply(`no existe el comando`)
  }
  break



 
  case 'attp':  
    if (!text) return reply('ingresa algo para convertirlo a sticker :v')    
    conn.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}` } }, { quoted: fkontak })  
    break  
    
    case 'attp2':  
    if (!text) return reply('ingresa algo para convertirlo a sticker :v')  
     
    conn.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${text}` } }, { quoted: fkontak })  
    break  
  
  case 'attp3':  
    if (!text) return reply('ingresa algo para convertirlo a sticker :v')  
    conn.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${text}` } }, { quoted: fkontak })  
    break 
    
     case 'attp4':  
    if (!text) return reply('ingresa algo para convertirlo a sticker :v')  
    conn.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${text}` } }, { quoted: fkontak })  
    break   
    
    case 'attp5':
    if (!text) return reply('ingresa algo para convertirlo a sticker :v')  
     
    conn.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${text}` } }, { quoted: fkontak })  
    break   
//busquedas
case 'gpppt':
    if (!text) return reply('*ESCRIBA UN TEXTO*')
chatgpt = await fetchJson(`https://api.bruxiintk.repl.co/api/chatgpt?apikey=keybx&query=${text}`)
try {
async function loading1 () {
var editmsg = [
"*_~CONECTANDO A GPT~_*",
"*_~BUSCANDO RESPUESTA PARA~_* " + '*'+text+'*',
"*ﾠﾠRESPUESTA*\n"+chatgpt.resultado+"\n"
]
let { key } = await conn.sendMessage(from, {image: await getBuffer('https://freelogopng.com/images/all_img/1681142315open-ai-logo.png'),caption: '*_CARGANDO_*'})
for (let i = 0; i < editmsg.length; i++) {
await sleep(1000)
await conn.sendMessage(from, {image: await getBuffer('https://freelogopng.com/images/all_img/1681142315open-ai-logo.png'),caption: editmsg[i], edit: key })
}
}
loading1()
} catch (e) {
  console.log(e)
  reply('*no pude encontrar resultados*')
}
break


case 'hentai':
 links = `${web}/api/hentai?apikey=${apikey}`
  reply('*_enviando al privado..._*')
  conn.sendMessage(sender, { image: { url: links }, caption: `uwu` }, { quoted: fkontak });
  break 


case 'hentai2':
   let vnn = './audios/UwU.mp3'
   let api = "https://web.andresvpn.repl.co/api/hentai?apikey=andres"
  reply('*_enviando..._*')
  await conn.sendMessage(m.chat, {audio: { url : vnn } , mimetype: 'audio/mpeg', fileName: `hentai.mp3`, contextInfo: { externalAdReply: { 
     title: `🔥UWU🔥`, 
     body: "andres-vpn", 
     thumbnailUrl: api,  
     mediaType: 1, 
     showAdAttribution: true, 
     renderLargerThumbnail: true 
     }}} , { quoted: m })
  break


  case 'gpt2':
      if (!text) return reply('que quiere perguntar?')
reply(`🔎GPT🔍\n*buscando [${text}]*`)
try {
gpt = await fetchJson(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
gpti = gpt.result
conn.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/4aff931d3ab70a357b8ce.jpg` }, caption: `
♾️GPT♾️
${gpti} 
` }, { quoted: fkontak }); 
} catch (e) {
  console.log(e)
  reply('*no encontre resultados relacionados*')
}
break

    case 'yts':  
    if (!text) throw `Ejemplo: ${prefix + command} historia wa anime`;  
    const search = await yts(text);  
    let teks = 'Búsqueda en YouTube\n\nResultados de ' + text + '\n\n';  
    let no = 1;  
    let themeemoji = "❏";  
    for (let i of search.all) {  
      teks += `${themeemoji} No: ${no++}\n${themeemoji} Tipo: ${i.type}\n${themeemoji} ID del Video: ${i.videoId}\n${themeemoji} Título: ${i.title}\n${themeemoji} Vistas: ${i.views}\n${themeemoji} Duración: ${i.timestamp}\n${themeemoji} Subido: ${i.ago}\n${themeemoji} URL: ${i.url}\n\n━━━━━━━━━━━━\n\n`;  
    }  
    await conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });  
    break 
    
    case 'entrar': {
  if (!isCreator) return reply(`*este comando solo es para mi jefe*`)
       let result = args[0].split('https://chat.whatsapp.com/')[1] 
  await conn.groupAcceptInvite(result)
} 
reply('*_ENTRE EXITOSAMENTE AL GRUPO_*')
break

  
  case 'salir': {  
    if (!isCreator) return reply(`*este comando solo es para mi jefe*`);  
    reply(m.chat, `*Adios fue un gusto estar aqui hasta pronto*`);  
    await conn.groupLeave(m.chat);  
  }  
  break  
  
  case 'ban': {  
    if (!m.isGroup) return reply(mess.group);  
    if (!isBotAdmins) return reply(mess.botAdmin);  
    if (!isGroupAdmins) return reply(mess.admin);  
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';  
    conn.groupParticipantsUpdate(m.chat, [users], 'remove');  
  }  
  break  
  
  case 'promote': {  
    if (!m.isGroup) return reply(mess.group);  
    if (!isBotAdmins) return reply(mess.botAdmin);  
    if (!isGroupAdmins) return reply(mess.admin);  
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';  
    await conn.groupParticipantsUpdate(m.chat, [users], 'promote')
  }  
  break  
  
  case 'demote': {  
    if (!m.isGroup) return reply(mess.group);  
    if (!isBotAdmins) return reply(mess.botAdmin);  
    if (!isGroupAdmins) return reply(mess.admin);  
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';  
    await conn.groupParticipantsUpdate(m.chat, [users], 'demote')
  }  
  break  
  

  case 'toqr':{
  if (!text) return m.reply('*por favor manda un link para convertirlo en qr*')

   let qruwu = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qruwu.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await conn.sendMessage(m.chat, { image: medi, caption: `*aqui tienes tu qr*\n*${botname}*`}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break		
  
  case 'todos':  
    if (!m.isGroup) return reply(mess.group)
    if (!isGroupAdmins) return m.reply(mess.admin)
    if (isGroupAdmins || isCreator || !m.quoted ) {  
      conn.sendMessage(m.chat, { text: q ? q : "", mentions: participants.map((a) => a.id) }, { quoted: m })  
    }
    if (m.quoted) return conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) }, { quoted: m }) // Mario is going to steal it
    break;  
  
  case 'todoss2': {  
    if (!m.isGroup) return reply(mess.group);  
    if (!isBotAdmins) return reply(mess.botAdmin);  
    if (!isGroupAdmins) return reply(mess.admin);  
    let teks = `✿ ━〔 *🍬 𝐈𝐍𝐕𝐎𝐂𝐀𝐂𝐈𝐎́𝐍 𝐌𝐀𝐒𝐈𝐕𝐀  🍬* 〕━ ✿\n\n`;  
    teks += `✿ 𝐒𝐔 𝐀𝐃𝐌𝐈𝐍 𝐋𝐎𝐒 𝐈𝐍𝐕𝐎𝐂𝐀, 𝐑𝐄𝐕𝐈𝐕𝐀𝐍\n\n`;  
    teks += `✿ 𝐌𝐄𝐍𝐒𝐀𝐉𝐄:  ${text ? text : 'no hay mensaje :v'}\n\n`;  
    for (let mem of participants) {  
      teks += `┃@${mem.id.split('@')[0]}\n⁩`;  
    }  
    teks += `┃\n`;  
    teks += `╰━━━━━[ *${botname}* ]━━━━━⬣`;  
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m });  
  }  
  break  
  
 case 'estado':
 let cpuInfo = os.cpus()
let Cores = cpuInfo.length
let Model = cpuInfo[0].model
let arch = os.arch()
let memory = os.totalmem()
let skidCheck = '/'

diskusage.check(skidCheck, (err, info) => {
    if (err) {
        console.error(err)
        return
    }

    let totalUwu = info.total
    let freee = info.free
    let txtt = `
❏================•
❏𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃: ${botname}
❏𝚅𝙴𝚁𝚂𝙸𝙾𝙽: ${vs}
❏================•
❏𝚂𝙸𝚂𝚃𝙴𝙼𝙰 𝙾𝙿𝙴𝚁𝙰𝚃𝙸𝚅𝙾: ${os.platform()}
❏𝙰𝚁𝚀𝚄𝙸𝚃𝙴𝙲𝚃𝚄𝚁𝙰: ${arch}
❏𝙲𝙿𝚄: ${Model} 
❏𝙽𝚄𝙲𝙻𝙴𝙾𝚂: ${Cores}
❏𝙼𝙴𝙼𝙾𝚁𝙸𝙰 𝚁𝙰𝙼: ${formatByte(memory)}
❏𝙴𝚂𝙿𝙰𝙲𝙸𝙾 𝙴𝙽 𝙳𝙸𝚂𝙲𝙾 𝚄𝚂𝙰𝙳𝙾: ${formatByte(totalUwu)}
❏𝙴𝚂𝙿𝙰𝙲𝙸𝙾 𝚃𝙾𝚃𝙰𝙻 𝙴𝙽 𝙳𝙸𝚂𝙲𝙾: ${formatByte(freee)}
❏================•
❏𝚂𝚄𝙱-𝙱𝙾𝚃𝚂: ${listJadibot.length}
❏𝙲𝙷𝙰𝚃𝚂: ${Object.keys(m.chat).length} 
❏𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${Object.keys(global.db.data.users).length}
❏𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾 ${runtime(process.uptime())}
❏================•
`
 conn.sendCart(m.chat, txtt, success)
 })
    break
    
    
    case 'gay':
   conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/gay', { 
     avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
   })}, caption: `*🏳️‍🌈 @${who.split("@")[0]} es tremendo homosexual*`, mentions: [who] }, { quoted: m })
   break
   case 'horny':
   conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/horny', { 
     avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
   })}, caption: `*🔥 @${who.split("@")[0]} tiene licencia para estar horny*`, mentions: [who] }, { quoted: m })
   break
   case 'simp':
   conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/simpcard', { 
     avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
   })}, caption: `*🗿 @${who.split("@")[0]} tu religión es ser un simp!!*`, mentions: [who] }, { quoted: m })
   break
   case 'comentar': case 'comment':
   if (!text) throw '*falta un texto*'
   conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/youtube-comment', { 
     avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
     comment: text, 
     username: conn.getName(m.sender),
   })}, caption: `*🫵 @${m.sender.split("@")[0]} gracias por comentar!!!*`, mentions: [m.sender] }, { quoted: m })
   break
   case 'dvd':
   conn.sendMessage(m.chat, { image: { url: global.API('https://some-random-api.com', '/canvas/misc/tonikawa', { 
   avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
   })}, caption: `*💿 @${who.split("@")[0]} se convierte en un dvd!!!*`, mentions: [m.sender] }, { quoted: m })
   break
   case 'wallpaper':
   if (!text) throw `*❗ Ejemplo: ${prefix + command} gawr gura*` 
   let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
   let _res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text) 
   let _img = _res[Math.floor(Math.random() * _res.length)]
   conn.sendMessage(m.chat, { image: { url: _img }, caption: `*✨ Aqui tienes tu wallpaper de ${text}*`}, { quoted: fgif })
   break
   
   case 'anime':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${_upload}`
   await m.reply(`*❗espera*`)
   await conn.sendMessage(m.chat, { image: { url: anime }, caption: `✨ convertido a anime ✨`}, { quoted: fgif })
   } catch (e) {
   console.log(e)
   reply(' *_ NO PUEDE MODIFICARLO_* ')
    }
    } else {
    reply('selecciona una imagen')
    }
   break
   
   
   case 'gerarlink': 
   case 'imglink':
   if (/image/.test(mime)) {
   _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   _upload = await TelegraPh(_miMedia)
   m.reply(`*AGUARDA CREANDO LINK👇*`)
   sleep(5000)
   m.reply(_upload)
   } else { 
   m.reply(`*❗ responde a una imagen *`)
   }
   break
   
  case 'music?': 
  case 'whatmusic': {
         let acrcloud = require('acrcloud')
         const acr = new acrcloud({ 
   host: 'identify-eu-west-1.acrcloud.com', 
   access_key: 'c33c767d683f78bd17d4bd4991955d81', 
   access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu', 
 }); 
  
   
   if (/audio|video/.test(mime)) {
     if ((quoted.msg || quoted).seconds > 300) return m.reply('𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝚂𝚄𝙿𝙴𝚁𝙰 𝙻𝙾𝚂 𝟻𝙼𝙽'); 
     let media = await quoted.download(); 
     let ext = mime.split('/')[1]; 
     fs.writeFileSync(`./temp/${m.sender}.${ext}`, media); 
     let  res = await acr.identify(fs.readFileSync(`./temp/${m.sender}.${ext}`)); 
     let {code, msg} = res.status; 
     if (code !== 0) throw msg; 
     let {title, artists, album, genres, release_date} = res.metadata.music[0]; 
     let txt = ` 
 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰 
  
 •  𝚃𝙸𝚃𝚄𝙻𝙾: ${title} 
 •  𝙰𝚁𝚃𝙸𝚂𝚃𝙰: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'} 
 •  𝙰𝙻𝙱𝚄𝙼: ${album.name || 'No encontrado'} 
 • 𝙶𝙴𝙽𝙴𝚁𝙾: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'} 
 •  𝙵𝙴𝙲𝙷𝙰 𝙳𝙴 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾: ${release_date || 'No encontrado'} 
 `.trim(); 
     m.reply(txt); 
   } else throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*'; 
 }
 break
   //andres-vpn\\
   case 'play': {
 let limit_a1 = 50
 let limit_a2 = 400
 if (!text) throw `*❗No hay cancion o texto para buscar*\n*ejemplo: ${prefix + command} everyone wants to rule the world*`
 try { 
 let test = await yts(text)
 let you = test.all
 let { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
 let text1 = `
❏---𝚈𝙾𝚄𝚃𝚄𝙱𝙴-𝙿𝙻𝙰𝚈---❏
❏ *𝚃𝙸𝚃𝚄𝙻𝙾*: _${you[0].title}_
❏------------❏
❏ *𝚅𝙸𝚂𝚃𝙰𝚂:* ${you[0].views}
❏------------❏
❏ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${you[0].timestamp}
❏------------❏
❏ *𝚂𝚄𝙱𝙸𝙳𝙾:* ${you[0].ago}
❏------------❏
❏ *𝚄𝚁𝙻:* ${you[0].url}
❏------------❏
❏ *𝙸𝙳:* ${you[0].videoId}
❏------------❏
 `
 conn.sendMessage(m.chat, {image: {url: you[0].thumbnail}, caption: text1 }, {quoted: m})
 let q = '128kbps'
 let v = you[0].url
 let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
 let _tetme = await yt.title
 let size_api = await yt.size
 let bochilDownload = await yt.audio[q].download()
 let sex = await getBuffer(bochilDownload)
 let fileSizeInBytes = sex.byteLength; 
 let fileSizeInKB = fileSizeInBytes / 1024; 
 let fileSizeInMB = fileSizeInKB / 1024; 
 let size = fileSizeInMB.toFixed(2);    
     if (size >= limit_a2) {   
     await conn.sendMessage(m.chat, {text: `*[ ✔ ] Descargue su audio en ${bochilDownload}*`}, {quoted: m}); 
     return     
     }      
     if (size >= limit_a1 && size <= limit_a2) {   
     await conn.sendMessage(m.chat, {document: sex, mimetype: 'audio/mpeg', fileName: _tetme+ `.mp3`}, {quoted: m});    
     return 
     } else { 
     await conn.sendMessage(m.chat, {audio: sex, mimetype: 'audio/mpeg', fileName: _tetme + `.mp3`, contextInfo: { externalAdReply: { 
     title: `Nombre: ${_tetme}`, 
     body: "andres-vpn", 
     thumbnailUrl: you[0].thumbnail,  
     mediaType: 1, 
     showAdAttribution: true, 
     renderLargerThumbnail: true 
     }}} , { quoted: m })
     return     
     }       
 } catch (error) {
 throw `*ocurrio un error al descargar música*\n` + error
 }
 }
 break
 
  ///PLAY FAST BY: ANDRES-VPN\\\
case 'play2':
case 'play3'://andresvpn
if(!text) return m.reply('ingresa el nombre de una cancion')
 m.reply('*𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾...*')
 try{
let andres = await fetchJson(`https://web.andresvpn.repl.co/api/play?text=${text}&apikey=${apikey}`)
let titulo = await andres.result.titulo
let duracion = await andres.result.duracion
let vistas = await andres.result.view
let ago = await andres.result.ago
let urlvid = await andres.result.link_youtube
let imagen = await andres.result.img
let urll = await andres.result.url
tex = `
❏------------❏
❏ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${titulo}
❏------------❏
❏ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${duracion}
❏------------❏
❏ *𝚅𝙸𝚂𝚃𝙰𝚂:* ${vistas}
❏------------❏
❏ *𝚂𝚄𝙱𝙸𝙳𝙾:* ${ago}
❏------------❏
❏ *𝚄𝚁𝙻:* ${urlvid}
❏------------❏
`
conn.sendMessage(m.chat, {image: {url: imagen }, caption: tex }, {quoted: msg})
conn.sendMessage(from, { audio: { url: urll }, fileName: `${titulo}.mp3`, mimetype: 'audio/mp4' }, { quoted: msg })
} catch (e) {
console.log(e)
m.reply(e)
m.reply(`*_NO PUDE REALIZAR LA DESCARGA_*\n\n*DESCARGALO POR ESTE LINK👇*\n\n${urll}`)
} 
break 
///PLAY FAST BY: ANDRES-VPN\\\

 case 'playvid': {
    if (!text) return m.reply('ingresa un el nombre de un video')
   let { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
   let enviando
   let _limit1 = 100
   let _limit2 = 400
   let t = await yts(text)
   let r = t.all
   let text1 = `
*❏---𝚈𝙾𝚄𝚃𝚄𝙱𝙴-𝙿𝙻𝙰𝚈---❏*
❏ *𝚃𝙸𝚃𝚄𝙻𝙾*: _${r[0].title}_
❏------------❏
❏ *𝚅𝙸𝚂𝚃𝙰𝚂:* ${r[0].views}
❏------------❏
❏ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽* ${r[0].timestamp}
❏------------❏
❏ *𝚂𝚄𝙱𝙸𝙳𝙾:* ${r[0].ago}
❏------------❏
❏ *𝚄𝚁𝙻:* ${r[0].url}
❏------------❏
❏ *𝙸𝙳:* ${r[0].videoId}
❏------------❏`
   conn.sendMessage(m.chat, {image: {url: r[0].thumbnail}, caption: text1 }, {quoted: m})
   if (enviando) return
   enviando = true
   try {
   let qu = '360'
   let q = qu + 'p'
   let v = r[0].url
   let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
   let _tetme = await yt.title
   let size_api = await yt.size
   let bochilDownload = await yt.video[q].download()
   let sex = await getBuffer(bochilDownload)
   let fileSizeInBytes = sex.byteLength; 
   let fileSizeInKB = fileSizeInBytes / 1024; 
   let fileSizeInMB = fileSizeInKB / 1024; 
   let size = fileSizeInMB.toFixed(2);    
    
    if (size >= _limit2) {  
    await conn.sendMessage(m.chat, {text: `*❗ el archivo es demasiado pesado*\nDescargue en: ${bochilDownload}`}, {quoted: m});
    enviando = false  
    return    
    }    
      
    if (size >= _limit1 && size <= _limit2) {  
    await conn.sendMessage(m.chat, {document: sex, caption: '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾✓*', mimetype: 'video/mp4', fileName: r[0].title + `.mp4`}, {quoted: m})
    enviando = false 
    return    
    } else {
    await conn.sendMessage(m.chat, {video: sex, caption: '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾✓*' , mimetype: 'video/mp4', fileName: r[0].title + `.mp4`,  contextInfo: { externalAdReply: { 
     title: r[0].title, 
     body: "andres-v0n", 
     thumbnailUrl: r[0].thumbnail,  
     mediaType: 1, 
     showAdAttribution: true, 
     renderLargerThumbnail: true 
     }}} , { quoted: m })      
    enviando = false            
    return    
    }
      
   } catch (error) {
     enviando = false
     console.log(error)
     reply('no pude realizar la descarga')
  }
  }
  break




  case 'mediafire':
  let { mediafiredl } = require('@bochilteam/scraper')
  if (!text) throw '*❗Ingresa un elnace de mediafire*'
  try {
  let ann =  await mediafiredl(text)
  m.reply(`
❏-----------❏
❏ ${botname}
❏-----------❏
❏ *Nombre:* ${ann.filename}
❏-----------❏
❏ *Peso:* ${ann.filesizeH}
❏-----------❏
❏ *Tipo*: ${ann.ext}
❏-----------❏
*enviando archivo*`)
  await conn.sendMessage(from, {document: {url: `${ann.url}`}, mimetype: "application/" + `${ann.filetype}`, fileName: `${ann.filename}`})
   } catch (error) {
   console.log(error)
   reply('no pude realizar la descarga')
   }
   break
   
   case 'ttttt':
   avatar = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
   let { money, exp, role, limit, level } = global.db.data.users[m.sender]
   conn.sendMessage(m.chat, { image: { url: avatar }, caption: `
   *_🤖usuario:_ ${await conn.getName(who)}*
   *_🔱Rol:_ ${role}*
   *_🔅Nivel:_ ${level}*
   *_🔰Exp:_ ${exp}*
   *_💵Dinero:_ ${money}*
   `}, { quoted: fkontak })
   break
   
   case 'emojimix':
   let text1 = text.split("+")[0];
   let text2 = text.split("+")[1];
   if (!text1) throw `*❗ Ejemplo: ${prefix + command} 😑+😂*`
   if (!text2) throw `*❗ Ejemplo: ${prefix + command} 😑+😂*`
   try {
 hhh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${text1}_${text2}`)
    conn.sendMessage(m.chat, { sticker: { url: hhh.results.url } }, { quoted: fkontak })  
   } catch (error) {
   m.reply(error + `\n\nerror`)
   }
   break
   

 case 'lyrics':
 if (!text) throw `*⚠️ que música quieres ${conn.getName(m.sender)}?*\n*ejempo: ${prefix + command} say with me*`
 const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
 const resu = await lyricsv2(text).catch(async _ => await lyrics(text))
 reply(`*Titulo: ${resu.title}*\n*Autor: ${resu.author}*\n*link: ${resu.link}*\n*letra:*\n ${resu.lyrics}`)
 break
 
 case 'image': case 'imagen':
 let { googleImage } = require('@bochilteam/scraper')
 let res = await googleImage(text)
 image = res[Math.floor(Math.random() * res.length)];
  ulr = image
  acort = await (await fetch(`https://tinyurl.com/api-create.php?url=${ulr}`)).text()  
 conn.sendMessage(m.chat, { image: { url: ulr }, caption: `
❏================•
❏ *♻️𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝚂𝙸𝙼𝙸𝙻𝙰𝚁𝙴𝚂 𝙰*
❏ [ imagen ${text} ]
❏================•
❏ *✨𝚄𝚁𝙻:* 
❏ ${acort}
❏================•
 ` }, { quoted: fkontak })
 break
 
 case 'setcmd':  case 'addcmd':
                if (!m.quoted) throw '*❗ Etiqueta un Sticker*'
                if (!m.quoted.fileSha256) throw '*❗ Etiqueta un Sticker*'
                if (!text) throw '*Que comando vas a añadir?*'
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply('*✅ Hecho*')
            break
            case 'delcmd': 
                let _sh = m.quoted.fileSha256.toString('base64')
                if (!_sh) throw '*Este id de sticker no existe*'
                if (global.db.data.sticker[_sh] && global.db.data.sticker[_sh].locked) throw '*❌ No tienes permiso de eliminar este comando*'        
                delete global.db.data.sticker[_sh]
                m.reply('*✅ Hecho*')
            break
            case 'listcmd': 
                let _teks = `*Lista de comandos*\n*⚠️ Info los stickers con bold estan bloqueados!!*\n${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
                conn.sendText(m.chat, _teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            break
            case 'lockcmd': 
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw '*❗Etiqueta un sticker*'
                if (!m.quoted.fileSha256) throw '*❗Etiqueta un sticker*'
                let _hash = m.quoted.fileSha256.toString('base64')
                if (!(_hash in global.db.data.sticker)) throw '*❗Este sticker no esta en mi base de datos*'
                global.db.data.sticker[_hash].locked = !/^un/i.test(command)
                m.reply('*✅ Hecho*')
            break
            


    case 'andresvpn-code':
      if (m.isGroup) return m.reply(mess.priv)
    jadibot2(conn, m, command, text)
    break
  
  case 'ping':  
    var timestamp = speed();  
    var latensi = speed() - timestamp  
    conn.sendMessage(m.chat, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg });  
    break  
  
          case 'update':  
            if (!isCreator) return conn.sendMessage(m.chat, { text: `*ESTE COMANDO ES PARA MI JEFE*` }, { quoted: msg });  
           try {  
           let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))  
            await conn.sendMessage(m.chat, { text: stdout.toString() }, { quoted: msg });  
          } catch {  
           let updatee = execSync('git remote set-url origin https://github.com/andresvpn/ESCANOR-MD-BOT && git pull')  
            await conn.sendMessage(m.chat, { text: updatee.toString() }, { quoted: msg });  
         }  
           break  
  
         case 'simi': {  
          if (!text) return conn.sendMessage(m.chat, { text: `𝚒𝚗𝚐𝚛𝚎𝚜𝚊 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚑𝚊𝚋𝚕𝚊𝚛 𝚌𝚘𝚗 𝚜𝚒𝚖𝚒` }, { quoted: msg });  
          await conn.sendPresenceUpdate('composing', m.chat);  
            let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`);  
            let res = anu.success;  
            m.reply(res)
        }  
         break  
  
          case 'ia':
          case 'gpt':
          if (!text) return m.reply(`*ingresa un texto para hablar con chatgpt*`)
          try {     
         let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`) 
         let hasill = await tioress.json() 
         m.reply(`${hasill.result}`.trim())    
         } catch {
         let mygpt = await fetch(`https://vihangayt.me/tools/chatgpt4?q=${text}`)
         let _result = await mygpt.json()
         m.reply(`${_result.data}`)
        }
         break
         
          case 'pinterest':  
          if (!text) return reply('𝚒𝚗𝚐𝚛𝚎𝚜𝚊 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚋𝚞𝚜𝚌𝚊𝚛 𝚎𝚗 𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝')  
          m.reply(mess.wait)  
          lol = await pinterest(text) //.catch(m.reply)  
          result = lol[Math.floor(Math.random() * lol.length)];  
          sendImageAsUrl(result, `*-------「 PINTEREST 」-------*\n🤠 busqueda de ${text}\n🔗 url ${result}`)  
          break  
  
  

  
 
			
		  
		  
		    case 'blackpink':
    		case 'neon':
	    	case 'greenneon':
	    	case 'advanceglow':
    		case 'futureneon':
	    	case 'sandwriting':
       		case 'sandsummer':
	    	case 'sandengraved':
    		case 'metaldark':
    		case 'neonlight':
    		case 'holographic':
    		case 'text1917':
    		case 'minion':
	    	case 'deluxesilver':
    		case 'newyearcard':
	    	case 'bloodfrosted':
		    case 'halloween':
		    case 'jokerlogo':
		    case 'fireworksparkle':
		    case 'natureleaves':
		    case 'bokeh':
		    case 'toxic':
		    case 'strawberry':
		    case 'box3d':
		    case 'roadwarning':
		    case 'breakwall':
		    case 'icecold':
		    case 'luxury':
		    case 'cloud':
		    case 'summersand':
		    case 'horrorblood':
		    case 'thunder':
			if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} ${botname}`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkeysapi}&text=${text}` } })
			break
			case 'wetglass':
		    case 'multicolor3d':
    		case 'watercolor':
    		case 'luxurygold':
    		case 'galaxywallpaper':
    		case 'lighttext':
    		case 'beautifulflower':
    		case 'puppycute':
    		case 'royaltext':
    		case 'heartshaped':
    		case 'birthdaycake':
    		case 'galaxystyle':
    		case 'hologram3d':
    		case 'greenneon':
    		case 'glossychrome':
    		case 'greenbush':
    		case 'metallogo':
	    	case 'noeltext':
    		case 'glittergold':
    		case 'textcake':
	    	case 'starsnight':
	    	case 'wooden3d':
	    	case 'textbyname':
	    	case 'writegalacy':
    		case 'galaxybat':
    		case 'snow3d':
    		case 'birthdayday':
    		case 'goldplaybutton':
    		case 'silverplaybutton':
    		case 'freefire':
			if (args.length == 0) return reply(`Ejemplo: ${prefix + command} escanor bot`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkeysapi}&text=${text}` } })
			break
			case 'shadow':
	    	case 'cup':
    		case 'cup1':
    		case 'romance':
    		case 'smoke':
    		case 'burnpaper':
    		case 'lovemessage':
    		case 'undergrass':
    		case 'love':
    		case 'coffe':
    		case 'woodheart':
	    	case 'woodenboard':
	    	case 'summer3d':
	    	case 'wolfmetal':
    		case 'nature3d':
    		case 'underwater':
    		case 'golderrose':
    		case 'summernature':
    		case 'letterleaves':
	    	case 'glowingneon':
	    	case 'fallleaves':
	    	case 'flamming':
	    	case 'harrypotter':
	    	case 'carvedwood':
			if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} ${botname}`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkeysapi}&text=${text}` }}, {quoted: m })
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':  
                  try {  
                  let set  
                  if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'  
                  if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'  
                  if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'  
                  if (/earrape/.test(command)) set = '-af volume=12'  
                  if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'  
                  if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'  
                  if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'  
                  if (/reverse/.test(command)) set = '-filter_complex "areverse"'  
                  if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'  
                  if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'  
                  if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'  
                  if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'  
                  if (/audio/.test(mime)) {  
                  let media = await conn.downloadAndSaveMediaMessage(quoted)  
                  let ran = getRandom('.mp3')  
                  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {  
                  fs.unlinkSync(media)  
                  if (err) return reply(err)  
                  let buff = fs.readFileSync(ran)  
                  conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })  
                  fs.unlinkSync(ran)  
                  })  
                  } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)  
                  } catch (e) {  
                  m.reply(`hubo un error... ${e}`)  
                  }  
                  break  
                  
              
            case 'toaudio': case 'tomp3': case 'mp3': {
                  if (!/video/.test(mime) && !/audio/.test(mime)) throw `*❗ Etiqueta un video con ${prefix + command}*`
                  if (!quoted) throw `*❗ Etiqueta un video con ${prefix + command}*`
                  m.reply("𝙲𝙾𝙽𝚅𝙸𝚁𝚃𝙸𝙴𝙽𝙳𝙾 𝙰 𝙼𝙿𝟹...")
                  let { toAudio } = require('./lib/converter.js')
                  let media  = await quoted.download()  
                  let audio = await toAudio(media, 'mp4')
                  await conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', contextInfo:{  externalAdReply: { showAdAttribution: true,
                  mediaType:  1,
                  mediaUrl: 'https://github.com/',
                  title: global.botname,
                  sourceUrl: `https://github.com/`, 
                  thumbnail: global.success
                  }}}, { quoted: m })
                  }
                  break
       
		
		
                  
			

		    
	    	case 'lewd':
	    	case 'feed':
	    	case 'gasm':
	    	case 'anal':
	    	case 'holo':
	    	case 'tits':
	    	case 'kuni':
	    	case 'kiss':
    		case 'erok':
	    	case 'smug':
	    	case 'solog':
	    	case 'feetg':
	    	case 'lewdk':
	    	case 'waifu':
	    	case 'pussy':
	    	case 'femdom':
	    	case 'cuddle':
	    	case 'eroyuri':
	    	case 'cum_jpg':
	    	case 'blowjob':
		    case 'holoero':
		    case 'erokemo':
		    case 'fox_girl':
		    case 'futanari':
		    if (!m.isGroup) return m.reply('_*este comando solo puede ser utilizado en grupos*_')
		    if (!global.db.data.chats[m.chat].antiNsfw) return m.reply(`*el comando ${command} no esta activado en este grupo*\n*usa ${prefix}enable antinsfw*`)
	        sendImageAsUrl(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkeysapi}`, `*🔥 ${command} 🔥*`)
		    break
		
		    case 'on':
			let inChat = global.db.data.chats[m.chat] // inChat database ?
			let inBot = global.db.data.settings[conn.user.jid] // inBot database ?
			let inEnable = (args[0] || '').toLowerCase() // args ?
			let actived = `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}enable ${inEnable}*`
			let inSuccess = `*el ${inEnable} fue activado en este grupo*`
			let inBotSuccess = `*el ${inEnable} fue activado en este bot*`
			switch (inEnable) { // inEnable ? inEnable : commands
			
			case 'antilink':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.antilink) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, global.query, botname)
			inChat.antilink = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'antinsfw':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.antiNsfw) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, global.query, botname)
			inChat.antiNsfw = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'detect':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.autoDetect) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inChat.autoDetect = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'antifakes':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.antiFake) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inChat.antiFake = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'audios':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.audios) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inChat.audios = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'antiarabes':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.antiArabe) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inChat.antiArabe = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'welcome':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.welcome) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inChat.welcome = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'modoadmin':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (!inChat.modeAdmin) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inChat.modeAdmin = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'antillamadas':
			if (!conn.user.jid) return conn.sendCart(m.chat, `*solo un bot/subbot puede usar este comando*`, query)
			if (inChat.antiCall) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inBot.antiCall = true
			conn.sendCart(m.chat, inBotSuccess, success)
			break
			case 'jadibot':
			if (!isCreator) return conn.sendCart(m.chat, mess.owner, success)
			if (inBot.jadibot) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}disable ${inEnable}*`, query)
			inBot.jadibot = true
			conn.sendCart(m.chat, inBotSuccess, success)
			break
      case 'adultos':
			if (!m.isGroup) return reply(mess.group);  
      if (!isGroupAdmins) return reply(mess.admin);
	        	if (inChat.adultos) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}off ${inEnable}*`, query)
			inChat.adultos = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			case 'dialogbot':
			if (!m.isGroup) return reply(mess.group);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (inChat.dialogbot) return conn.sendCart(m.chat, `*el ${inEnable} ya esta activado!!*\n*puedes desactivarlo con ${prefix}off ${inEnable}*`, query)
			inChat.dialogbot = true
			conn.sendCart(m.chat, inSuccess, success)
			break
			default:
          if (budy === `${prefix}`) {
             conn.sendMessage(from, {text: `
╭════════════════⪩
╰╮き⃟🦁 _*${botname}*_🦁⃟き
╭┤➫ _*utiliza ${prefix}menu*_
┃│➫ _*para ver mis funciones*_
╰════════════════⪨
            ` }, {quoted: msg })
            } else if (budy.startsWith(`${prefix}`)) {
            conn.sendMessage(from, {text: `
╭════════════════⪩
╰╮き⃟🦁 _*ERROR*_🦁⃟き
╭┤➫ _*usuario     ${pushname}*_
┃│➫ _*comando [${prefix + command} ${text}]es incorrecto❗*_
┃│➫ _*lea detenidamente el menu*_
╰════════════════⪨
            ` }, {quoted: msg })}
          
			
			}
			break
			
			case 'off':
			let Chat = global.db.data.chats[m.chat] // Chat database ?
			let Bot = global.db.data.settings[conn.user.jid] // Bot database ?
			let inDisable = (args[0] || '').toLowerCase() // args ?
			let disable = `*el ${inDisable} ya esta desactivado!!*\n*puedes activarlo con ${prefix}enable ${inDisable}*`
			let inSuccessDisable = `*el ${inDisable} fue desactivado en este grupo*`
			let inBotDisable = `*el ${inDisable} fue desactivado en este bot*`
			switch (inDisable) { // inDisable ? inDisable : commands
			
			case 'antilink':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);  
			if (!Chat.antilink) return conn.sendCart(m.chat, disable, global.query, botname)
			Chat.antilink = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'antinsfw': case 'antiporno':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);  
			if (!Chat.antiNsfw) return conn.sendCart(m.chat, disable, global.query, botname)
			Chat.antiNsfw = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'detect':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (!Chat.autoDetect) return conn.sendCart(m.chat, disable, query)
			Chat.autoDetect = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'antifakes':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (!Chat.antiFake) return conn.sendCart(m.chat, disable, query)
			Chat.antiFake = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'audios':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (!Chat.audios) return conn.sendCart(m.chat, disable, query)
			Chat.audios = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'antiarabes':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (!Chat.antiArabe) return conn.sendCart(m.chat, disable, query)
			Chat.antiArabe = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'welcome':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (!Chat.welcome) return conn.sendCart(m.chat, disable, query)
			Chat.welcome = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'modoadmin':
			if (!m.isGroup) return reply(mess.group);  
            if (!isBotAdmins) return reply(mess.botAdmin);  
            if (!isGroupAdmins) return reply(mess.admin);
			if (!Chat.modeAdmin) return conn.sendCart(m.chat, disable, query)
			Chat.modeAdmin = false
			conn.sendCart(m.chat, inSuccessDisable, success)
			break
			case 'antillamadas':
			if (!conn.user.jid) return conn.sendCart(m.chat, `*solo un bot/subbot puede usar este comando*`, query)
			if (!Bot.antiCall) return conn.sendCart(m.chat, disable, query)
			Bot.antiCall = false
			conn.sendCart(m.chat, inBotDisable, success)
			break
			case 'jadibot':
			if (!isCreator) return conn.sendCart(m.chat, mess.owner, success)
			if (!Bot.jadibot) return conn.sendCart(m.chat, disable, query)
			Bot.jadibot = false
			conn.sendCart(m.chat, inBotDisable, success)
			break
      case 'adultos':
        if (!m.isGroup) return reply(mess.group);  
        if (!isGroupAdmins) return reply(mess.admin);
              if (!Chat.adultos) return conn.sendCart(m.chat, disable, global.query, botname)
        Chat.adultos = false
        conn.sendCart(m.chat, inSuccessDisable, success)
            
        break
        case 'dialogbot':
        if (!m.isGroup) return reply(mess.group);  
              if (!isGroupAdmins) return reply(mess.admin);
        if (!Chat.dialogbot) return conn.sendCart(m.chat, disable, query)
        Chat.dialogbot = false
        conn.sendCart(m.chat, inSuccessDisable, success)
        break
			default:
  if (budy === `${prefix}`) {
             conn.sendMessage(from, {text: `
╭════════════════⪩
╰╮き⃟🦁 _*${botname}*_🦁⃟き
╭┤➫ _*utiliza ${prefix}menu*_
┃│➫ _*para ver mis funciones*_
╰════════════════⪨
            ` }, {quoted: msg })
            } else if (budy.startsWith(`${prefix}`)) {
            conn.sendMessage(from, {text: `
╭════════════════⪩
╰╮き⃟🦁 _*ERROR*_🦁⃟き
╭┤➫ _*usuario     ${pushname}*_
┃│➫ _*comando [${prefix + command} ${text}]es incorrecto❗*_
┃│➫ _*lea detenidamente el menu*_
╰════════════════⪨
            ` }, {quoted: msg })}
          
			
			}
			break
			

    
			

            case 'inspeccionar': case 'vergrupo':
    let linkRegex = args.join(" ")
    let textt = ``
    let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
    if (!coded) return m.reply("Link Invalid")
    conn.query({
    tag: "iq",
    attrs: {
    type: "get",
    xmlns: "w:g2",
    to: "@g.us"
    },
    content: [{ tag: "invite", attrs: { code: coded } }]
    }).then(async(res) => { 
    textt = `「 inspector de grupos」
▸ Nombre del grupo: ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Descripción: ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Creador del grupo: ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Grupo creado: ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Miembros: ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Miembros

▸ ID: ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

${botname}`
    try {
    pp = await conn.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
    } catch {
    pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
    }
    conn.sendMessage(m.chat, { text: textt }, { quoted: m })
    })
    break
    
  //info pokemon
case 'bulbasaur':
case 'ivysaur':
case 'venusaur':
case 'charmander':
case 'charmeleon':
case 'charizard':
case 'squirtle':
case 'wartortle':
case 'blastoise':
case 'caterpie': 
case 'metapod':
case 'butterfree':
case 'weedle':
case 'kakuna':
case 'beedrill': 
case 'pidgey':
case 'pidgeotto':
case 'pidgeot':
case 'rattata':
case 'raticate':
case 'spearow':
case 'fearow':
case 'ekans':
case 'arbok':
case 'pikachu':
case 'raichu':
try{
let pok = await fetchJson(`https://web.andresvpn.repl.co/api/pokemon?apikey=${apikey}`)
let poke = pok.result[command]
conn.sendMessage(from, { audio: { url: `${pok.audio}`}, mimetype: "audio/mp4", ptt: true }, { quoted: fkontak })
let poken = `
❏------------❏
❏ *id:* ${poke.id}
❏------------❏
❏ *nombre:* ${poke.nombre}
❏------------❏
❏ *altura:* ${poke.altura}
❏------------❏
❏ *peso:* ${poke.peso}
❏------------❏
❏ *categoria:* ${poke.categoria}
❏------------❏
❏ *habilidad:* ${poke.habilidad}
❏------------❏
❏ *debilidad:* ${poke.debilidad}
❏------------❏
❏ *tipo:* ${poke.tipo}
❏------------❏
❏ *ataque:* ${poke.ataque}
❏------------❏
❏ *defenza:* ${poke.defenza}
❏------------❏
❏ *ataque especial:* ${poke.ataque_especial}
❏------------❏
❏ *defenza especial:* ${poke.defenza_especial}
❏------------❏
❏ *velocidad:* ${poke.velocidad}
❏------------❏
❏ *descripcion:* ${poke.descripcion}
❏------------❏
❏ *sabias que..* ${pok.info}
`
sleep(7000)
await conn.sendMessage(m.chat, { image: { url: `${poke.imagen}` }, caption: poken }, { quoted: fkontak }) 
} catch (error) {
  console.log(error)
  reply('*no pude obtener la informacion pokemon*')
}
  break

    case 'app': case 'playstore': case 'apk': {
    let { search, download } = require('aptoide-scraper')
    if (!text) throw '*❗Que vas a buscar*'
      try {     
     let searchA = await search(text); 
     let data5 = await download(searchA[0].id); 
     let response = `
❏------------❏
❏ *Nombre:* ${data5.name}
❏------------❏
❏ *Package:* ${data5.package}
❏------------❏
❏ *Última actualización:* ${data5.lastup}
❏------------❏
❏ *Tamaño:* ${data5.size}
❏------------❏` 
     await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m}); 
     if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
     return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m}); 
     } 
     await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
     } catch { 
     throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`; 
     }    
     }
     break
     
       case 'rn':
if (!isCreator) return reply('solo mi creador')
reply(`
*${botname}*

~REINICIANDO~

`)
await sleep (5000)
process.exit()
break
  
     
  case 'add':
if(!isCreator) return reply("_*~SOLO MI CREADOR~*_")
if (!args.join(" ")) return reply(`*QUE CMD QUIERE AGREGAR?*`)
const pula = [fs.readFileSync('escanor.js', 'utf8').slice(0, fs.readFileSync('escanor.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('escanor.js', 'utf8').slice(fs.readFileSync('escanor.js', 'utf8').lastIndexOf('break') + 5)].join('\n');
fs.writeFileSync('escanor.js', pula);
reply('*_~AGREGANDO COMANDO~_*')
await sleep (5000)
reply('*~COMANDO AGREGADO CON EXITO✓~*');
  break
 
  /////ECONOMIA\\\\\\
  
  
  
  
  case 'trabajar': 
  let timee = global.db.data.users[m.sender].lastClaim + 100000
    if (new Date() - global.db.data.users[m.sender].lastClaim < 100000) throw `*[❗] 𝙴𝚂𝚃𝙰𝚂 𝙲𝙰𝙽𝚂𝙰𝙳𝙾*\n_* 𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 ${msToTime(timee - new Date())}  𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚃𝚁𝙰𝙱𝙰𝙹𝙰𝚁*_`
test = [
"salvaste la vida del presidente",
"reparaste la cancha de tu barrio",
"ayudaste a un gato atrapado",
"lavaste el auto de tu padre",
"sacaste a tu mascota a pasear",
"reparaste el piso de tu casa",
"reparaste el grifo de la cocina",
"Ocupaste el Primer lugar en la feria de Ciencias"
]
let frase = test[Math.floor(Math.random() * test.length)]
let _oro = Math.floor(Math.random() * 8000)
let mantes = Math.floor(Math.random() * 50)
let _papel = Math.floor(Math.random() * 30)
let zz = global.db.data.users[sender]
zz.papel += _papel
zz.gold += _oro
zz.limit += mantes
zz.exp += 1000
m.reply('*trabajando...*')
await sleep(10000)
tex = `❏------------❏
❏_*[🦁]${frase}*_
❏------------❏
❏ *𝙷𝙰𝚂 𝙶𝙰𝙽𝙰𝙳𝙾*
❏------------❏
❏ *💰𝙾𝚁𝙾:* ${_oro}
❏------------❏
❏ *💎𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${mantes}
❏------------❏
❏ *🌟𝙴𝚇𝙿:* 1000
❏------------❏
❏ *📰𝙿𝙰𝙿𝙴𝙻:* ${_papel}
❏------------❏`
m.reply(tex)
global.db.data.users[m.sender].lastClaim = new Date() * 1
break
case 'cartera': case 'perfil':
foto = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let z = global.db.data.users[m.sender]
tex = `_*PERFIL*_
❏------------❏
❏ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾* [${pushname}]
❏------------❏
❏ *👻𝚁𝙾𝙻:* ${z.role}
❏------------❏
❏ *🔅𝙽𝙸𝚅𝙴𝙻:* ${z.level}
❏------------❏
❏ *🔰𝙴𝚇𝙿:* ${z.exp}
❏------------❏
❏ *💰𝙾𝚁𝙾:* ${z.gold}
❏------------❏
❏ *💎𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${z.limit}
❏------------❏
❏ *📰𝙿𝙰𝙿𝙴𝙻:* ${z.papel}
❏------------❏
|•    ${botname}    •|
❏------------❏
`
  
conn.sendMessage(m.chat, { image: { url: foto }, caption: tex }, { quoted: fkontak })
break

  
  case 'buy':
   let buy = (args[0] || '').toLowerCase()
   let cost = 5000
   switch (buy) {
   case 'xp':
     if (global.db.data.users[m.sender].gold >= cost) {
     let newXp = 5000
     global.db.data.users[m.sender].exp += newXp
     global.db.data.users[m.sender].gold -= cost
     m.reply(`*✅ Comprastes ${newXp} Xp*`)
     } else { 
     m.reply(`*❗ no tienes dinero para comprar ${buy}*`)
     }
     break
     
     case 'cofre':
     if(global.db.data.users[m.sender].gold >= 10000) {
     global.db.data.users[m.sender].gold -= 10000
     let gold = Math.floor(Math.random() * 8000)
     let diamond = Math.floor(Math.random() * 100)
     let rubie = Math.floor(Math.random() * 50)
     global.db.data.users[m.sender].gold += gold
     global.db.data.users[m.sender].limit += diamond
     global.db.data.users[m.sender].rubi += rubie 
     tex1 = `
|• COMPRASTE UN COFRE •| 

❏------------❏
❏ *COTENIDO* 
❏------------❏
❏ *💰ORO* : [${gold}]
❏------------❏
❏ *💎DIMANTES* : [${diamond}]
❏------------❏
|• ${botname} •|
❏------------❏
     `
m.reply(tex1)
     } else {
     m.reply(`
[❗] 💰Oro insuficiente ${global.db.data.users[m.sender].gold}/10000
utiliza ${prefix}trabajar
`)
     }
     break
    
     

  
  default:
   m.reply(`*❎ No puedes comprar eso*`)
   }
   break
  
  
  
  
   case 'cheker':  
   if(!text) return reply('escribe la apikey de api.lolhuman.xyz')
let info = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
reply(`
      *Usuario* : ${info.result.username}
      *busquedas* : ${info.result.requests}
      *tipo de key* : ${info.result.account_type}
      *expira* : ${info.result.expired}
`) 
break
  
  case 'infonime':
  if(!text) return reply('escribe el nombre de un anine')
  let anime = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkeysapi}&query=${text}`)
INFO=
 `
   *INFO*
  [
  *EPISODIOS*
      [ numero de episodios: ${anime.result.episodes}
      [ duracion : ${anime.result.duration}
  *GENEROS*
      [ ${anime.result.genres}
  *DESCRIPCION*
      [ ${anime.result.description}
  `
  conn.sendMessage(m.chat, {  
      image: { url: `${anime.result.coverImage.large}` }, caption: INFO }, { quoted: fkontak }); 
  break

  case 'porno':
    case 'testee':
    if(!text) return reply("hiiiihihih")
     xnxxdl = require("./lib/scrapper/scraperr.js")
     i = await xnxxdl(text)
     restp = `${i.result.title}`
    m.reply(restp)
   break
  
  case 'carta':
    {
    
    if(!text) return reply(`Exemplo: ${prefix + command} +570000000009/hola`)
    let text1 = text.split("/")[0].replace(/\D/g,'');
    let text2 = text.split("/")[1];
    if(!text1) return reply('*EL NUMERO DE LA PERSONA* ?')
    if(!text2) return reply('*EL MENSAJE* ??')
    let [result] = await conn.onWhatsApp(text1)
    if(!result) return reply(`Número inválido`)
    bla = `
     ╭══════════════════════⪧
     ┃ *ACABAS DE RECIBIR UN MENSAJE* 
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *NOMBRE* ${pushname}
     ┃  ➣ *LINK* wa.me/${sender.split('@')[0]}
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *MENSAJE:* ${text2}
     ╰══════════════════════⪧
     `
    conn.sendMessage(result.jid, {text: bla})
    reply(`*Carta enviada*`)
    }
    break
    
    
    case 'bug': 
    try { 
    if (!text) return reply(`Ejemplo: ${prefix + command} no funciona el menu`)
    conn.sendMessage(from, {text: `[🔥]El reporte a sido enviado a mi creador\ndentro de poco te atendera.`}, {quoted: msg}) 
    await conn.sendMessage("573043603261@s.whatsapp.net", {text: `
     ╭══════════════════════⪧
     ┃ [👨‍💻]REPORT!![👨‍💻]
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *NOMBRE* ${pushname}
     ┃  ➣ *LINK* wa.me/${sender.split('@')[0]}
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *MENSAJE:* ${text}
     ╰══════════════════════⪧
    `}, {quoted: msg})
    } catch (err) {
    console.error(err)
    await reply(`Error... si permanece el error comuiquese con mi credor!`)
    }
    break
    
    case 'serbug': 
    try { 
    if (!text) return reply(`Ejemplo: ${prefix + command} no se genera qr`)
    conn.sendMessage(from, {text: `[🔥]El reporte a sido enviado a mi creador\ndentro de poco te atendera.`}, {quoted: msg}) 
    await conn.sendMessage("573043603261@s.whatsapp.net", {text: `
     ╭══════════════════════⪧
     ┃ [👨‍💻]REPORT JADIBOT!![👨‍💻]
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *NOMBRE* ${pushname}
     ┃  ➣ *LINK* wa.me/${sender.split('@')[0]}
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *MENSAJE:* ${text}
     ╰══════════════════════⪧
    `}, {quoted: msg})
    await conn.sendMessage("5218442114446@s.whatsapp.net", {text: `
     ╭══════════════════════⪧
     ┃ [👨‍💻]REPORT JADIBOT!![👨‍💻]
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *NOMBRE* ${pushname}
     ┃  ➣ *LINK* wa.me/${sender.split('@')[0]}
     ┃━━━━━━━━━━━━━━━━━━━━━━━
     ┃  ➣ *MENSAJE:* ${text}
     ╰══════════════════════⪧
    `}, {quoted: msg})
    } catch (err) {
    console.error(err)
    await reply(`Error... si permanece el error comuiquese con mi credor!`)
    }
    break
    
		case 'xxx':
      if (!m.isGroup) return m.reply('_*este comando solo puede ser utilizado en grupos*_')   
    if(!text) return reply('escribe nombre de tu busqueda')
let precioo = 10000
    if(global.db.data.users[m.sender].gold >= precioo) {
global.db.data.users[m.sender].gold -= precioo
    reply('~*_buscando_*~')
    ress = await fetchJson(`https://lionfuriapi--freefire560.repl.co/api/xnxxsearch?quero=${text}&apikey=${apikey}`)
   if(!text) return reply('ingresa el link')
   xnxxx = await fetchJson(`https://lionfuriapi--freefire560.repl.co/api/xnxx?url=${ress.resultado[1].link}&apikey=${apikey}`)
  const poorn = `
❏--------------------
❏ ${botname}
❏--------------------
❏ *titulo:* ${xnxxx.titulo}
❏--------------------
❏ *duracion:* _${xnxxx.duracion}_
❏--------------------
❏ *vistas:* _${xnxxx.vistas}_
❏--------------------
❏ *👍:* _${xnxxx.like}_ *👎:* _${xnxxx.dislike}_
❏--------------------
❏ *descripcion:* _${xnxxx.descripcion}_
  `
reply('*enviando al privado🥵*')

await conn.sendMessage(sender, {video: { url: xnxxx.link[0].link }, caption: poorn, fileName: `error.mp4`, thumbnail: xnxxx.imagen, mimetype: 'video/mp4' }, { quoted: fkontak });  
} else {
m.reply(`[❗]💰Oro insuficiente ${global.db.data.users[m.sender].gold}/${precioo}\nutiliza ${prefix}trabajar y gana algo de dinero`)
}
   break    
   
    

case 'xnxxvid':
  if (!m.isGroup) return m.reply('_*este comando solo puede ser utilizado en grupos*_')
 if(global.db.data.users[m.sender].gold >= 8000) {
  if(!text) return reply('ingresa el link')
   xnxx = await fetchJson(`https://escanorweb.andresvpn.repl.co/api/xnxx?url=${text}&apikey=${apikey}`)
  const porn = `
❏--------------------
❏ ${botname}
❏--------------------
❏ *titulo:* ${xnxx.titulo}
❏--------------------
❏ *duracion:* _${xnxx.duracion}_
❏--------------------
❏ *vistas:* _${xnxx.vistas}_
❏--------------------
❏*👍:* _${xnxx.like}_ *👎:* _${xnxx.dislike}_
❏--------------------
❏ *descripcion:* _${xnxx.descripcion}_
  `
reply('*enviando al privado🥵*')

await conn.sendMessage(sender, {video: { url: xnxx.link[1].link }, caption: porn, fileName: `error.mp4`, thumbnail: xnxx.imagen, mimetype: 'video/mp4' }, { quoted: fkontak });  
} else {
  m.reply(`
[❗] 💰Oro insuficiente ${global.db.data.users[m.sender].gold}/8000  
  `)
}
   break    
      case 'xnxx':
      if (!m.isGroup) return m.reply('_*este comando solo puede ser utilizado en grupos*_')
    if(!text) return reply('ingresa un texto para buscar')
 rees = await fetchJson(`${web}/api/xnxxsearch?quero=${text}&apikey=${apikey}`)
tsk = `
*1*
*titulo:* ${rees.resultado[0].title}
*vistas:* ${rees.resultado[0].views}
*duracion:* ${rees.resultado[0].duration}
*publicado:* ${rees.resultado[0].uploader}
*link:* ${rees.resultado[0].link}
------------------------------------------
*2*
*titulo:* ${rees.resultado[1].title}
*vistas:* ${rees.resultado[1].views}
*duracion:* ${rees.resultado[1].duration}
*publicado:* ${rees.resultado[1].uploader}
*link:* ${rees.resultado[1].link}
------------------------------------------
*3*
*titulo:* ${rees.resultado[2].title}
*vistas:* ${rees.resultado[2].views}
*duracion:* ${rees.resultado[2].duration}
*publicado:* ${rees.resultado[2].uploader}
*link:* ${rees.resultado[2].link}
------------------------------------------
*4*
*titulo:* ${rees.resultado[3].title}
*vistas:* ${rees.resultado[3].views}
*duracion:* ${rees.resultado[3].duration}
*publicado:* ${rees.resultado[3].uploader}
*link:* ${rees.resultado[3].link}
------------------------------------------
*5*
*titulo:* ${rees.resultado[4].title}
*vistas:* ${rees.resultado[4].views}
*duracion:* ${rees.resultado[4].duration}
*publicado:* ${rees.resultado[4].uploader}
*link:* ${rees.resultado[4].link}
------------------------------------------
*6*
*titulo:* ${rees.resultado[5].title}
*vistas:* ${rees.resultado[5].views}
*duracion:* ${rees.resultado[5].duration}
*publicado:* ${rees.resultado[5].uploader}
*link:* ${rees.resultado[5].link}
------------------------------------------
*7*
*titulo:* ${rees.resultado[6].title}
*vistas:* ${rees.resultado[6].views}
*duracion:* ${rees.resultado[6].duration}
*publicado:* ${rees.resultado[6].uploader}
*link:* ${rees.resultado[6].link}
------------------------------------------
*8*
*titulo:* ${rees.resultado[7].title}
*vistas:* ${rees.resultado[7].views}
*duracion:* ${rees.resultado[7].duration}
*publicado:* ${rees.resultado[7].uploader}
*link:* ${rees.resultado[7].link}
------------------------------------------
*9*
*titulo:* ${rees.resultado[8].title}
*vistas:* ${rees.resultado[8].views}
*duracion:* ${rees.resultado[8].duration}
*publicado:* ${rees.resultado[8].uploader}
*link:* ${rees.resultado[8].link}
------------------------------------------
*10*
*titulo:* ${rees.resultado[9].title}
*vistas:* ${rees.resultado[9].views}
*duracion:* ${rees.resultado[9].duration}
*publicado:* ${rees.resultado[9].uploader}
*link:* ${rees.resultado[9].link}
`;

conn.sendMessage(from, {image: {url: rees.resultado[0].thumbnail}, caption: tsk}, {quoted: fkontak}).catch(() => {
return enviar("Error..");
});
break

case 'creador': 
case 'dono': 
case 'owner':
conn.sendMessage(from, { contacts: { displayName: `ANDRES-VPN`, contacts: [{ vcard }] }}, {quoted: msg})
break

case 'cassino':
if(!text) throw '*ingrese una cantidad mayor a 999 de 💰Oro*'
var a = "💎"
var b = "💰"
var c = "🍒"
        const ran = [a, c, a]
const ran1 = ran[Math.floor(Math.random() * ran.length)] 
        const ran2 = [c, b, a]
const ran3 = ran2[Math.floor(Math.random() * ran2.length)] 
        const ran4 = [b, c, a]
const ran5 = ran4[Math.floor(Math.random() * ran4.length)] 
        const ran6 = [c, b, a]
const ran7 = ran6[Math.floor(Math.random() * ran6.length)] 
        const ran8 = [b, c, a]
const ran9 = ran8[Math.floor(Math.random() * ran8.length)] 
       const ran10 = [c, b, a]
const ran11 = ran10[Math.floor(Math.random() * ran10.length)] 
        const ran12 = [c, b, a]
const ran13 = ran12[Math.floor(Math.random() * ran12.length)] 
        const ran14 = [c, b, a]
const ran15 = ran14[Math.floor(Math.random() * ran14.length)]
        const ran16 = [c, b, a]
 const ran17 = ran16[Math.floor(Math.random() * ran16.length)]   
 valor = `${text}` 
 const gana = Math.floor(Math.random() * 50000)


tex = `
╭══════════════⪩
╰╮𖡦 ${botname}
╭┤══════════════
┃│ ➣ ${ran1} | ${ran7} | ${ran13}
┃│══════════════
┃│ ➣ ${ran3} | ${ran9} | ${ran15} *★*
┃│══════════════
┃│ ➣ ${ran5} | ${ran11} | ${ran17}
┃│══════════════
┃│ ➣ _*${botname}*_ 
┃╰══⪨
╰══════════════⪨`
if (global.db.data.users[m.sender].gold <= 999) {
  m.reply(`
  [❗] 💰Oro insuficiente ${global.db.data.users[m.sender].gold}/999\n*utiliza ${prefix}trabajar y gana algo de dinero*`)
  } else if( valor <= 999) {
m.reply("debes de apostar una cantidad mayor a 999 de 💰oro")
} else if( ran3 == a && ran9 == a && ran15 == a) {
global.db.data.users[m.sender].gold += gana
m.reply(`*felicidades*\n*ganaste : ${gana} de 💰Oro*`)
} else if( ran3 == b && ran9 == b && ran15 == b) {
global.db.data.users[m.sender].gold += gana
m.reply(`*felicidades*\n*ganaste : ${gana} de 💰Oro*`)
} else if( ran3 == c && ran9 == c && ran15 == c) {
global.db.data.users[m.sender].gold += gana
m.reply(`*felicidades*\n*ganaste : ${gana} de 💰Oro*`)
} else if(valor >= 999 &&  global.db.data.users[m.sender].gold >= valor ) {
  global.db.data.users[m.sender].gold -= valor
  m.reply(tex + `\nSe te desconto -${valor} de 💰Oro por el giro actual `)
} else {
  m.reply(tex)
}

break
case 'participer': case 'unkick': case 'revivir': 
if (!m.isGroup) return reply('agregando persona a este gran grupo')
if (!isGroupAdmins) return reply('el usuario ya esta aqui 🤠')
if(!text) return reply('Marque el mensaje del usuario o su número')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.conn.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return m.reply('ese numero no existe')
let [result] = await conn.onWhatsApp(id)
if(!result) return m.reply('Ese número no está registrado a WhatsApp')
let response = await conn.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
return m.reply('El/ella ya esta aqui')
} else if(response[0].status == "403") {
return m.reply('la cuenta es privada')
} else if(response[0].status == "408") {
return m.reply('si el chico salió pq q quieres add él???')
} else if(response[0].status == "401") {
return m.reply('el/ella me bloqueo ')
} else if(response[0].status == "200") {
return m.reply('agregado con exito')
}else {
m.reply(`${botname}`)
}
} catch {
}
break

case 'rankgay':
let groupMembers = m.isGroup ? groupMetadata.participants : ''
membr = []
const gay1 = participants
const gay2 = participants
const gay3 = participants
const gay4 = participants
const gay5 = participants
porcent = `${Math.floor(Math.random() * 100)}`
porcent2 = `${Math.floor(Math.random() * 100)}`
porcent3 = `${Math.floor(Math.random() * 100)}`
porcent4 = `${Math.floor(Math.random() * 100)}`
porcent5 = `${Math.floor(Math.random() * 100)}`

const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
rankzingay = `
esos son los 🏳️‍🌈 del grupo:\n${groupName}\n
╭────────────
│ 🏳️‍🌈 @${gays1.id.split('@')[0]}
│➥ ${porcent}% Gay Padre
│ 🏳️‍🌈 @${gays2.id.split('@')[0]}
│➥${porcent2}% Gay Incubado
│ 🏳️‍🌈 @${gays3.id.split('@')[0]}
│➥ ${porcent3}% Gay Barbie
│ 🏳️‍🌈 @${gays4.id.split('@')[0]}
│➥ ${porcent4}% Gay Ativo
│ 🏳️‍🌈 @${gays5.id.split('@')[0]}
│➥ ${porcent5}% Gay Passivo
╰────────────
\n*🔥${botname}🔥*`
membr.push(gays1.id)
membr.push(gays2.id)
membr.push(gays3.id)
membr.push(gays4.id)
membr.push(gays5.id)
conn.sendMessage(from, {text: rankzingay }, {quoted: msg})
break

//case?



    
          default: 
           if (budy === `${prefix}`) {
             conn.sendMessage(from, {text: `
╭════════════════⪩
╰╮き⃟🦁 _*${botname}*_🦁⃟き
╭┤➫ _*utiliza ${prefix}menu*_
┃│➫ _*para ver mis funciones*_
╰════════════════⪨
            ` }, {quoted: msg })
            } else if (budy.startsWith(`${prefix}`)) {
            conn.sendMessage(from, {text: `
╭════════════════⪩
╰╮き⃟🦁 _*ERROR*_🦁⃟き
╭┤➫ _*usuario     ${pushname}*_
┃│➫ _*comando [${prefix + command} ${text}]es incorrecto❗*_
┃│➫ _*lea detenidamente el menu*_
╰════════════════⪨
            ` }, {quoted: msg })}
          
              if (budy.startsWith('>')) {  
                  if (!isCreator) return  
                  try {  
                      return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))  
                  } catch (e) {  
                      e = String(e)  
                      reply(e)  
                  }  
              }  
              if (budy.startsWith('=>')) {  
                  if (!isCreator) return  
                  try {  
                      return  reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))   
                  } catch (e) {  
                      e = String(e)  
                      reply(e)  
                  }  
              }  
              if (budy.startsWith('$')) {  
                  if (!isCreator) return  
                  try {  
                      return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))  
                  } catch (e) {  
                      e = String(e)  
                      reply(e)  
                  }  
              }
              if(budy.includes(`hola`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/Hola.mp3'
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`shitpost` || budy.includes("bot"))) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/shitpost.mp3'
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`ha`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/a.mp3'
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`uwu`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/UwU.mp3'
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`ara`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/Ara.mp3'
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`viernes`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = fs.readFileSync('./audios/viernes.mp3')
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`hentai`)) {
                  if (!global.db.data.chats[m.chat].audios) return
                  let vn = './audios/hentai.mp3'
                  conn.sendAudio(m.chat, vn, m)
                  }
                  if(budy.includes(`triste`) || budy.includes("llorar")) {
                    if (!global.db.data.chats[m.chat].audios) return
                    let vn = './audios/toma.mp3'
                    conn.sendAudio(m.chat, vn, m)
                    }
                    if(budy.includes(`siu`)) {
                      if (!global.db.data.chats[m.chat].audios) return
                      let vn = './audios/siu.mp3'
                      conn.sendAudio(m.chat, vn, m)
                      }
                if(budy.includes(`onichan`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/Onichan.mp3'
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`gay`) || budy.includes("homosexual")) {
                  if (!global.db.data.chats[m.chat].audios) return
                  let vn = './audios/gay2.mp3'
                  conn.sendAudio(m.chat, vn, m)
                  }
                if(budy.includes(`murio el grupo`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/Murio.m4a'
                conn.sendAudio(m.chat, vn, m)
                }
                if(budy.includes(`sexo`)) {
                if (!global.db.data.chats[m.chat].audios) return
                let vn = './audios/maau1.mp3'
                conn.sendAudio(m.chat, vn, m)
                }
              if(budy.includes(`${text}`)) {
              if (!global.db.data.chats[m.chat].dialogbot) return
                let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
                reply(`${simi.success}`)
                }
          }
        } catch (e) {
   let sktext = util.format(e)
   m.reply(sktext)
   }
          
  
  }
  
  let file = require.resolve(__filename)  
  fs.watchFile(file, () => {  
  fs.unwatchFile(file)  
  console.log(chalk.redBright(`Update ${__filename}`))  
  delete require.cache[file]  
  require(file)  
  })