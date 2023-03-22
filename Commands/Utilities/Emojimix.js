const fetch = require("node-fetch");
const fs = require("fs");

module.exports = {
  name: "emojimix",
  alias: ["combine", "emoji_kitchen", "emix"],
  desc: "To combine two emojis and get a new image",
  category: "utilities",
  usage: `emoji <emoji1>+<emoji2>`,
  react: "✨",
  start: async (Miku, m, { text, prefix, args, reply,pushName }) => {
    if (!args[0]) throw `Example : ${prefix + command} 😅+🤔`
    let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
    for (let res of anumix2.results) {
        let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: packname, author: author, categories: res.tags })
        await fs.unlinkSync(encmedia)
    }
  },
};
