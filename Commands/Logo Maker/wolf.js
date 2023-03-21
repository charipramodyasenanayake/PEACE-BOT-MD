const maker = require('mumaker')

module.exports = {
    name: "wolf",
    alias: ["wolfstyle","wolflogo"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text.includes(";")) return m.reply(`Example: *${prefix}wolf CHARITH ; Peace MD*`);
        teks1 = text.split(";")[0]
        teks2 = text.split(";")[1]
        maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
            `${teks1}`,`${teks2}`]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}