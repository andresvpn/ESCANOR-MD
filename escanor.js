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
  const { canLevelUp, xpRange } = require('./lib/levelling.js');
const { string } = require('yargs');
const { result } = require('lodash');
  
  const msgs = (message) => { 
  if (message.length >= 10) { 
  return `${message.substr(0, 500)}` 
  } else { 
  return `${message}`}} 
  
  
  
    ////VITAL ANDRES-VPN
    
    
    
const { style1, style2, style3, style4, style5} = require("./scrapers/styles.js")
var styll = [ style1, style1 ]
const ramdonstyle = styll[Math.floor(Math.random() * styll.length)]



    ////VITAL ANDRES-VPN
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
  
   const escanor_link = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `❗${botname}`, jpegThumbnail: null}}}
  
  /////
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
  function emojitext(text){
  const reactionMessage = {
    react: {
    text: text, // use an empty string to remove the reaction
    key: msg.key
    }
}
 return conn.sendMessage(from, reactionMessage)
 } 
  global.prefix = prefixes.find(pref => body.startsWith(pref))
  const isCmd = body.startsWith(prefix);
  const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
  
  
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
  reply(`*「 ANTI LINK 」*\n\n*𝚕𝚒𝚗𝚔 𝚍𝚎𝚝𝚎𝚌𝚝𝚊𝚍𝚘*\n*𝚕𝚘 𝚜𝚒𝚎𝚗𝚝𝚘 𝚙𝚎𝚛𝚘 𝚗𝚘 𝚜𝚎 𝚙𝚎𝚛𝚖𝚒𝚝𝚎𝚗 𝚕𝚒𝚗𝚔𝚜*`)  
  if (!isBotAdmins) return reply(`𝚎𝚕 𝚋𝚘𝚝 𝚗𝚎𝚌𝚎𝚜𝚒𝚝𝚊 𝚜𝚎𝚛 𝚊𝚍𝚖𝚒𝚗`)  
  if (isGroupAdmins) throw '*eres admin -_-*'
  let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))  
  let isLinkThisGc = new RegExp(gclink, 'i')  
  let isgclink = isLinkThisGc.test(m.text)  
 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})  
  }
  
  ///telegram
  if (budy.match(`t.me`)) {  
  let delet = m.key.participant  
  let bang = m.key.id  
  reply(`*「 ANTI LINK 」*\n\n*𝚕𝚒𝚗𝚔 𝚍𝚎𝚝𝚎𝚌𝚝𝚊𝚍𝚘*\n*𝚕𝚘 𝚜𝚒𝚎𝚗𝚝𝚘 𝚙𝚎𝚛𝚘 𝚗𝚘 𝚜𝚎 𝚙𝚎𝚛𝚖𝚒𝚝𝚎𝚗 𝚕𝚒𝚗𝚔𝚜*`)  
  if (!isBotAdmins) return reply(`𝚎𝚕 𝚋𝚘𝚝 𝚗𝚎𝚌𝚎𝚜𝚒𝚝𝚊 𝚜𝚎𝚛 𝚊𝚍𝚖𝚒𝚗`)  
  if (isGroupAdmins) throw '*eres admin -_-*'  
  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})  
  }
  } 
  



   if (m.sender.startsWith('212')) {
    return 
      }
  if (!conn.public) {
    if (!m.key.fromMe) return
    }
    

      
  // ‿︵‿︵ʚɞ『 COLOR CONSOLE 』ʚɞ‿︵‿︵
  
 const GREEN = '\033[0;32m'
 const BLUE = '\033[0;34m'
 const RED = '\033[0;31m'
 const WHITE = "\033[1;37m"
  // ‿︵‿︵ʚɞ『 INFO CONSOLE 』ʚɞ‿︵‿︵         

//console de comando en grupo 
if (m.isGroup && isCmd) console.log(`
╭══════════════⪩${WHITE}
╰╮→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑬𝑵 𝑮𝑹𝑼𝑷𝑶${WHITE}
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}${WHITE}
┃│→ ${GREEN}𝑵𝑼𝑴𝑬𝑹𝑶: ${sender.split("@")[0]}${WHITE}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶:${BLUE}${groupName}${WHITE}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}${WHITE}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}${WHITE}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}${WHITE}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}${WHITE}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵${WHITE}
┃╰══⪨
╰══════════════⪨`)

//console de mensage en grupo
if (m.isGroup && !isCmd && m.message) console.log(`
╭══════════════⪩
╰╮→ ${GREEN}𝑴𝑬𝑵𝑺𝑨𝑱𝑬 𝑬𝑵 𝑮𝑹𝑼𝑷𝑶${WHITE}
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}${WHITE}
┃│→ ${GREEN}𝑵𝑼𝑴𝑬𝑹𝑶: ${sender.split("@")[0]}${WHITE}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶: ${BLUE}${groupName}${WHITE}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}${WHITE}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}${WHITE}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}${WHITE}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}${WHITE}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵${WHITE}
┃╰══⪨
╰══════════════⪨`)

//console de comando en privado
if (!m.isGroup && isCmd && m.message) console.log(`
╭══════════════⪩${WHITE}
╰╮→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑬𝑵 𝑷𝑹𝑰𝑽𝑨𝑫𝑶${WHITE}
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}${WHITE}
┃│→ ${GREEN}𝑵𝑼𝑴𝑬𝑹𝑶: ${sender.split("@")[0]}${WHITE}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶:𝑵𝑶${WHITE}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}${WHITE}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}${WHITE}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}${WHITE}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}${WHITE}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵${WHITE}
┃╰══⪨
╰══════════════⪨`)
//console mensage en privado
if (!m.isGroup && !isCmd && m.message) console.log(`
╭══════════════⪩${WHITE}
╰╮→ ${GREEN}𝑴𝑬𝑵𝑺𝑨𝑱𝑬 𝑬𝑵 𝑷𝑹𝑰𝑽𝑨𝑫𝑶${WHITE}
╭┤ ${RED}${botname}        ${conn.user.id == global.numBot2 ? '' : '(jadibot)'}${WHITE}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${sender.split("@")[0]}${WHITE}
┃│→ ${GREEN}𝑮𝑹𝑼𝑷𝑶: 𝑵𝑶${WHITE}
┃│→ ${GREEN}𝑵𝑶𝑴𝑩𝑹𝑬: ${pushname}${WHITE}
┃│→ ${GREEN}𝑻𝑰𝑷𝑶: ${type}${WHITE}
┃│→ ${GREEN}𝑴𝑶𝑫𝑶: ${conn.public ? 'Publico' : 'Privado'}${WHITE}
┃│→ ${GREEN}𝑪𝑶𝑴𝑨𝑵𝑫𝑶:${RED}${command}${WHITE}
┃│→ ${BLUE}𝑨𝑵𝑫𝑹𝑬𝑺𝑽𝑷𝑵${WHITE}
┃╰══⪨
╰══════════════⪨`)
///////////////∆NO TOCAR ARRIBA∆\\\\\\\\\\\\\\\\
const respuesta = {
creador: "𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁",
text: "𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾"
}
//economia
const{ papel, diamantes, cassino, xpnew, validarnumero } = require("./lib/sellfuncion.js")
// SCRAPPERS 


const web = "https://9ac43b76-3c9c-457b-9f66-e028fc718448-00-pmmbc2mn58j9.global.replit.dev"
const web1 = "https://andres-apirest.onrender.com"
const apikeygpt = "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"
const apikey = "andres"

//fecha
var fechaActual = new Date();
// Obtiene el día, mes y año
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, así que sumamos 1
var año = fechaActual.getFullYear();
// Formatea la fecha en el formato día/mes/año
const fecha = dia + '/' + mes + '/' + año;
///

