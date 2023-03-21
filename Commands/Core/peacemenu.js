const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "peacemenu",
    alias: ["psmenu","peacem"],
    desc: "Peace Menu",
    react: "📃",
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
├─── 𝗣𝗘𝗔𝗖𝗘 𝗠𝗘𝗡𝗨 ───
├
├・📃 ᴘᴇᴀᴄᴇ
├・📃 ᴍᴇɴᴜ
├・📃 ᴅᴇᴠ
├・📃 sᴛᴀʟᴋ
├・📃 ᴛᴀxᴛᴍᴇ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}