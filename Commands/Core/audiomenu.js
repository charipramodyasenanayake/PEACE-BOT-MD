const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "audiomenu",
    alias: ["audmenu","audiom"],
    desc: "Audio Menu",
    react: "🎧",
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
├─── 𝗔𝗨𝗗𝗜𝗢 𝗠𝗘𝗡𝗨 ───
├
├・🎧 ʙᴀꜱꜱ
├・🎧 ʙʟᴏᴡɴ
├・🎧 ᴅᴇᴇᴘ
├・🎧 ꜰᴀᴛ
├・🎧 ɴɪɢʜᴛᴄᴏʀᴇ
├・🎧 ʀᴇᴠᴇʀꜱᴇ
├・🎧 ʀᴏʙᴏᴛ
├・🎧 ꜱʟᴏᴡ
├・🎧 ꜱᴍᴏᴏᴛʜ
├・🎧 ᴛᴇᴍᴘᴏ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}