///


  try {  
  switch (command) {
  
case 'sercode2':
let{ andresbot } = require("./andrescode.js")
andresbot(sender)
break

case 'style1':
if(!text) throw "INGRESA UN TEXTO A MODIFICAR"
let result1 = await style1(text)
let result2 = await style2(text)
let result3 = await style3(text)
let result4 = await style4(text)
let result5 = await style5(text)
var rtx = `
|==============•
| 𝚂𝚃𝚈𝙻𝙾 𝙰𝙿𝙻𝙸𝙲𝙰𝙳𝙾 𝙿𝙰𝚁𝙰: ${text}
|==============•

1:  ${result1}

|==============•

2: ${result2}

|==============•

3: ${result3}

|==============•

4: ${result4}

|==============•

5: ${result5}

|==============•`
reply(rtx)
break


case 'subdominio':
if(!text) throw "ingrese el email para generar sub-dominios"
if(!text.split("@")[0]) throw "ingrese el usuario"
if(!text.split("@")[1]) throw "ingrese el dominio del email"
function generateEmailCombinations(baseEmail) {
  let emailParts = baseEmail.split('@');
  let username = emailParts[0];
  let domain = emailParts[1];
  let combinations = [];

  for (let i = 0; i <= username.length; i++) {
    for (let j = i + 1; j <= username.length; j++) {
      let sufix = username.substring(0, i);
      let middle = username.substring(i, j);
      let suffix = username.substring(j);
      let combination = `${sufix}.${middle}.${suffix}@${domain}\n`;
      combinations.push(combination);
    }
  }

  return combinations;
}
let baseEmail = text;
let emailCombinations = generateEmailCombinations(baseEmail);
let sin_error = emailCombinations.map(email => email.replace(".", ''));
let total_email = sin_error.length;
rtxx = `BY: @ANDRES_VPN\ncorreos generados: ${total_email}\n\n${sin_error.join('')}`;
reply(rtxx);
// Ruta y nombre del archivo
let rutaArchivo = './temp/by:andresvpn.txt';
// Escribe en el archivo
fs.writeFile(rutaArchivo, rtxx, (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
  } else {
  conn.sendMessage(from, {document: {url: rutaArchivo }, mimetype: "application/document", fileName: `by:andresvpn.txt`})
  }
});

break
case 'apikey':
try{
if(!text) throw "ingresa la apikey para verificar su estado"
const apiii = await fetchJson(`${web1}/api/limite-apikey?apikey=${text}`)
 let apii = apiii.result.apikey
 let limite = apiii.result.limite
 let totalapi = apiii.result.total_search_apikey
 let totaluser = apiii.result.total_search_users
rtxxx = `
*•===================•*
*|•[ STATUS APIKEY ]•|*
*•===================•*
*|•APIKEY: ${apii}*
*|•LIMITE: ${limite}*
•===================•
*|•[ BUSQUEDAS ]•|*
*|•APIKEY: ${totalapi}*
*|•USUARIOS: ${totaluser}*
•===================•

`
conn.sendMessage(from, { 
 text: rtxxx, 
 contextInfo:{ 
 forwardingScore: 9999999, 
 isForwarded: true, 
 mentionedJid:[m.sender], 
 "externalAdReply": { 
 "showAdAttribution": true, 
 "renderLargerThumbnail": true, 
 "title": "andres-web-api", 
 "containsAutoReply": true, 
 "mediaType": 1, 
 "thumbnail": menu, 
 "mediaUrl": `${web1}`, 
 "sourceUrl": `${web1}` 
 } 
 } 
 }, { quoted: fkontak }) 
} catch (e) {
  reply("error: apikey no existente")  
    }
break


        case 'spotify':{

if (!text) throw "ingresa el nombre de la cancion"
        const Spotify = require('./scrapers/spotify')
        const spotify = new Spotify(q)
        const info = await spotify.getInfo()
        if ((info).error) throw "no encontrado en spotify"
        const { name, artists, album_name, release_date, cover_url } = info
        themeemoji = "•"
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Data:* ${release_date || ''}`
       const response = await conn.sendMessage(from, { image: { url: cover_url }, caption: details }, { quoted: fkontak })
        const bufferpotify = await spotify.download()
        await conn.sendMessage(from, { audio: bufferpotify }, { quoted: fkontak })
        }
break
              
    case 'menu':
var timestamp = speed();  
var latensi = speed() - timestamp   
var rol = global.db.data.users[m.sender]
var navidad = ["✨", "🌟", "☀️", "🫧", "🔥", "🌪️", "⚡"]
var e = navidad[Math.floor(Math.random() * navidad.length)] 
  let menuu = ` 
╭═══════|❏|═════⪩
┃     
┃ ©andres vpn®
┃ _~fecha:~_ 「 *${fecha}* 」
┃ _~nombre:~_ 「 *${pushname}* 」
┃ _~numero:~_ 「 *wa.me/${sender.split('@')[0]}* 」
┃ _~rol:~_ 「 *${rol.role}* 」
┃ _~modo:~_ 「 *${conn.public ? 'publico' : 'privado'}* 」
┃ _~velocidad:~_ 「 *${latensi.toFixed(4)}* 」
┃ _~usuarios:~_ 「 *${Object.keys(global.db.data.users).length}* 」
┃ _~dispositivo:~_ 「 ${msg.key.id.length > 21 ? '*Android*' : msg.key.id.substring(0, 2) == '3A' ? '*IOS*' : '*Zap zap web*'} 」
┃ _~prefijo:~_ 「 *${prefix}* 」
┃ _~hosting-patrocinador:~_ 「 *null* 」
┃「 *null* 」
╰══════════════⪨
 ~∆ 𝙇𝙤𝙜𝙤𝙨 ∆~
╭═══════|❏|═════⪩
┃ 𖡦 *Para crear logos*
┃
┃ ${e}${prefix}blackpink [texto]
┃ ${e}${prefix}neon [texto]
┃ ${e}${prefix}greenneon [texto]
┃ ${e}${prefix}advanceglow [texto]
┃ ${e}${prefix}advanceglow [texto]
┃ ${e}${prefix}thunder [texto]
┃ ${e}${prefix}horrorblood [texto]
┃ ${e}${prefix}summersand [texto]
┃ ${e}${prefix}luxury [texto]
┃ ${e}${prefix}icecold [texto]
┃ ${e}${prefix}breakwall [texto]
┃ ${e}${prefix}roadwarning [texto]
┃ ${e}${prefix}box3d [texto]
┃ ${e}${prefix}strawberry [texto]
┃ ${e}${prefix}toxic [texto]
┃ ${e}${prefix}bokeh [texto]
┃ ${e}${prefix}natureleaves [texto]
┃ ${e}${prefix}fireworksparkle [texto]
┃ ${e}${prefix}jokerlogo [texto]
┃ ${e}${prefix}halloween [texto]
┃ ${e}${prefix}bloodfrosted [texto]
┃ ${e}${prefix}newyearcard [texto]
┃ ${e}${prefix}deluxesilver [texto]
┃ ${e}${prefix}minion [texto]
┃ ${e}${prefix}text1917 [texto]
┃ ${e}${prefix}holographic [texto]
┃ ${e}${prefix}neonlight [texto]
┃ ${e}${prefix}metaldark [texto]
┃ ${e}${prefix}sandengraved [texto]
┃ ${e}${prefix}sandsummer [texto]
┃ ${e}${prefix}sandwriting [texto]
┃ ${e}${prefix}futureneon [texto]
┃ ${e}${prefix}carvedwood [texto]
┃ ${e}${prefix}harrypotter [texto]
┃ ${e}${prefix}flamming [texto]
┃ ${e}${prefix}fallleaves [texto]
┃ ${e}${prefix}glowingneon [texto]
┃ ${e}${prefix}letterleaves [texto]
┃ ${e}${prefix}summernature [texto]    
┃ ${e}${prefix}golderrose [texto]
┃ ${e}${prefix}underwater [texto]
┃ ${e}${prefix}nature3d [texto]
┃ ${e}${prefix}wolfmetal [texto]
┃ ${e}${prefix}summer3d [texto]
┃ ${e}${prefix}woodenboard [texto]
┃ ${e}${prefix}woodheart [texto]  
┃ ${e}${prefix}coffe [texto]
┃ ${e}${prefix}love [texto]
┃ ${e}${prefix}undergrass [texto]
┃ ${e}${prefix}lovemessage [texto]
┃ ${e}${prefix}burnpaper [texto]
┃ ${e}${prefix}smoke [texto]
┃ ${e}${prefix}romance [texto]
┃ ${e}${prefix}cup1 [texto]
┃ ${e}${prefix}cup [texto]
┃ ${e}${prefix}shadow [texto]
┃ ${e}${prefix}avatarlolnew [texto]
┃ ${e}${prefix}freefire [texto]
┃ ${e}${prefix}silverplaybutton [texto]
┃ ${e}${prefix}goldplaybutton [texto]
┃ ${e}${prefix}birthdayday [texto]
┃ ${e}${prefix}snow3d [texto]
┃ ${e}${prefix}galaxybat [texto]
┃ ${e}${prefix}writegalacy [texto]
┃ ${e}${prefix}textbyname [texto]
┃ ${e}${prefix}wooden3d [texto]
┃ ${e}${prefix}starsnight [texto]
┃ ${e}${prefix}textcake [texto]
┃ ${e}${prefix}glittergold [texto]
┃ ${e}${prefix}noeltext [texto]
┃ ${e}${prefix}metallogo [texto]
┃ ${e}${prefix}greenbush [texto]
┃ ${e}${prefix}glossychrome [texto]
┃ ${e}${prefix}greenneon [texto]
┃ ${e}${prefix}hologram3d [texto]
┃ ${e}${prefix}galaxystyle [texto]
┃ ${e}${prefix}birthdaycake [texto]
┃ ${e}${prefix}heartshaped [texto]
┃ ${e}${prefix}royaltext [texto]
┃ ${e}${prefix}puppycute [texto]
┃ ${e}${prefix}beautifulflower [texto]
┃ ${e}${prefix}lighttext [texto]
┃ ${e}${prefix}galaxywallpaper [texto]
┃ ${e}${prefix}luxurygold [texto]
┃ ${e}${prefix}watercolor [texto]
┃ ${e}${prefix}multicolor3d [texto]
┃ ${e}${prefix}wetglass [texto]
┃
╰══════════════⪨
~∆ *ALTERADORES* ∆~
╭═══════|❏|═════⪩
┃
┃ ${e}${prefix}bass [@audio]
┃ ${e}${prefix}blown [@audio]
┃ ${e}${prefix}deep [@audio]
┃ ${e}${prefix}earrape [@audio]
┃ ${e}${prefix}fast [@audio]
┃ ${e}${prefix}fat [@audio]
┃ ${e}${prefix}nightcore [@audio]
┃ ${e}${prefix}reverse [@audio] 
┃ ${e}${prefix}robot [@audio] 
┃ ${e}${prefix}slow [@audio]
┃ ${e}${prefix}smooth [@audio]
┃ ${e}${prefix}squirrel [@audio]
┃
╰══════════════⪨
~∆ *ADMIN* ∆~
╭═══════|❏|═════⪩
┃𖡦 *Para/Adms*
┃
┃ ${e}${prefix}salir
┃ ${e}${prefix}promote [@integrante]
┃ ${e}${prefix}demote [@integrante]
┃ ${e}${prefix}gp [on | off]
┃ ${e}${prefix}ban [@integrante]
┃ ${e}${prefix}linkgp
┃ ${e}${prefix}mudardc [texto]
┃ ${e}${prefix}mudarnm [texto]
┃ ${e}${prefix}todos
┃ ${e}${prefix}todos2
┃
╰══════════════⪨
~∆ *CONFIGP* ∆~
╭═══════|❏|═════⪩
┃𖡦 *Para/configurar gp*
┃
┃ ${e}${prefix}on : off antilink
┃ ${e}${prefix}on : off antiarabes
┃ ${e}${prefix}on : off antifakes
┃ ${e}${prefix}on : off detect
┃ ${e}${prefix}on : off welcome
┃ ${e}${prefix}on : off audios
┃ ${e}${prefix}on : off jadibot
┃ ${e}${prefix}on : off antillamadas
┃ ${e}${prefix}estadogp
┃
╰══════════════⪨
~∆  *STIKERS* ∆~
╭═══════|❏|═════⪩
┃𖡦 *Para crear stikes*
┃
┃ ${e}${prefix}sticker
┃ ${e}${prefix}s
┃ ${e}${prefix}si
┃ ${e}${prefix}simg
┃ ${e}${prefix}attp
┃ ${e}${prefix}attp2
┃ ${e}${prefix}attp3
┃ ${e}${prefix}attp4
┃ ${e}${prefix}attp5
┃
╰══════════════⪨
~∆ *DESCARGAS* ∆~
╭═══════|❏|═════⪩
┃𖡦 *Para/descargas*
┃
┃ ${e}${prefix}aptoide + [texto]
┃ ${e}${prefix}tiktok_video + [link]
┃ ${e}${prefix}tiktok_music + [link]
┃ ${e}${prefix}tiktokvid + [link]
┃ ${e}${prefix}play + [texto | link]
┃ ${e}${prefix}play2 + [texto | link]
┃ ${e}${prefix}play3 +[ texto | link]
┃ ${e}${prefix}playvid + [texto | link]
┃ ${e}${prefix}playvid2 + [texto | link]
┃ ${e}${prefix}playvid-doc + [texto | link]
┃ ${e}${prefix}face_video + [link]
┃ ${e}${prefix}face_audio + [link]
┃ ${e}${prefix}mediafire + [link]
┃ ${e}${prefix}imglink + [@imagen]
┃ ${e}${prefix}acortar + [link]
┃ ${e}${prefix}toqr + [texto | link]
┃ ${e}${prefix}tomp3 + [@video]
┃
╰══════════════⪨
~∆ *BUSQUEDA* ∆~
╭═══════|❏|═════⪩
┃𖡦 *Para/busquedas*
┃
┃ ${e}${prefix}yts + [texto]
┃ ${e}${prefix}infoanime + [texto]
┃ ${e}${prefix}pinterest + [texto]
┃ ${e}${prefix}imagen + [texto]
┃ ${e}${prefix}ia + [texto]
┃ ${e}${prefix}gpt + [texto]
┃ ${e}${prefix}gpt2 + [texto]
┃ ${e}${prefix}lyrics + [texto]
┃ ${e}${prefix}styletext + [texto]
┃ ${e}${prefix}whatmusic + [@video | @audio]
┃
╰══════════════⪨
 ~∆ *SERBOT* ∆~
╭═══════|❏|═════⪩
┃𖡦 *para que tengas tu propio bot*
┃
┃ ${e}${prefix}serqr
┃ ${e}${prefix}sercode
┃ ${e}${prefix}bots
┃ ${e}${prefix}public [modo publico]
┃ ${e}${prefix}self [modo privado]
┃ ${e}${prefix}deljadibot
┃ ${e}${prefix}serbug [solo reportes de serbot]
┃
╰══════════════⪨
 ~∆ *JUEGOS* ∆~
╭═══════|❏|═════⪩
┃𖡦 *para diversion en gp*
┃
┃ ${e}${prefix}fake
┃ ${e}${prefix}simi
┃ ${e}${prefix}cassino
┃ ${e}${prefix}vergrupo
┃ ${e}${prefix}rankgay
┃
╰══════════════⪨
~∆ *IMG EDIT* ∆~
╭═══════|❏|═════⪩
┃𖡦 *para modificar una imagen*
┃
┃ ${e}${prefix}hd
┃ ${e}${prefix}quitar-fondo
┃ ${e}${prefix}buscado
┃ ${e}${prefix}calavera
┃ ${e}${prefix}zombie
┃ ${e}${prefix}anime
┃ ${e}${prefix}leer-qr
┃ ${e}${prefix}disney
┃
╰══════════════⪨
~∆ *ECONOMIA* ∆~
╭═══════|❏|═════⪩
┃𖡦 *en estado de prueba[inestable]*
┃
┃ ${e}${prefix}trabajar
┃ ${e}${prefix}cartera
┃ ${e}${prefix}buy xp
┃ ${e}${prefix}buy cofre
┃ ${e}${prefix}sell-diamantes
┃ ${e}${prefix}sell-papel
┃ ${e}${prefix}cambiar-perfil + [link.jpg]
┃
╰══════════════⪨
 ~∆ *POKEMON* ∆~
╭═══════|❏|═════⪩
┃𖡦 *usa la pokedex para informarte*
┃
┃ ${e}${prefix}bulbasaur
┃ ${e}${prefix}ivysaur
┃ ${e}${prefix}venusaur
┃ ${e}${prefix}charmander
┃ ${e}${prefix}charmeleon
┃ ${e}${prefix}charizard
┃ ${e}${prefix}squirtle  
┃ ${e}${prefix}wartortle
┃ ${e}${prefix}blastoise
┃ ${e}${prefix}caterpie
┃ ${e}${prefix}metapod
┃ ${e}${prefix}butterfree
┃ ${e}${prefix}weedle
┃ ${e}${prefix}kakuna
┃ ${e}${prefix}beedrill      
┃ ${e}${prefix}pidgey
┃ ${e}${prefix}pidgeotto
┃ ${e}${prefix}pidgeot
┃ ${e}${prefix}rattata
┃ ${e}${prefix}raticate
┃ ${e}${prefix}spearow
┃ ${e}${prefix}fearow
┃ ${e}${prefix}ekans
┃ ${e}${prefix}arbok
┃ ${e}${prefix}pikachu
┃ ${e}${prefix}raichu
┃
╰══════════════⪨
~∆ *+18* ∆~
╭═══════|❏|═════⪩
┃𖡦 *[solo para mayores de edad]*
┃
┃ ${e}${prefix}hentai
┃ ${e}${prefix}hentai2
┃ ${e}${prefix}xxx + [texto | link]
┃ ${e}${prefix}xnxxsearch + [texto]
┃ ${e}${prefix}xnxxsearch2 + [texto]
┃ ${e}${prefix}xnxxvid + [link]
┃ ${e}${prefix}xnxxdl + [link]
┃
╰══════════════⪨
 ~∆ *SOPORTE* ∆~
╭═══════|❏|═════⪩
┃𖡦 *para reportar fallas en el bot*
┃
┃ ${e}${prefix}bug [texto]
┃
╰══════════════⪨
 ~∆ *CREADOR* ∆~
╭═══════|❏|═════⪩
┃𖡦 ${botname}
┃
┃ ${e}${prefix}update
┃ ${e}${prefix}join + [linkgp]
┃ ${e}${prefix}estado
┃ ${e}${prefix}ping
┃
╰══════════════⪨`
let resullt = ramdonstyle(menuu)
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
  "mediaUrl": `https://chat.whatsapp.com/C9Wv6eqFWOeKxh8EMxfCF4`,  
  "sourceUrl": `https://chat.whatsapp.com/C9Wv6eqFWOeKxh8EMxfCF4`  
  }  
  }  
  }, { quoted: fkontak }) 
   break
 
    case 'estadogp': 
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
  ` }, { quoted: msg });
     
     break 
    
  case 'acortar':
  if (!text) return reply(`*[❗] INFO [❗]*\n*Ingresa un link para acortar!!*`)
  let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
  if (!shortUrl1) return reply(`*[❗] ERROR [❗]*`)
  let done = `
