const axios = require("axios");

module.exports = {
  name: "underwear",
  alias: ["nsfwunderwear"],
  desc: "Hentai picture of waifu with underwear", 
  category: "Nsfw",
  usage: `underwear`,
  react: "🍁",
  start: async (Miku, m, { prefix,NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff= await axios.get(`https://fantox-apis.vercel.app/underwear`)
    let imgURL = buff.data.url
    

    let Button = [
      {
        buttonId: `${prefix}nsfwmenu`,
        buttonText: { displayText: `NSFW Menu` },
        type: 1,
      },
      {
        buttonId: `${prefix}underwear`,
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
