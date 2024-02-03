
const fs = require("fs")

//global.prefixes = ["/", ".", "#", "*", ",", "?", "&", "+", "-", "∆", "|", "!", "•", "~", "×", "÷", "§", "°"] // modifica el prefijo

global.prefixes = ["."] // modifica el prefijo




global.owner = [
["573043603261", "andres-vpn", true],
["573007741567", "andres-vpn-bot", true]
]

global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.chatgpt = fs.readFileSync('./media/chatgpt.jpg')
global.query = fs.readFileSync('./media/query.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.hentai = fs.readFileSync('./media/hentai.jpg')
global.simi = fs.readFileSync('./media/simi.jpeg')
global.success = fs.readFileSync('./media/unused.jpg')
global.wagrupo = 'https://chat.whatsapp.com/DhqAUciMtKO7l1o9cu2Kcu'
global.script = 'https://github.com/andresvpn/ESCANOR-MD-BOT.git'
global.ownername = `andres-vpn`
global.yt = '#'
global.github = '@andresvpn'
global.location = 'mexico'

global.mess = {
admin: "𝚗𝚘 𝚎𝚛𝚎𝚜 𝚊𝚍𝚖𝚒𝚗",
owner: "𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚘𝚠𝚗𝚎𝚛𝚜",
group: "𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚐𝚛𝚞𝚙𝚘𝚜",
priv: "𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚎𝚜 𝚜𝚘𝚕𝚘 𝚙𝚊𝚛𝚊 𝚖𝚎𝚗𝚜𝚊𝚓𝚎𝚜 𝚙𝚛𝚒𝚟𝚊𝚍𝚘𝚜",
botAdmin: " 𝚎𝚕 𝚋𝚘𝚝 𝚗𝚎𝚜𝚎𝚌𝚒𝚝𝚊 𝚜𝚎𝚛 𝚊𝚍𝚖𝚒𝚗 𝚙𝚊𝚛𝚊 𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘",
wait: "𝚙𝚘𝚛 𝚏𝚊𝚟𝚘𝚛, 𝚎𝚜𝚙𝚎𝚛𝚊..."
}

global.botname = "𝙴𝚂𝙲𝙰𝙽𝙾𝚁-𝙼𝙳"
global.packname = "𝙴𝚂𝙲𝙰𝙽𝙾𝚁-𝙼𝙳 ❥"
global.author = "andres-vpn"
global.vs = '2.5.0'
global.place = 'America/Bogota' // Aquí puede encontrar su ubicación https://momentjs.com/timezone/
global.language = 'es' // Aquí puede encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419

global.multiplier = 90

global.blockList = []  
global.premium = []  



global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');
global.APIs = { 
   xteam: 'https://api.xteam.xyz', 
   dzx: 'https://api.dhamzxploit.my.id', 
   lol: 'https://api.lolhuman.xyz', 
   neoxr: 'https://api.neoxr.my.id', 
   zenzapis: 'https://api.zahwazein.xyz', 
   akuari: 'https://api.akuari.my.id', 
   akuari2: 'https://apimu.my.id', 
   fgmods: 'https://api-fgmods.ddns.net', 
   botcahx: 'https://api.botcahx.biz.id', 
   ibeng: 'https://api.ibeng.tech/docs', 
   github: 'https://api.github.com',
   rose: 'https://api.itsrose.site', 
   popcat: 'https://api.popcat.xyz', 
   xcoders: 'https://api-xcoders.site', 
   vihangayt: 'https://vihangayt.me', 
   erdwpe: 'https://api.erdwpe.com', 
   xyroinee: 'https://api.xyroinee.xyz', 
   nekobot: 'https://nekobot.xyz' 
 }, 
 global.APIKeys = { 
   'https://api.xteam.xyz': `${keysxteam}`, 
   'https://api.lolhuman.xyz': 'GataDios', 
   'https://api.neoxr.my.id': `${keysneoxr}`, 
   'https://api.zahwazein.xyz': `${keysxxx}`, 
   'https://api-fgmods.ddns.net': 'fg-dylux', 
   'https://api.botcahx.biz.id': 'Admin', 
   'https://api.ibeng.tech/docs': 'tamvan', 
   'https://api.itsrose.site': 'Rs-Zeltoria', 
   'https://api-xcoders.site': 'Frieren', 
   'https://api.xyroinee.xyz': 'uwgflzFEh6' 
 }; 
 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update'${__filename}'`)
delete require.cache[file]
require(file)
})
