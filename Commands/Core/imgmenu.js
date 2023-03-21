const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "imagemenu",
    alias: ["imgmenu","imgm"],
    desc: "Image Menu",
    react: "🖼️",
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
├─── 𝗜𝗠𝗚 𝗠𝗘𝗡𝗨 ───
├
├・🖼️ ʙʟᴜʀ
├・🖼️ ᴄɪʀᴄʟᴇ
├・🖼️ ᴊᴀɪʟ
├・🖼️ ʀᴇᴍᴏᴠᴇʙɢ
├・🖼️ ᴛʀɪɢɢᴇʀ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}