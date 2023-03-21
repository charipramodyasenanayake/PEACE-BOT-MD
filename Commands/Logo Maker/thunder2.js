const maker = require('mumaker')

module.exports = {
    name: "thunder2",
    alias: ["thd2"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}thunder2 CHARITH*`);
        maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}