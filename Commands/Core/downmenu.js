const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "downloadmenu",
    alias: ["downmenu","downloadm"],
    desc: "Download Menu",
    react: "📥",
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
├─── 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ───
├
├・📥 ɪɢᴅʟ
├・📥 ɪɢᴅʟ2
├・📥 ᴘʟᴀʏʟɪꜱᴛ
├・📥 ᴘʟᴀʏ 
├・📥 ʏᴛᴀᴜᴅɪᴏ
├・📥 ʏᴛᴠɪᴅᴇᴏ
├・📥 ʏᴛꜱ
├・📥 ᴛɪᴋᴛᴏᴋ
├・📥 ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
├・📥 ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ
├・📥 ᴛɪᴄᴛᴏᴋᴅᴏᴄ
├・📥 ʏᴛᴅᴏᴄ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}