const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "developer",
    alias: ["dev","dev","developer"],
    desc: "Developer of bot.",
    react: "🧑‍💻",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Img/Charith.png')
        let txt = `⌨️ *PEACE MD DEVELOPER* ⌨️\n\n✌️ Charith Pramodya Senanayake\n😋 +16\n🎂 07/29\n📗 Learning... \n💙💛❤️\n`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}