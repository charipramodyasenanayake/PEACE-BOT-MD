const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "stickermenu",
    alias: ["stickmenu","stickerm"],
    desc: "Sticker Menu",
    react: "🪄",
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
├─── 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 ───
├
├・🪄 ᴇᴍɪx
├・🪄 Q / Qᴜᴏᴛᴇ
├・🪄 ꜱᴛɪᴄᴋᴇʀ
├・🪄 ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ 
├・🪄 ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}