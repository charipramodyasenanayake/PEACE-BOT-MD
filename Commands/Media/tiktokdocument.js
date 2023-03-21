module.exports = {
    name: "tiktokdocument",
    alias: ["tiktokdoc", "ටික්ටොක්doc"],
    desc: "To download a tiktok audio as document",
    category: "Media",
    usage: `tiktokdoc <link>`,
    react: "📁",
    start: async (Miku, m, { text, prefix, args, mime }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a Tiktok Video link !` },
          { quoted: m }
        );

        if(!args[0].includes("tiktok")){
          return m.reply("Please provide a valid Tiktok link!")
        }

        require('../../lib/tiktokScrapper').Tiktok(args[0]).then( data => {
        Miku.sendMessage(m.from, { document: { url: data.audio },mimetype: "audio/mpeg",fileName: `Downloaded by PEACE MD.mp3`,},{ quoted: m })
        })
        },
    }