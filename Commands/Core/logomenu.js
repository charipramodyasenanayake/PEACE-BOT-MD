const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "logomenu",
    alias: ["lgmenu","logom"],
    desc: "Logo Menu",
    react: "🃏",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Media/PEACEMD.jpg')
        let txt = `
╔⏤⏤⏤⏤⏤⏤⏤⏤⏤╗
  ＰＥＡＣＥ ＭＤ  
╚⏤⏤⏤⏤⏤⏤⏤⏤⏤╝
├ 
├・ ✌️ PEACE, ${pushName}
├ 
├─── 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 ───
├
├・🃏 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ, 
├・🃏 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
├・🃏 ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
├・🃏 ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ, 
├・🃏 ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, 
├・🃏 ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・🃏 ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ, 
├・🃏 ᴅᴇᴇᴘꜱᴇᴀ, ᴅᴇᴍᴏɴ, 
├・🃏 ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ, 
├・🃏 ᴄʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3 
├・🃏 ɢʀᴀꜰꜰɪᴛɪ, ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ, 
├・🃏 ᴊᴏᴋᴇʀ, ʟɪᴏɴ , ᴍᴀɢᴍᴀ, 
├・🃏 ᴍᴀᴛʀɪx, ɴᴇᴏɴ, 
├・🃏 ɴᴇᴏɴᴅᴇᴠɪʟ, ɴᴇᴏɴɢʀᴇᴇɴ, 
├・🃏 ɴᴇᴏɴʟɪɢʜᴛ, ᴘᴀᴘᴇʀᴄᴜᴛ, 
├・🃏 ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ, 
├・🃏 ꜱᴄɪꜰɪ, ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・🃏 ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2, 
├・🃏 ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ, ᴡᴀʟʟ,
├・🃏 ᴡᴏʟꜰ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}