❏================•
❏ *𝙻𝙸𝙽𝙺 𝙰𝙲𝙾𝚁𝚃𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 [ ✓ ]*
❏================•
❏ *𝙻𝙸𝙽𝙺 𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻:* ${text}
❏================•
❏ *𝙻𝙸𝙽𝙺 𝙰𝙲𝙾𝚁𝚃𝙰𝙳𝙾:* ${shortUrl1}
❏================•`
conn.sendMessage(from, {text: done }, {quoted: msg })
  break
   
   
  case 'nowa': 
  let regex = /x/g 
  if (!text) reply('⚠️ Falto el número.')
  if (!text.match(regex)) reply(`*Ejemplo de uso: ${prefix + command} 521999340434x*`)
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
  reply(txt) 
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

    reply(ttext)
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
    
    
    
case 'gore-video': {
function gore() {
  return new Promise(async (resolve, reject) => {
    try {
      let randvid = Math.floor(Math.random() * 218) + 1;
      let slink = `https://seegore.com/gore/page/${randvid}/`;
      
      const { data } = await axios.get(slink);
      const $ = cheerio.load(data);
      
      const link = [];
      const judul = [];
      const uploader = [];
      const thumb = [];
      
      $('#post-items > li > article > div.content > header > h2 > a').each(function(a, b) {
        link.push($(b).attr('href'));
      });

      $('#post-items > li > article > div.content > header > h2 > a').each(function(c, d) {
        let jud = $(d).text();
        judul.push(jud);
      });

      $('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e, f) {
        let upl = $(f).text();
        uploader.push(upl);
      });

      $('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g, h) {
        thumb.push($(h).attr('src'));
      });
      const result = {
        creator: "Wudysoft",
        data: {
          judul: judul,
          uploader: uploader,
          thumb: thumb,
          link: link
        }
      };

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

