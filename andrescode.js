
//BASE CREADA POR [@ANDRES-VPN]
//la conexion debe incluir
const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
const { resolve } = require("path");

const { disconnect } = require("process");
const NodeCache = require("node-cache");
const readline = require("readline");
const P = require("pino")
const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/fuctions');   
 
//

let rtx = `
*|===============•*
*|* 𝚄𝚂𝙰 𝙴𝚂𝚃𝙴 𝙲𝙾𝙳𝙸𝙶𝙾 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝚁𝚃𝙴 𝙰:
*|* 𝙴𝚂𝙲𝙰𝙽𝙾𝚁-𝙼𝙳
*|===============•*
*|*
*|* 𝟷. 𝙷𝙰𝚉 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙻𝙾𝚂 𝚃𝚁𝙴𝚂 𝙿𝚄𝙽𝚃𝙾𝚂 𝙴𝙽 𝙻𝙰 𝙿𝙰𝚁𝚃𝙴 𝚂𝚄𝙿𝙴𝚁𝙸𝙾𝚁 𝙳𝙴𝚁𝙴𝙲𝙷𝙰
*|*
*|* 𝟸. 𝙿𝚁𝙴𝙲𝙸𝙾𝙽𝙰 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚆𝙴𝙱
*|*
*|* 𝟹. 𝙷𝙰𝚉 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝚅𝙸𝙽𝙲𝚄𝙻𝙰𝚁 𝙳𝙸𝚂𝙿𝙾𝚂𝙸𝚃𝙸𝚅𝙾 𝙲𝙾𝙽 𝙲𝙾𝙳𝙸𝙶𝙾 𝙳𝙴 𝚃𝙴𝙻𝙴𝙵𝙾𝙽𝙾
*|*
*|* 𝟺. 𝙿𝙴𝙶𝙰 𝙴𝙻 𝙲𝙾𝙳𝙸𝙶𝙾 𝙰 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝙲𝙸𝙾𝙽
*|===============•*
*|* 𝙲𝙾𝙳𝙸𝙶𝙾 𝙲𝚁𝙴𝙰𝙳𝙾 𝙿𝙾𝚁: 
*|* ®𝚂𝙺𝙸𝙳 𝚈 𝙰𝙳𝙰𝙿𝚃𝙰𝙳𝙾 𝙿𝙾𝚁 ®𝙰𝙽𝙳𝚁𝙴𝚂-𝚅𝙿𝙽
*|===============•*
`
 
//creando funcion

const msgRetryCounterCache = new NodeCache();
const usePairingCode = process.argv.includes("--use-pairing-code");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// FUNCION DE INICIO
async function andresbot(sender) {
    const store = makeInMemoryStore({
        logger: P().child({
            level: "debug",
            stream: "store"
        })
    })

    const from = sender.split("@")[0]

    //ruta de sesion
    const{ state, saveCreds} = await useMultiFileAuthState(`./sesion-code/${from}`)
    const{ version } = await fetchLatestBaileysVersion();
    const question = (text) => new Promise((resolve) => rl.question(text, resolve))

    //Baner terminal



     //conexion

     const conn = makeWASocket({

        version,
        logger: P({ level: "silent"}),
        usePairingCode,
        mobile: false,
        browser: ["FireFox (linux)"],
        auth: state,
        msgRetryCounterCache,
        defaultQueryTimeoutMs: undefined,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(message.buttonsMessage || message.listMessage);
            if(requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {}
                            }, ...message
                        }
                    }
                }
            }
            return message;
        }
     });
     
conn.ev.on('messages.upsert', async chatUpdate => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
    chatUpdate.messages.forEach(async (mek) => {
    try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        if (mek.key.id.startsWith('FatihArridho_')) return
        global.numBot4 = conn.user.id.split(":")[0] + "@s.whatsapp.net"
        global.numBot3 = conn.user.id
        require("./escanor")(conn, chatUpdate, mek)
        } catch (e) {
        console.log(e)
        }
       })
    } catch (err) {
        console.log(err)
    }
})


console.log("[ANDRES-VPN]")
if(!conn.authState.creds.registered) {
    let code = await conn.requestPairingCode(from)
    let newcode = code.slice(0, 4) + "-" + code.slice(4);
    conn.sendMessage(sender, { text: `${rtx}` })
    conn.sendMessage(sender, { text: `${newcode}`})
    
}

store.bind(conn.ev)
conn.ev.on("creds.update", saveCreds)
store.bind(conn.ev)
conn.ev.on("chats.set", () => {
    console.log("TIENES CHATS", store.chats.all())
})
conn.ev.on("contacts.set", () => {
    console.log("TIENES CONTACTOS", Object.values(store.contacts))
})
//CONEXIONS UPDATE
conn.ev.on("connection.update", (update) => {
    const{ connection, lastDisconnect} = update
    if (connection == 'connecting') {
        console.log(`
╭┈ ┈ ┈ ┈ ┈ ┈ ┈  ┈ ┈ ┈ ┈ ┈ ┈ ┈╮
┊INICIANDO AGUARDE UN MOMENTO...
╰┈ ┈ ┈ ┈ ┈ ┈ ┈┈  ┈ ┈ ┈ ┈ ┈  ┈╯`)
    } else if(connection === "close") {
        console.clear()
        const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
        console.log("\nCONEXION CERRADA", "INTENTANDO RECONECTAR...", shouldReconnect);
        if(shouldReconnect) {
            andresbot()
        } else if(shouldReconnect == false){
            console.clear()
            let ruta = `./sesion-code/${from}`
            if(fs.existsSync(ruta)) {
                fs.rmdirSync(ruta, {recursive: true})
                console.log(`
╭┈ ┈ ┈ ┈ ┈  ┈ ┈  ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╮
┊SE ELIMINO LA SESION DEL DISPOSITIVO
┊         INICIA NUEVAMENTE
╰┈ ┈ ┈ ┈ ┈  ┈ ┈  ┈ ┈ ┈ ┈ ┈ ┈┈ ┈  ┈╯                
                `)
                andresbot()
            }
       }

    } else if(connection === "open") {
        console.log(`
╭┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╮
┊CONECTADO CON EXITO
╰┈ ┈ ┈ ┈ ┈ ┈ ┈┈ ┈  ┈╯`)
    }
})


 conn.ev.on("messages.update", saveCreds)
}//fin

andresbot(), (error) => console.log("HAY UN ERROR PRESENTE", String(error))

module.exports = { andresbot }