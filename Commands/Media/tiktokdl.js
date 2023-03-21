module.exports = {
    name: "tiktok",
    alias: ["tiktokdl", "ටික්ටොක්"],
    desc: "To download a tiktok video",
    category: "Media",
    usage: `tiktok <song link>`,
    react: "📥",
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

        let buttons = [
            {
              buttonId: `${prefix}tiktokmp3 ${args[0]}`,
              buttonText: { displayText: "🎶 Audio 🎶" },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokmp4 ${args[0]}`,
              buttonText: { displayText: "🎥 Video 🎥" },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdoc ${args[0]}`,
              buttonText: { displayText: "📁 Document 📁" },
              type: 1,
            },
          ];

          let buttonMessage = {
            image: { url: botImage1 },
            caption: `
            *『 PEACE MD Tiktok Downloader 』*
      
*🔗 Video Url :* _${args[0]}_\n\n`,
            footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
            buttons: buttons,
            headerType: 4,
          };
          Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        },
    }