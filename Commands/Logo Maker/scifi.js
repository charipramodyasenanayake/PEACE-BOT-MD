const maker = require('mumaker')

module.exports = {
    name: "scifi",
    alias: ["scifieffect"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}scifi CHARITH*`);
        maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
            `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}