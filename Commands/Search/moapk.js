const yogipw = require("tod-api")
module.exports = {
  name: "mod",
  alias: ["modapk"],
  desc: "To get an mod apk",
  category: "Search",
  usage: `apk <search term>`,
  react: "🔎",
  start: async (Miku, m, { text, prefix, args }) => {
      if (!args.join(" "))
        m.from,
        { text: `Example : ${prefix + command} Kinemaster` },
        { quoted: m }

      yogipw.happymod(args.join(" ")).then(async(res) => {
      teks = '「 PEACE MD Mod Search  」'
      for (let i of res) {
      teks += `\n\n${i.name}\n`
      teks += `${i.link}`
      }
      let buttons = [
      {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
      ]
      let buttonMessage = {
      image: {url:res[0].icon},
      caption: teks,
      footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
      buttons: buttons,
      headerType: 4
      }
      Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
      })
      }
  }