function sgoredl(link) {
	return new Promise(async (resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $$ = cheerio.load(data)
				const format = {
					judul: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
					views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
					comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
					link: $$('video > source').attr('src')
				}
				const result = {
					creator: "Wudysoft",
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}
try {
reply("enviando video al privado😓")
const result = await gore();
if (result.data.link.length > 0) {
const randomurl = Math.floor(Math.random() * result.data.link.length);
const randomResult = {
judul: result.data.judul[randomurl],
link: result.data.link[randomurl],};
const translate = require('translate-google');
const translatedTitle = await translate(randomResult.judul, { to: 'es' });
const message = {
text: `❗ *☢️Este contenido es apto para una audiencia mayor de 18 años. puede contener lenguaje ofensivo, escenas de sexo y violencia. se recomienda descrecion*\n\n• *Titulo:* ${translatedTitle}\n• *Link:* ${randomResult.link}`,};
await conn.sendMessage(sender, { text: message }, { quoted: msg });
const videoResult = await sgoredl(`${randomResult.link}`);
await conn.sendMessage(sender, { video: { url: videoResult.data.link, mimetype: 'video/mp4' }, caption: `• *Views:* ${videoResult.data.views}\n• *Comentários:* ${videoResult.data.comment}`,}, { quoted: msg });
} else {
return reply('error al buscar en  SSearchGore.\n');}
} catch (error) {
console.error(error);
return reply('Error al buscar en SSearchGore.\n' + error);}
}
break;
    
    
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
linkvc = await conn.groupInviteCode(from)
m.reply('_este es el link de este grandioso grupo_\n\nhttps://chat.whatsapp.com/'+linkvc)
break
     case 'gp':
    if (!m.isGroup) return reply(mess.group);  
    if (!isBotAdmins) return reply(mess.botAdmin);  
    if (!isGroupAdmins) return reply(mess.admin)
      if (args[0] === 'on') {
    reply(`*GRUPO ABIERTO CON EXITO✅*`)
    await conn.groupSettingUpdate(m.chat, 'not_announcement')
    } else if (args[0] === 'off') {
    reply(`*GRUPO CERRADO CON EXITO✅*`)
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
conn.sendMessage(lll, { text: `${botname} \n\n ${tm ? tm : 'no hay mensaje'}` }, { quoted: fdoc });
}
reply("𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙶𝙻𝙾𝙱𝙰𝙻 𝙲𝙾𝙼𝙿𝙰𝚁𝚃𝙸𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 ✓")
}
break
    case 'public':
    if(_isBot !== m.sender) return conn.fakeReply(m.chat, 'este comando solo lo pueden usar bots o subbots', '0@s.whatsapp.net', '❌ No eres bot')
      conn.public = true
      reply('*ahora el bot es de uso publico*')
      break
  
      case 'self':
      if(_isBot !== m.sender) return conn.fakeReply(m.chat, 'este comando solo lo pueden usar bots o subbots', '0@s.whatsapp.net', '❌ No eres bot')
      conn.public = false
      reply('*ahora el bot es de uso privado*')
      break
  
  
      case 'serqr':  case 'serbot':
      reply("*EL CODIGO-QR HA SIDO ENVIADO A SU CHAT PRIVADO*") 
      await jadibot(conn, m, command)  
      break 
      case 'deljadibot':
      killJadibot(conn, m, command)
      break

      case 'sercode':
      await jadibot2(conn, m, command, text)
      break

    case 'bots':
    try {
    let user = [... new Set([...global.listJadibot.filter(conn => conn.user).map(conn => conn.user)])];
    te = `𝚂𝚄𝙱-𝙱𝙾𝚃𝚂 𝙳𝙴 ${botname}\n\n`;
    for (let i of user) {
      y = await conn.decodeJid(i.id);
      te += "-----\n𝚄𝚂𝚄𝙰𝚁𝙸𝙾:" + i.name + "\n";
      te += "𝙽𝚄𝙼𝙴𝚁𝙾: https://wa.me/+" + y.split("@")[0] + `?text=${prefix}menu\n-----`;   
    }
    if( te == `𝚂𝚄𝙱-𝙱𝙾𝚃𝚂 𝙳𝙴 ${botname}\n\n` ) {
    reply(`*𝙽𝙾 𝙷𝙰𝚈 𝚂𝚄𝙱-𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂*`);
    } else { 
     conn.sendMessage(from, { text: te }, { quoted: m });
    }
    } catch (e) { 
    console.log(e)
    reply(`*𝙽𝙾 𝙷𝙰𝚈 𝚂𝚄𝙱-𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂*`);
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
    
    
    
    
      case 's':  
      case 'sticker': {  
          if (/image/.test(mime)) {  
          reply(mess.wait)  
          media = await quoted.download()  
          let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })  
          await fs.unlinkSync(encmedia)  
        } else if (/video/.test(mime)) {  
          if ((quoted.msg || quoted).seconds > 40) return reply('¡Máximo 40 segundos!')  
          media = await quoted.download()  
          let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author })  
          await new Promise((resolve) => setTimeout(resolve, 2000));   
          await fs.unlinkSync(encmedia)  
      } else {  
          reply(`𝙴𝙽𝚅𝙸𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 | 𝚅𝙸𝙳𝙴𝙾 𝙲𝙾𝙽 ${prefix + command}\n\n𝙻𝙰 𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙳𝙴 40 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂`)  
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
let { styletext } = require("./scrapers/styletext.js")
reply('𝙰𝙿𝙻𝙸𝙲𝙰𝙽𝙳𝙾 𝚂𝚃𝚈𝙻𝙾')
let resultado = await styletext(text)
if (resultado.length > 0) {
estilos = resultado.map((item, index) => `${index + 1}. ${item.result}`).join('\n—\n')
if (resultado.length > 5) {
estilos = estilos.split('\n—\n')
estilos = estilos.join('\n—\n')}
reply(`• 𝙰𝙿𝙻𝙸𝙲𝙰𝙽𝙳𝙾 𝚂𝚃𝚈𝙻𝙾𝚂 𝙿𝙰𝚁𝙰: ${text}\n\n${estilos}`)
} else {
reply('no fue posible aplicar los stylos')}
} catch (e) {
console.log(e)
reply(e)}
break

case 'boxmine':
   conn.sendMessage(from, { image: { url: "https://telegra.ph/file/bb390241e374cdb83b98c.jpg" }, caption: `
❏================•
❏ 𝙱𝙾𝚇𝙼𝙸𝙽𝙴 𝚄𝙽 𝙼𝚄𝙽𝙳𝙾 𝙳𝙴 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁𝙴𝚂
❏================•
❏𝙱𝙾𝚇𝙼𝙸𝙽𝙴 𝙴𝚂 𝚄𝙽𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 𝙷𝙾𝚂𝚃𝙸𝙽𝙶 𝙿𝙰𝚁𝙰 𝙱𝙾𝚃𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿, 𝚃𝙴𝙻𝙴𝙶𝚁𝙰𝙼, 𝙿𝙰𝙶𝙸𝙽𝙰𝚂 𝚆𝙴𝙱 𝙴𝙽𝚃𝚁𝙴 𝙾𝚃𝚁𝙰𝚂, 𝙷𝙰𝚂 𝙿𝙰𝚁𝚃𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰 𝙱𝙾𝚇𝙼𝙸𝙽𝙴 𝚈 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰 𝙳𝙴 𝙻𝙾𝚂 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙾𝚂
❏ 𝙿𝙰𝚃𝚁𝙾𝙲𝙸𝙽𝙰 𝚑𝚝𝚝𝚙𝚜://𝚍𝚊𝚜𝚑.𝚋𝚘𝚡𝚖𝚒𝚗𝚎.𝚌𝚘𝚖
❏ @Vicemi
❏================•
 ` }, { quoted: fkontak })
   break		

   
