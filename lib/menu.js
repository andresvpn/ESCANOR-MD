const fs = require("fs")
const { smsg } = require("./fuctions.js")
const path = require("path")
const chalk = require("chalk");
const { listJadibot } = require('../serbot.js')

const skmenu = (skid, prefix, pushname, m) => {
let user = global.db.data.users[m.sender]
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

return ` 
╭════════════════════⪩
┃           女⃟⃟女MENU❈⃟き       
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃           © *SKID*®            
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   👤 Nombre: ${pushname}       
┃   🌍 Modo: ${skid.public ? 'publico' : 'privado'}
┃   🌀 Rol: ${user.role}          
┃   ✨ Exp: ${user.exp}           
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   🤖 *SERBOT* 🤖                
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}serbot 
┃   ⪩ ${prefix}sercode
┃   ⪩ ${prefix}bots              
┃   ⪩ ${prefix}public (modo publico)
┃   ⪩ ${prefix}self (modo privado)
┃   ⪩ ${prefix}enable antillamadas
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   🛠️ *HERRAMIENTAS* 🛠️         
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}nowa              
┃   ⪩ ${prefix}ia                
┃   ⪩ ${prefix}ofuscar  
┃   ⪩ ${prefix}toqr
┃   ⪩ ${prefix}inspeccionar   
┃   ⪩ ${prefix}qc          
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   😂 *FUN* 😂                  
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}fake              
┃   ⪩ ${prefix}simi           
┃   ⪩ ${prefix}gay @tag
┃   ⪩ ${prefix}horny @tag
┃   ⪩ ${prefix}simp @tag
┃   ⪩ ${prefix}dvd @tag
┃   ⪩ ${prefix}comment @tag   
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   🎤 *MODIFICAR AUDIO* 🎤      
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}bass              
┃   ⪩ ${prefix}blown             
┃   ⪩ ${prefix}deep              
┃   ⪩ ${prefix}earrape           
┃   ⪩ ${prefix}fast              
┃   ⪩ ${prefix}fat               
┃   ⪩ ${prefix}nightcore         
┃   ⪩ ${prefix}reverse           
┃   ⪩ ${prefix}robot             
┃   ⪩ ${prefix}slow              
┃   ⪩ ${prefix}smooth            
┃   ⪩ ${prefix}squirrel          
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   👻 *ADMIN* 👻                
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}ban               
┃   ⪩ ${prefix}promote           
┃   ⪩ ${prefix}demote            
┃   ⪩ ${prefix}del
┃   ⪩ ${prefix}kick              
┃   ⪩ ${prefix}grupo abrir       
┃   ⪩ ${prefix}grupo cerrar      
┃   ⪩ ${prefix}tagall            
┃   ⪩ ${prefix}hidetag           
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   📷 *STIKERS* 📷              
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}sticker           
┃   ⪩ ${prefix}s                 
┃   ⪩ ${prefix}attp              
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   🎤 *AUDIOS* 🎤              
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ shitpost                 
┃   ⪩ uwu                      
┃   ⪩ hola                     
┃   ⪩ a                        
┃   ⪩ viernes                   
┃   ⪩ murio el grupo            
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⚙️ *ENABLE* ⚙️              
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}enable antilink  
┃   ⪩ ${prefix}enable antiarabes
┃   ⪩ ${prefix}enable antifake  
┃   ⪩ ${prefix}enable detect    
┃   ⪩ ${prefix}enable welcome   
┃   ⪩ ${prefix}enable antinsfw  
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⚙️ *DISABLE* ⚙️              
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}disable antilink 
┃   ⪩ ${prefix}disable antiarabes
┃   ⪩ ${prefix}disable antifake 
┃   ⪩ ${prefix}disable detect   
┃   ⪩ ${prefix}disable welcome  
┃   ⪩ ${prefix}disable antinsfw 
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   📥 *DESCARGAS* 📥            
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ⪩ ${prefix}play2 + [link]   
┃   ⪩ ${prefix}play + [nombre | link]
┃   ⪩ ${prefix}tiktok + [link]
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   🔍 *BUSQUEDA* 🔍
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃§ *Para descargas*
┃
┃ ⪩ ${prefix}yts + [nombre]
┃ ⪩ ${prefix}pinterest + [nombre]
┃ ⪩ ${prefix}lyrics + [texto]
┃
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   📝 *LOGOS* 📝
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃ ⪩ ${prefix}blackpink [texto]
┃ ⪩ ${prefix}neon [texto]
┃ ⪩ ${prefix}greenneon [texto]
┃ ⪩ ${prefix}advanceglow [texto]
┃ ⪩ ${prefix}advanceglow [texto]
┃ ⪩ ${prefix}thunder [texto]
┃ ⪩ ${prefix}horrorblood [texto]
┃ ⪩ ${prefix}summersand [texto]
┃ ⪩ ${prefix}luxury [texto]
┃ ⪩ ${prefix}icecold [texto]
┃ ⪩ ${prefix}breakwall [texto]
┃ ⪩ ${prefix}roadwarning [texto]
┃ ⪩ ${prefix}box3d [texto]
┃ ⪩ ${prefix}strawberry [texto]
┃ ⪩ ${prefix}toxic [texto]
┃ ⪩ ${prefix}bokeh [texto]
┃ ⪩ ${prefix}natureleaves [texto]
┃ ⪩ ${prefix}fireworksparkle [texto]
┃ ⪩ ${prefix}jokerlogo [texto]
┃ ⪩ ${prefix}halloween [texto]
┃ ⪩ ${prefix}bloodfrosted [texto]
┃ ⪩ ${prefix}newyearcard [texto]
┃ ⪩ ${prefix}deluxesilver [texto]
┃ ⪩ ${prefix}minion [texto]
┃ ⪩ ${prefix}text1917 [texto]
┃ ⪩ ${prefix}holographic [texto]
┃ ⪩ ${prefix}neonlight [texto]
┃ ⪩ ${prefix}metaldark [texto]
┃ ⪩ ${prefix}sandengraved [texto]
┃ ⪩ ${prefix}sandsummer [texto]
┃ ⪩ ${prefix}sandwriting [texto]
┃ ⪩ ${prefix}futureneon [texto]
┃ ⪩ ${prefix}carvedwood [texto]
┃ ⪩ ${prefix}harrypotter [texto]
┃ ⪩ ${prefix}flamming [texto]
┃ ⪩ ${prefix}fallleaves [texto]
┃ ⪩ ${prefix}glowingneon [texto]
┃ ⪩ ${prefix}letterleaves [texto]
┃ ⪩ ${prefix}summernature [texto]    
┃ ⪩ ${prefix}golderrose [texto]
┃ ⪩ ${prefix}underwater [texto]
┃ ⪩ ${prefix}nature3d [texto]
┃ ⪩ ${prefix}wolfmetal [texto]
┃ ⪩ ${prefix}summer3d [texto]
┃ ⪩ ${prefix}woodenboard [texto]
┃ ⪩ ${prefix}woodheart [texto]  
┃ ⪩ ${prefix}coffe [texto]
┃ ⪩ ${prefix}love [texto]
┃ ⪩ ${prefix}undergrass [texto]
┃ ⪩ ${prefix}lovemessage [texto]
┃ ⪩ ${prefix}burnpaper [texto]
┃ ⪩ ${prefix}smoke [texto]
┃ ⪩ ${prefix}romance [texto]
┃ ⪩ ${prefix}cup1 [texto]
┃ ⪩ ${prefix}cup [texto]
┃ ⪩ ${prefix}shadow [texto]
┃ ⪩ ${prefix}freefire [texto]
┃ ⪩ ${prefix}silverplaybutton [texto]
┃ ⪩ ${prefix}goldplaybutton [texto]
┃ ⪩ ${prefix}birthdayday [texto]
┃ ⪩ ${prefix}snow3d [texto]
┃ ⪩ ${prefix}galaxybat [texto]
┃ ⪩ ${prefix}writegalacy [texto]
┃ ⪩ ${prefix}textbyname [texto]
┃ ⪩ ${prefix}wooden3d [texto]
┃ ⪩ ${prefix}starsnight [texto]
┃ ⪩ ${prefix}textcake [texto]
┃ ⪩ ${prefix}glittergold [texto]
┃ ⪩ ${prefix}noeltext [texto]
┃ ⪩ ${prefix}metallogo [texto]
┃ ⪩ ${prefix}greenbush [texto]
┃ ⪩ ${prefix}glossychrome [texto]
┃ ⪩ ${prefix}greenneon [texto]
┃ ⪩ ${prefix}hologram3d [texto]
┃ ⪩ ${prefix}galaxystyle [texto]
┃ ⪩ ${prefix}birthdaycake [texto]
┃ ⪩ ${prefix}heartshaped [texto]
┃ ⪩ ${prefix}royaltext [texto]
┃ ⪩ ${prefix}puppycute [texto]
┃ ⪩ ${prefix}beautifulflower [texto]
┃ ⪩ ${prefix}lighttext [texto]
┃ ⪩ ${prefix}galaxywallpaper [texto]
┃ ⪩ ${prefix}luxurygold [texto]
┃ ⪩ ${prefix}watercolor [texto]
┃ ⪩ ${prefix}multicolor3d [texto]
┃ ⪩ ${prefix}wetglass [texto]
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   🔞 *NSFW* 🔞
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃§ *activa estos comandos con enable*
┃
┃ ⪩ ${prefix}lewd
┃ ⪩ ${prefix}ass
┃ ⪩ ${prefix}feet
┃ ⪩ ${prefix}gasm
┃ ⪩ ${prefix}feed
┃ ⪩ ${prefix}anal
┃ ⪩ ${prefix}kiss
┃ ⪩ ${prefix}tits
┃ ⪩ ${prefix}holo
┃ ⪩ ${prefix}erok
┃ ⪩ ${prefix}smug
┃ ⪩ ${prefix}waifu
┃ ⪩ ${prefix}pussy
┃ ⪩ ${prefix}blowjob
┃ ⪩ ${prefix}wallpaper
┃
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   ∆ *OTROS* ∆ 
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃§ ${botname}
┃
┃ ⪩ ${prefix}estado
┃ ⪩ ${prefix}ping
┃ ⪩ ${prefix}script
┃
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃   👑 *OWNER* 👑 
┠─╼━━━━━━━━⊱❖⊰━━━━━━━─┨
┃§ ${botname}
┃
┃ ⪩ ${prefix}getcase
┃ ⪩ ${prefix}sendcase
┃ ⪩ ${prefix}enable jadibot
┃ ⪩ ${prefix}update
┃ ⪩ $
┃ ⪩ >
┃ ⪩ => 
┃
╰══════════════⪨`
}

module.exports = { skmenu }

 let file = require.resolve(__filename)  
  fs.watchFile(file, () => {  
  fs.unwatchFile(file)  
  console.log(chalk.redBright(`Update ${__filename}`))  
  delete require.cache[file]  
  require(file)  
  })