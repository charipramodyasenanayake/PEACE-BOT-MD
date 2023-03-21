const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "toolmenu",
    alias: ["tlmenu","toolm"],
    desc: "Tool Menu",
    react: "🧰",
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
├─── 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨 ───
├
├・🧰 ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
├・🧰 ꜱᴀʏ 
├・🧰 sᴀʏsɪɴʜᴀʟᴀ
├・🧰 ᴜᴅɪᴄᴛɪᴏɴᴀʀʏ
├・🧰 ᴛᴏᴀᴜᴅɪᴏ
├・🧰 ᴛᴏᴍᴘ3
├・🧰 ᴛᴏᴍᴘ4
├・🧰 ᴛᴏᴜʀʟ
├・🧰 ᴛᴇxᴛᴅᴇꜱɪɢɴ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}