case 'face_video':
  if (!text) throw  `*Ejemplo: ${prefix + command} + url`
  try {
    reply("*DESCARGANDO VIDEO...*")
  require("./scrapers/facebook.js").facebook(text).then( data => {
    conn.sendMessage(from, { video: { url: data.Normal_video }}, { quoted: msg })
  })
} catch (e) {
  console.log(e)
  reply("*❗ lo siento no pude descargar el video*")
}
  break


  
  case 'face_audio':
  if (!text) throw `*Ejemplo: ${prefix + command} + url`
  try {
    reply("*DESCARGANDO AUDIO...*")
  require("./scrapers/facebook.js").facebook(text).then( data => {
    conn.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: msg })

  })
} catch (error) {
  console.log(error)
  reply("*❗ lo siento no pude descargar el audio*")
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
          if (!text) return reply( `*Ejemplo: ${prefix + command} link`)
           if (!q.includes('tiktok')) return reply(`*link invalido!*`)
    require('./scrapers/tiktok.js').Tiktok(q).then( data => {
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
        if (!text) return reply( `*Ejemplo: ${prefix + command} link*`)
         if (!q.includes('tiktok')) return reply(`*link invalido!*`)
    require('./scrapers/tiktok.js').Tiktok(q).then( data => {
    conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
    })    
    break
            
    
    

            
/*    
 const JavaScriptObfuscator = require('javascript-obfuscator')
         case 'ofuscar':
       if (!text) return reply("*Ingresa el codigo que vas a ofuscar.*"); 
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
*/            
  case 'getcase':  
    if (!isCreator) return conn.sendMessage(m.chat, { text: `*ESTE COMANDO ES PARA MI JEFE*` }, { quoted: msg });  
    if (!text) return reply(`no hay comando a buscar o que?`)  
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
  if (!text) return reply(`no hay comando a buscar o que?`)  
  if (!who) return reply(`*etiqueta a alguien*`)
  try {
  bbreak = 'break'
  reply('case ' + `'${args[0]}'` + fs.readFileSync('./escanor.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak, who)
  conn.sendMessage(m.chat, { text: `enviado con exito a @${who.split("@")[0]}`, mentions: [who] })
  } catch (error) {
  console.error(error)
  reply(`no existe el comando`)
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
try{
 links = `${web1}/api/hentai?apikey=${apikey}`
  reply('*_enviando al privado..._*')
  conn.sendMessage(sender, { image: { url: links }, caption: `uwu` }, { quoted: fkontak });
  } catch (error){
  console.log(error)
  reply("ocurrio un error")
  }
  
  break 


case 'hentai2':
   let vnn = './audios/UwU.mp3'
   let api = `${web1}/api/hentai?apikey=andres`
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
  
case 'gpt5':
const OpenAI = require('openai');
 // Reemplaza con tu clave de API de OpenAI
const openai = new OpenAI({ key: apikeygpt });

async function obtenerRespuestaDelChat(prompt) {
  try {
    const respuesta = await openai.complete.create({
      model: 'text-davinci-003',  // Puedes ajustar el modelo según tus necesidades
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ]
    });

    return respuesta.data.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Ejemplo de uso
const promptUsuario = text
obtenerRespuestaDelChat(promptUsuario)
  .then(respuesta => reply(respuesta))
  .catch(error => reply('Error:', error));
  
  
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
  m.reply('*no encontre resultados relacionados*')
}
break

    case 'yts': case 'ytsearch': 
    if (!text) throw `Ejemplo: ${prefix + command} historia wa anime`;  
    const search = await yts(text);  
    let teks = 'Búsqueda en YouTube\n\nResultados de ' + text + '\n\n';  
    let no = 1;  
    let themeemoji = "❏";  
    for (let i of search.all) {  
      teks += `${themeemoji} No: ${no++}\n${themeemoji} Tipo: ${i.type}\n${themeemoji} Título: ${i.title}\n${themeemoji} Vistas: ${i.views}\n${themeemoji} Duración: ${i.timestamp}\n${themeemoji} Subido: ${i.ago}\n${themeemoji} ID del Video: ${i.videoId}\n${themeemoji} URL: ${i.url}\n\n━━━━━━━━━━━━\n\n`;  
    }  
    await conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });  
    break 
    
    case 'entrar':
    case 'join': {
    if(!text) throw respuesta.text
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
  if (!text) return reply('*por favor manda un link para convertirlo en qr*')

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
    if (!isGroupAdmins) return reply(mess.admin)
    if (isGroupAdmins || isCreator || !m.quoted ) {  
      conn.sendMessage(m.chat, { text: q ? q : "", mentions: participants.map((a) => a.id) }, { quoted: m })  
    }
    if (m.quoted) return conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) }, { quoted: m }) // Mario is going to steal it
    break;  
  
  case 'todos2': {  
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
case 'dar-oro':
if(!text) throw "ingresa el valor que deseas regalar"
if(validarnumero(text)) {
valor = text
global.db.data.users[who].gold += valor
rtx = `
usuario: @${sender.split("@")[0]}
regalo ${valor} de 🪙Oro a:
@${who.split("@")[0]}
`
reply(rtx)
sleep(1000)
global.db.data.users[sender].gold -= valor
} else {
reply("solo se aceptan numeros")
}
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
///img modificador   
   case 'anime':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let url = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${_upload}`
   await reply(`*❗espera*`)
   await conn.sendMessage(m.chat, { image: { url: url }, caption: `✨ convertido a anime ✨`}, { quoted: fgif })
   } catch (e) {
   console.log(e)
   reply(' *_NO PUEDE MODIFICARLO_* ')
    }
    } else {
    reply('selecciona una imagen')
    }
   break
   
   case 'zombie':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let url = `https://api.lolhuman.xyz/api/zombie-effect?apikey=${lolkeysapi}&img=${_upload}`
   await reply(`*❗espera*`)
   await conn.sendMessage(m.chat, { image: { url: url }, caption: `✨ convertido a zombie ✨`}, { quoted: fgif })
   } catch (e) {
   console.log(e)
   reply(' *_NO PUEDE MODIFICARLO_* ')
    }
    } else {
    m.reply('selecciona una imagen')
    }
   break
   
      case 'hd':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let url = `https://api.lolhuman.xyz/api/upscale?apikey=${lolkeysapi}&img=${_upload}`
   await reply(`*❗espera*`)
   await conn.sendMessage(m.chat, { image: { url: url }, caption: `✨ convertido a hd' ✨`}, { quoted: fgif })
   } catch (e) {
   console.log(e)
   reply(' *_NO PUEDE MODIFICARLO_* ')
    }
    } else {
    m.reply('selecciona una imagen')
    }
   break
   
   
         case 'calavera':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let url = `https://api.lolhuman.xyz/api/editor/skullmask?apikey=${lolkeysapi}&img=${_upload}`
   await reply(`*❗espera*`)
   await conn.sendMessage(m.chat, { image: { url: url }, caption: `✨ convertido a calavera' ✨`}, { quoted: fgif })
   } catch (e) {
   console.log(e)
   reply(' *_NO PUEDE MODIFICARLO_* ')
    }
    } else {
    m.reply('selecciona una imagen')
    }
   break
   
   case 'buscado':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let url = `https://api.lolhuman.xyz/api/creator1/wanted?apikey=${lolkeysapi}&img=${_upload}`
   await reply(`*❗espera*`)
   await conn.sendMessage(m.chat, { image: { url: url }, caption: `✨ convertido a buscado✨`}, { quoted: fgif })
   } catch (e) {
   console.log(e)
   reply(' *_NO PUEDE MODIFICARLO_* ')
    }
    } else {
    m.reply('selecciona una imagen')
    }
   break
   
   case 'disney':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let url = `https://api.lolhuman.xyz/api/editor/cartoon?apikey=${lolkeysapi}&img=${_upload}`
   await reply(`*❗espera*`)
   await conn.sendMessage(m.chat, { image: { url: url }, caption: `✨ convertido a personaje disney✨`}, { quoted: fgif })
   } catch (e) {
   console.log(e)
   reply(' *_NO PUEDE MODIFICARLO_* ')
    }
    } else {
    m.reply('selecciona una imagen')
    }
   break
 
  case 'leer-qr':
   if (/image/.test(mime)) {
   let _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   let _upload = await TelegraPh(_miMedia)
   try {
   let url = `https://api.lolhuman.xyz/api/read-qr?apikey=${lolkeysapi}&img=${_upload}`
   let lector = await fetchJson(url)
   await reply(`*❗espera*`)
   m.reply(`
[❗] codigo qr leido con exito
resultado: *${lector.result}*
`)   
   } catch (e) {
   console.log(e)
   reply(' *_NO PUEDE LEER EL QR_* ')
    }
    } else {
    m.reply('selecciona una imagen QR')
    }
   break
   
   case 'gerarlink': 
   case 'imglink':
   if (/image/.test(mime)) {
   _miMedia = await conn.downloadAndSaveMediaMessage(quoted)
   _upload = await TelegraPh(_miMedia)
   reply(`*AGUARDA CREANDO LINK👇*`)
   sleep(5000)
   m.reply(_upload)
   } else { 
   reply(`*❗ responde a una imagen *`)
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
     if ((quoted.msg || quoted).seconds > 300) return reply('𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝚂𝚄𝙿𝙴𝚁𝙰 𝙻𝙾𝚂 𝟻𝙼𝙽'); 
     let media = await quoted.download(); 
     let ext = mime.split('/')[1]; 
     let iddd = sender.split("@")[0]
     fs.writeFileSync(`./temp/${iddd}.${ext}`, media); 
     let  res = await acr.identify(fs.readFileSync(`./temp/${iddd}.${ext}`)); 
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
     reply(txt); 
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
❏---YOUTUBE-PLAY---❏
❏ *TITULO*: _${you[0].title}_
❏------------❏
❏ *VISTAS:* ${you[0].views}
❏------------❏
❏ *DURACION:* ${you[0].timestamp}
❏------------❏
❏ *SUBIDO:* ${you[0].ago}
❏------------❏
❏ *ID:* ${you[0].videoId}
❏------------❏
 `
 let stile = ramdonstyle(text1)
 conn.sendMessage(m.chat, {image: {url: you[0].thumbnail}, caption: stile + `\n❏ *URL:* ${you[0].url}
❏------------❏`
 }, {quoted: m})
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
if(!text) return reply('ingresa el nombre de una cancion')
 reply('*𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾...*')
 try{
let andres = await fetchJson(`${web1}/api/play?text=${text}&apikey=${apikey}`)
let titulo = await andres.result.titulo
let duracion = await andres.result.duracion
let vistas = await andres.result.view
let ago = await andres.result.ago
let urlvid = await andres.result.link_youtube
let imagen = await andres.result.img
let urll = await getBuffer(andres.result.url)
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
reply(e)
reply(`*_NO PUDE REALIZAR LA DESCARGA_*\n\n*DESCARGALO POR ESTE LINK👇*\n\n${urll}`)
} 
break 
///PLAY FAST BY: ANDRES-VPN\\\

 case 'playvid': {
    if (!text) return reply('ingresa un el nombre de un video')
   let { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
   let enviando
   let _limit1 = 100
   let _limit2 = 400
   let t = await yts(text)
   let r = t.all
   let text1 = `
*❏---YOUTUBE-PLAYVID---❏*
❏ *TITULO*: _${r[0].title}_
❏------------❏
❏ *VISTAS:* ${r[0].views}
❏------------❏
❏ *DURACION* ${r[0].timestamp}
❏------------❏
❏ *SUBIDO:* ${r[0].ago}
❏------------❏
❏ *ID:* ${r[0].videoId}
❏------------❏`
let estilo = ramdonstyle(text1)
   conn.sendMessage(m.chat, {image: {url: r[0].thumbnail}, caption: estilo + `\n❏ *𝚄𝚁𝙻:* ${r[0].url}
❏------------❏` }, {quoted: m})
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


  case 'playvid2':
    case 'playvid-doc': 
    if(!text) throw respuesta.text
  try {
require("./scrapers/youtube.js").ytMp4(text).then( resultado => {
let titulo = resultado.title
let canal = resultado.channel
let calidad = resultado.quality
let ago = resultado.uploadDate
let descripcion = resultado.desc
let img = resultado.thumb
let vistas = resultado.views
let duracion = resultado.duracion
let id = resultado.id_video
let urlvid = resultado.url_yt
let link =  resultado.result
let link2 = resultado.rersult2 
let rtx = `
❏------------❏
❏TITULO: ${titulo}
❏------------❏
❏VISTAS: ${vistas}
❏------------❏
❏SUBIDO: ${ago} 
❏------------❏
❏DURACION: ${duracion} 
❏------------❏
❏CANAL: ${canal}
❏------------❏
❏CALIDAD: ${calidad}
❏------------❏
❏URL: ${urlvid}
❏------------❏
❏ID: ${id}
❏------------❏
❏DESCRIPCION

${descripcion}
`
conn.sendMessage(from, {image: {url: img}, caption: rtx }, {quoted: m})
conn.sendMessage(m.chat, {document: {url: link}, caption: '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾✓*', mimetype: 'video/mp4', fileName: titulo + `.mp4`}, {quoted: m})
})
  } catch (e) {
    reply("no pude descargar el video")
    console.error(e);
  }
  break




  case 'mediafire':
  let { mediafiredl } = require('@bochilteam/scraper')
  if (!text) throw '*❗Ingresa un elnace de mediafire*'
  try {
  let ann =  await mediafiredl(text)
  reply(`
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
 let emojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${text1}_${text2}`)
    conn.sendMessage(m.chat, { sticker: { url: emojimix.results.url } }, { quoted: fkontak })  
   } catch (error) {
   reply(error + `\n\nerror`)
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
                reply('*✅ Hecho*')
            break
            case 'delcmd': 
                let _sh = m.quoted.fileSha256.toString('base64')
                if (!_sh) throw '*Este id de sticker no existe*'
                if (global.db.data.sticker[_sh] && global.db.data.sticker[_sh].locked) throw '*❌ No tienes permiso de eliminar este comando*'        
                delete global.db.data.sticker[_sh]
                reply('*✅ Hecho*')
            break
            
            case 'lockcmd': 
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw '*❗Etiqueta un sticker*'
                if (!m.quoted.fileSha256) throw '*❗Etiqueta un sticker*'
                let _hash = m.quoted.fileSha256.toString('base64')
                if (!(_hash in global.db.data.sticker)) throw '*❗Este sticker no esta en mi base de datos*'
                global.db.data.sticker[_hash].locked = !/^un/i.test(command)
                reply('*✅ Hecho*')
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
           let updatee = execSync('git remote set-url origin https://github.com/andresvpn/ESCANOR-MD && git pull')  
            await conn.sendMessage(m.chat, { text: updatee.toString() }, { quoted: msg });  
         }  
           break  
  
         case 'simi': {  
          if (!text) return conn.sendMessage(m.chat, { text: `𝚒𝚗𝚐𝚛𝚎𝚜𝚊 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚑𝚊𝚋𝚕𝚊𝚛 𝚌𝚘𝚗 𝚜𝚒𝚖𝚒` }, { quoted: msg });  
          
            let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`);  
            let response = simi.success; 
            
           conn.sendMessage(m.chat, { text: response }, { quoted: msg });  
        }  
         break  
  
          case 'ia':
          case 'gpt':
          if (!text) return reply(`*ingresa un texto para hablar con chatgpt*`)
          try {     
         let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`) 
         let hasill = await tioress.json() 
         reply(`${hasill.result}`.trim())    
         } catch {
         let mygpt = await fetch(`https://vihangayt.me/tools/chatgpt4?q=${text}`)
         let _result = await mygpt.json()
             conn.sendMessage(from, {text: `${_result.data}` }, {quoted: msg })
        }
         break
         
          case 'pinterest':  
          if (!text) return reply('𝚒𝚗𝚐𝚛𝚎𝚜𝚊 𝚞𝚗 𝚝𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚋𝚞𝚜𝚌𝚊𝚛 𝚎𝚗 𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝')  
          reply(mess.wait)  
          let lol = await pinterest(text) //.catch(reply)  
          let  resultt = lol[Math.floor(Math.random() * lol.length)];  
          sendImageAsUrl(resultt, `*-------「 PINTEREST 」-------*\n🤠 busqueda de ${text}\n🔗 url ${resultt}`)  
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
                  reply(`hubo un error... ${e}`)  
                  }  
                  break  
                  
              
            case 'toaudio': case 'tomp3': case 'mp3': {
                  if (!/video/.test(mime) && !/audio/.test(mime)) throw `*❗ Etiqueta un video con ${prefix + command}*`
                  if (!quoted) throw `*❗ Etiqueta un video con ${prefix + command}*`
                  reply("𝙲𝙾𝙽𝚅𝙸𝚁𝚃𝙸𝙴𝙽𝙳𝙾 𝙰 𝙼𝙿𝟹...")
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
		    if (!m.isGroup) return reply('_*este comando solo puede ser utilizado en grupos*_')
		    if (!global.db.data.chats[m.chat].antiNsfw) return reply(`*el comando ${command} no esta activado en este grupo*\n*usa ${prefix}enable antinsfw*`)
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
			default:
          if (budy === `${prefix}`) {
             conn.sendMessage(from, {text: `
╭════════════════⪩
┃き⃟🦁 _*${botname}*_🦁⃟き
┃➫ _*utiliza ${prefix}menu*_
┃➫ _*para ver mis funciones*_
╰════════════════⪨
            ` }, {quoted: msg })
            } else if (budy.startsWith(`${prefix}`)) {
            conn.sendMessage(from, {text: `
╭════════════════⪩
┃き⃟🦁 _*ERROR*_🦁⃟き
┃➫ _*usuario     ${pushname}*_
┃➫ _*comando [${prefix + command} ${text}]es incorrecto❗*_
┃➫ _*lea detenidamente el menu*_
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
			default:
  if (budy === `${prefix}`) {
             conn.sendMessage(from, {text: `
╭════════════════⪩
┃き⃟🦁 _*${botname}*_🦁⃟き
┃➫ _*utiliza ${prefix}menu*_
┃➫ _*para ver mis funciones*_
╰════════════════⪨
            ` }, {quoted: msg })
            } else if (budy.startsWith(`${prefix}`)) {
            conn.sendMessage(from, {text: `
╭════════════════⪩
┃き⃟🦁 _*ERROR*_🦁⃟き
┃➫ _*usuario     ${pushname}*_
┃➫ _*comando [${prefix + command} ${text}]es incorrecto❗*_
┃➫ _*lea detenidamente el menu*_
╰════════════════⪨
            ` }, {quoted: msg })}
          
			
			}
			break
			

    
			

            case 'inspeccionar': case 'vergrupo':
    let linkRegex = args.join(" ")
    let textt = ``
    let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
    if (!coded) return reply("Link Invalid")
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
let pok = await fetchJson(`${web1}/api/pokemon?apikey=${apikey}`)
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

    case 'app': case 'playstore': case 'aptoide': {
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
let estilo = ramdonstyle(response)
     await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: estilo }, {quoted: m}); 
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
let mantes = Math.floor(Math.random() * 20)
let _papel = Math.floor(Math.random() * 30)
let zz = global.db.data.users[sender]
zz.papel += _papel
zz.gold += _oro
zz.limit += mantes
zz.exp += 1000
reply('*trabajando...*')
await sleep(10000)
tex = `❏------------❏
❏_*[🦁]${frase}*_
❏------------❏
❏ *GANASTE*
❏------------❏
❏ *💰ORO:* ${_oro}
❏------------❏
❏ *💎DIAMANTES:* ${mantes}
❏------------❏
❏ *🌟EXP:* 1000
❏------------❏
❏ *📰PAPEL:* ${_papel}
❏------------❏`
let estilo = ramdonstyle(tex)
reply(estilo)
global.db.data.users[m.sender].lastClaim = new Date() * 1
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
case 'cambiar-perfil':
if(!text) throw "ingresa un link .jpg"
 lllll = global.db.data.users[m.sender]
lllll.perfil = text
reply("foto de perfil alterada")
break
case 'cartera': case 'perfil':
try {
let z = global.db.data.users[m.sender]
let {min, xp, max} = xpRange(z.level, global.multiplier); 
let fondo ="https://telegra.ph/file/2384896a1193a4f707ab9.jpg"
let url = `https://api.lolhuman.xyz/api/rank?apikey=GATADIOS&img=${z.perfil}&username=${pushname}&level=${z.level}&ranking=${z.role}&currxp=${z.exp - min}&xpneed=${xp}&background=${fondo}`


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
❏------------❏`
reply("_*ENVIANDO INFORMACION DEL PERFIL_*")
await conn.sendMessage(from, { image: { url: url }, caption: tex }, { quoted: fkontak }) 
} catch (e) {
reply(`[❗]POR FAVOR ESTABLECE UNA FOTO DE PERFIL
UTILIZA ${prefix}cambiar-perfil + link.jpg` + `\n\nejemplo: ${prefix}cambiar-perfil https://telegra.ph/file/33caada6b5942f6ff999b.jpg`)
}

break

case 'karen':
if(!text) throw "ingresa un texto\nejemplo: verificado.hola.numero"
let txt1 = text.split(".")[0]
let txt2 = text.split(".")[1]
let txt3 = text.split(".")[2]
if(!txt1) throw "ingresa el mensaje verificado"
if(!txt2) throw "ingresa el mensaje a enviar, verficiado.smg"
if(!txt3) throw "ingresa el numero a enviar verficiado.smg.numero"
try {
let idd = txt3 + "@s.whatsapp.net"
let fdocc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `❗${txt1}`, jpegThumbnail: null}}}
conn.sendMessage(idd, { text: txt2 }, { quoted: fdocc });
reply("mensjae enviado con exito")
} catch (e) {
reply("hubo un error, por favor verifique que el numero este bien escrito")
}


