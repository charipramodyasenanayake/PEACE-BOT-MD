const axios = require("axios");

module.exports = {
  name: "greenhair",
  alias: ["nsfwgreenhair"],
  desc: "Hentai picture of waifu with green hair", 
  category: "Nsfw",
  usage: `greenhair`,
  react: "🍁",
  start: async (Miku, m, { prefix,NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff= await axios.get(`https://fantox-apis.vercel.app/greenhair`)
    let imgURL = buff.data.url
    

    let Button = [
      {
        buttonId: `${prefix}nsfwmenu`,
        buttonText: { displayText: `NSFW Menu` },
        type: 1,
      },
      {
        buttonId: `${prefix}greenhair`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let bmffg = {
      image: {url: imgURL},
      caption: `PEACE MD BY CHARITH`,
      footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
      buttons: Button,
      headerType: 4,
    };
    
    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
