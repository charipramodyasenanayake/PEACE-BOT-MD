const axios = require("axios");

module.exports = {
  name: "pantypull",
  alias: ["nsfwpantypull"],
  desc: "Hentai picture of waifu with pantypull", 
  category: "Nsfw",
  usage: `pantypull`,
  react: "🍁",
  start: async (Miku, m, { prefix,NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff= await axios.get(`https://fantox-apis.vercel.app/pantypull`)
    let imgURL = buff.data.url
    

    let Button = [
      {
        buttonId: `${prefix}nsfwmenu`,
        buttonText: { displayText: `NSFW Menu` },
        type: 1,
      },
      {
        buttonId: `${prefix}pantypull`,
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
