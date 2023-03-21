const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "searchmenu",
    alias: ["srchmenu","serachm"],
    desc: "Search Menu",
    react: "🔎",
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
├─── 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 ───
├
├・🔎 ᴀɴɪᴍᴇ
├・🔎 ɢɪꜰꜱᴇᴀʀᴄʜ
├・🔎 ɢɪᴍᴀɢᴇ
├・🔎 ᴘɪɴᴛᴇʀᴇꜱᴛ
├・🔎 ɢɪᴛʜᴜʙ
├・🔎 ɢᴏᴏɢʟᴇ
├・🔎 ʟʏʀɪᴄꜱ
├・🔎 ʀɪɴɢᴛᴏɴᴇ
├・🔎 ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ
├・🔎 ᴡᴇᴀᴛʜᴇʀ
├・🔎 ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
├
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}