break  
  case 'buy':
   let buy = text.split(".")[0].toLowerCase()
   let cantidad = text.split(".")[1];
 //  let buy = (args[0] || '').toLowerCase()
   let cost = 5000
   switch (buy) {
   case 'xp':
   if(!cantidad) throw `ingresa la cantidad`
   if(validarnumero(cantidad)) {
     if (global.db.data.users[m.sender].gold >= cantidad) {
     let xp = await xpnew(cantidad) 
     global.db.data.users[m.sender].exp += xp
     global.db.data.users[m.sender].gold -= cantidad
     reply(`*✅ Comprastes ${xp} Xp*`)
     } else { 
     reply(`*❗ no tienes dinero para comprar ${buy}*`)
     }
     } else {
     reply("solo se admite numeros")
     }
     break
     
     case 'cofre':
     if(global.db.data.users[m.sender].gold >= 10000) {
     global.db.data.users[m.sender].gold -= 10000
     let gold = Math.floor(Math.random() * 8000)
     let diamond = Math.floor(Math.random() * 20)
     let papel = Math.floor(Math.random() * 10)
     let data = global.db.data.users[m.sender]
     data.gold += gold
     data.limit += diamond
     data.papel += papel

     tex1 = `
|• COMPRASTE UN COFRE •| 

❏------------❏
❏ *COTENIDO* 
❏------------❏
❏ *💰𝙾𝚁𝙾* : [${gold}]
❏------------❏
❏ *💎𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂* : [${diamond}]
❏------------❏
❏ *📰𝙿𝙰𝙿𝙴𝙻:* ${papel}
❏------------❏
|• ${botname} •|
❏------------❏
     `
reply(tex1)
     } else {
     reply(`
[❗] 💰Oro insuficiente ${global.db.data.users[m.sender].gold}/10000
utiliza ${prefix}trabajar
`)
     }
     break
    
     

  
  default:
   reply(`*❎ No puedes comprar eso*`)
   }
   break

