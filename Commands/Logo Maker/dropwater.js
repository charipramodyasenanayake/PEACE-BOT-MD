const maker = require('mumaker')

module.exports = {
    name: "dropwater",
    alias: ["dw"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}dropwater CHARITH*`);
        maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
            `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}