const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "groupmenu",
    alias: ["grpmenu","groupm"],
    desc: "Group Menu",
    react: "🪀",
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
├─── 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ───
├
├・🪀 ᴀᴅᴍɪɴꜱ, ᴀɴɴᴏᴜɴᴄᴇ,
├・🪀 ᴀɴᴛɪʟɪɴᴋɢᴄ, ʙᴏᴛꜱᴡɪᴛᴄʜ, 
├・🪀 ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ, ᴄʜᴀᴛʙᴏᴛɢᴄ, 
├・🪀 ᴅᴇʟᴇᴛᴇ, ᴘʀᴏᴍᴏᴛᴇ, 
├・🪀 ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ, 
├・🪀 ɢʀᴏᴜᴘ, ɢʀᴏᴜᴘɪɴꜰᴏ, 
├・🪀 ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ, 
├・🪀 ɴꜱꜰᴡ, ʀᴇᴍᴏᴠᴇ, 
├・🪀 ʀᴇᴘᴏʀᴛ, ʀᴇᴠᴏᴋᴇ, 
├・🪀 ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ, 
├・🪀 ᴛᴀɢᴀʟʟ, ᴡᴇʟᴄᴏᴍᴇ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}