//transferir

case 'transferir-oro':
  if(!text) throw 'ingrese el valor que desea enviar'
  var valor = text
  if(validarnumero(valor)) {
  } else {
    reply("no se admiten letras solo numeros")
  }

  if( validarnumero(valor) && global.db.data.users[sender].gold >= valor) {
    global.db.data.users[who].gold += valor
    sleep(3000)
    global.db.data.users[sender].gold -= valor
    let rtx = `
    @${sender.split("@")[0]}
     TRANSFIRIO ${valor} de 💰𝙾𝚁𝙾 a:
    @${who.split("@")[0]}
    `
    sleep(3000)
    conn.sendMessage(from, {text: rtx, mentions: [who] }, { quoted: m })
        } else {
          reply(`
          [❗] 💰𝙾𝚁𝙾 insuficiente ${global.db.data.users[sender].gold}/${valor}
          [❗] utiliza ${prefix}trabajar
          `)
        }
break
   ////sell
 
case 'sell-papel':
  if(!text) throw `ingresa el numero de objetos a vender`
  var data = global.db.data.users[m.sender]
  var valor = text
  if(validarnumero(text)) {
    } else {
      reply(`no se admiten letras solo numeros`)
    }
 if( validarnumero(text) && data.papel >= valor) {
  let gold = await papel(valor)
  data.gold += gold
  data.papel -= valor
  reply(`[❗] *vendiste ${valor} hojas de 📰𝙿𝙰𝙿𝙴𝙻, por un valor de ${gold} de 💰𝙾𝚁𝙾*`)
} else {
  reply(`
  [❗] 📰𝙿𝙰𝙿𝙴𝙻 insuficiente ${data.papel}/${valor}
  [❗] utiliza ${prefix}trabajar
  `)
}
break


  
    case 'sell-diamantes':
      if(!text) throw `ingresa el numero de objetos a vender`
    var data = global.db.data.users[m.sender]
    var valor = text
    if(validarnumero(text)) {
    } else {
      reply(`no se admiten letras solo numeros`)
    }
    if( validarnumero(text) && data.limit >= valor) {
      let gold = await diamantes(valor)
      data.limit -= valor
      data.gold += gold
      reply(`[❗] *vendiste ${valor} 💎𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂, por un valor de ${gold} de 💰𝙾𝚁𝙾*`)
    } else {
      reply(`
  [❗] 💎𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 insuficientes ${data.limit}/${valor}
  [❗] utiliza ${prefix}trabajar
  `)
    }
    break
  


   case 'cheker':  
   if(!text) return reply('escribe la apikey de api.lolhuman.xyz')
let info = await +etchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
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


  case 'carta':
    {
    
    if(!text) return reply(`Exemplo: ${prefix + command} +570000000009|hola`)
    let text1 = text.split("|")[0].replace(/\D/g,'');
    let text2 = text.split("|")[1];
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
      if (!m.isGroup) return reply('_*este comando solo puede ser utilizado en grupos*_')   
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
reply(`[❗]💰Oro insuficiente ${global.db.data.users[m.sender].gold}/${precioo}\nutiliza ${prefix}trabajar y gana algo de dinero`)
}
   break    
   
    

case 'xnxxvid':
  if (!m.isGroup) return reply('_*este comando solo puede ser utilizado en grupos*_')
 if(global.db.data.users[m.sender].gold >= 8000) {
  if(!text) return reply('ingresa el link')
   xnxx = await fetchJson(`${web}/api/xnxx?url=${text}&apikey=${apikey}`)
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
  reply(`
[❗] 💰Oro insuficiente ${global.db.data.users[m.sender].gold}/8000  
  `)
}
   break    

   case 'xnxx': case 'xnxxsearch':
    if (!m.isGroup) throw '_*este comando solo puede ser utilizado en grupos*_'
    if(!text) return reply('ingresa un texto para buscar')
    let xnxxsearch = await fetchJson(`${web}/api/xnxxsearch?quero=${text}&apikey=${apikey}`)
    tekss = 'Búsqueda en Xnxx\n\nResultados de ' + text + '\n\n'
    let lo = 1;  
    let emoj = "❏";  
    try{
    for (let i of xnxxsearch.resultado) {  
      tekss += `${emoj} No: ${lo++}\n${emoj} Titulo: ${i.title}\n${emoj} Vistas: ${i.views}\n${emoj} Duracion: ${i.duration}\n${emoj} Publicado: ${i.uploader}\n${emoj} Url: ${i.link}\n\n━━━━━━━━━━━━\n\n`;  
    } 
    await conn.sendMessage(m.chat, { image: { url: xnxxsearch.resultado[0].thumbnail }, caption: tekss }, { quoted: fkontak });  
    } catch (e) {
    console.log(e)
    reply("𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂")
    } 
    
    break

     
case 'creador': 
case 'dono': 
case 'owner':
conn.sendMessage(from, { contacts: { displayName: `ANDRES-VPN`, contacts: [{ vcard }] }}, {quoted: msg})
break

case 'cassino':
if(!text) throw '*[❗] ingrese un valor para apostar*'
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
 
     
 var valor = text 
 let gana = await cassino(valor)


tex = `
╭══════════════⪩
┃𖡦 ${botname}
┃══════════════
┃ ➣ ${ran1} | ${ran7} | ${ran13}
┃══════════════
┃ ➣ ${ran3} | ${ran9} | ${ran15} *★*
┃══════════════
┃ ➣ ${ran5} | ${ran11} | ${ran17}
┃══════════════
┃ ➣ _*${botname}*_ 
┃
╰══════════════⪨`

if(validarnumero(text)) {

if(global.db.data.users[m.sender].gold >= valor ) {
  global.db.data.users[m.sender].gold -= valor  
 if( ran3 == a && ran9 == a && ran15 == a) {
global.db.data.users[m.sender].gold += gana
reply(tex + `\n*felicidades*\n*ganaste : ${gana} de 💰Oro*`)
} else if( ran3 == b && ran9 == b && ran15 == b) {
global.db.data.users[m.sender].gold += gana
reply(tex + `\n*felicidades*\n*ganaste : ${gana} de 💰Oro*`)
} else if( ran3 == c && ran9 == c && ran15 == c) {
global.db.data.users[m.sender].gold += gana
reply(tex + `\n*felicidades*\n*ganaste : ${gana} de 💰Oro*`)
} else {
reply(tex + `\nSe te desconto -${valor} de 💰Oro por el giro actual `)
}
} else if (global.db.data.users[m.sender].gold <= valor) {
  reply(`
  [❗] 💰Oro insuficiente ${global.db.data.users[m.sender].gold}/${valor}\n*utiliza ${prefix}trabajar y gana algo de dinero*`)
  } else 
  reply(`no se admiten letras solo numeros`)
}

break
case 'participer': case 'unkick': case 'revivir': 
if (!m.isGroup) return reply('agregando persona a este gran grupo')
if (!isGroupAdmins) return reply('el usuario ya esta aqui 🤠')
if(!text) return reply('Marque el mensaje del usuario o su número')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.conn.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply('ese numero no existe')
let [result] = await conn.onWhatsApp(id)
if(!result) return reply('Ese número no está registrado a WhatsApp')
let response = await conn.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
return reply('El/ella ya esta aqui')
} else if(response[0].status == "403") {
return reply('la cuenta es privada')
} else if(response[0].status == "408") {
return reply('si el chico salió pq q quieres add él???')
} else if(response[0].status == "401") {
return reply('el/ella me bloqueo ')
} else if(response[0].status == "200") {
return reply('agregado con exito')
}else {
reply(`${botname}`)
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
membr.push(gays1.id)
membr.push(gays2.id)
membr.push(gays3.id)
membr.push(gays4.id)
membr.push(gays5.id)
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
conn.sendMessage(from, {text: rankzingay }, {quoted: msg})
break


case 'xnxxdl':

 try {
const URL = text;
if (!URL) return reply('Por favor, ingrese su link de xnxx');
let{ xnxxdl } = require("./scrapers/xnxx.js")
xnxxdl(URL)
.then((result) => {
let highQualityVideoUrl = result.result.files.high;
let title = result.result.title;
let duration = result.result.duration;
let numero = duration/60
let decimal = numero.toFixed(2);
let minutos = decimal.replace(".", ":");
let captuo = `❏---XNXX-VIDEO---❏
❏ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
❏------------❏
❏ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${minutos} minutos
❏------------❏
❏ *${botname}*
❏------------❏`;
let gold =  global.db.data.users[m.sender]
let oro = gold.gold
let valor = 7999

if (gold.gold >= valor) {
  gold.gold -= valor
  reply('*enviando al privado🥵*')
  if( duration <= 900 ){
    conn.sendMessage(sender, { video: { url: highQualityVideoUrl, mimetype: 'video/mp4' }, caption: captuo }, { quoted: msg });
    } else if( duration >= 900 && duration <= 3000 ){
    conn.sendMessage(sender, {document: {url: highQualityVideoUrl}, caption: captuo, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: msg})
    } else if( duration > 3000 ){
    reply(`*EL VIDEO ES DEMASIADO GRANDE*\n\n*👇DESCARGUELO EN ESTE LINK👇*\n\n${highQualityVideoUrl}`)
    }
}  else if(oro < valor) {
  reply(`[❗]💰Oro insuficiente ${oro}/${valor}\nutiliza ${prefix}trabajar y gana algo de dinero`)
}
})
.catch((error) => {
console.error(error);
reply('ocurrio un error al buscar el video');
});
} catch (e) {
console.error(e);
reply('ocurrio un error al buscar el video');
}
break;


     

case 'xnxxsearch2':
  if(!text) throw "ingresa un texto para buscar"
    try {
   let { xnxxsearch } = require("./scrapers/xnxx.js")
   let xnxx_com = await xnxxsearch(text)
   teek = '❏---XNXX-SEARCH---❏\n\nResultados de ' + text + '\n\n'
   let porno = xnxx_com.result
   let lo = 1;  
   let emoj = "❏"; 
   for (let o of porno) {
     teek += `\n\n${emoj}${lo++}\n${emoj} *TITULO:* ${o.title}\n${emoj} *URL:* ${o.link}}\n❏------------❏`
 }
 await conn.sendMessage(from, { image: { url: 'https://telegra.ph/file/2911a64f326a61dfc6cf5.jpg' }, caption: teek }, { quoted: fkontak });  
  } catch (e) {
    console.log(e)
    reply("no pude realizar la busqueda\n" + e)
  }
  break
  case 'viewimg-url':
    if(!text) throw "ingrese un link de una imagen "
    try {
    await conn.sendMessage(m.chat, {image: {url: text }}, {quoted: msg})
          } catch (e) {
        console.log(e)
        m.reply("link invalido")
       }
       break

case 'viewvid-url':
      if(!text) throw "ingrese un link de un video "
      try {
  await conn.sendMessage(from, {video: { url: text }, fileName: `escanor.mp4`, mimetype: 'video/mp4' }, { quoted: msg });  
       } catch (e) {
        console.log(e)
        m.rply("link invalido")
       }
        break
case 'calcular': 
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break

//case?



    
          default: 
          /*
           if (budy === `${prefix}`) {
             conn.sendMessage(from, {text: `
╭════════════════⪩
┃き⃟🦁 _*${botname}*_🦁⃟き
┃➫ _*utiliza ${prefix}menu*_
┃➫ _*para ver mis funciones*_
╰════════════════⪨
            ` }, {quoted: msg })
            } else if (budy.startsWith(`${prefix}`)) {
            conn.sendMessage(from, {text: `
╭════════════════⪩
┃き⃟🦁 _*ERROR*_🦁⃟き
┃➫ _*usuario     ${pushname}*_
┃➫ _*comando [${prefix + command} ${text}]es incorrecto❗*_
┃➫ _*lea detenidamente el menu*_
╰════════════════⪨
            ` }, {quoted: msg })}
            */
          
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
                ////reaction
                if(budy.includes("andresvpn")) {
                return emojitext("🦁")
                }
          }
        } catch (e) {
   let sktext = util.format(e)
   reply(sktext)
   }
          
  
  }
  
  let file = require.resolve(__filename)  
  fs.watchFile(file, () => {  
  fs.unwatchFile(file)  
  console.log(chalk.redBright(`Update ${__filename}`))  
  delete require.cache[file]  
  require(file)  
  })