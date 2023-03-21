const yts = require("youtube-yts");

module.exports = {
  name: "youtubesearch",
  alias: ["yts", "යුටියුබ්"],
  desc: "To search a video on YouTube",
  category: "Search",
  usage: `yts <search term>`,
  react: "🔎",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a search term !` },
        { quoted: m }
      );
    let search = await yts(text);
    let num = 1;
    let sections = [];
    for (let i of search.all) {
      const list = {
        title: `Reseult: ${num++}`,
        rows: [
          {
            title: `${i.title}`,
            rowId: `${prefix}play ${i.title}`,
            description: `Duration: ${i.timestamp}`,
          },
        ],
      };
      sections.push(list);
    }
    var txt = `*『 PEACE MD YouTube Search  』*\n\n_🔎 Search Term:_ *${args.join(
      " "
    )}*\n\n*📌 Total Results:* *${search.all.length}*\n`;

    let buttonMessage = {
      text: txt,
      footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
      buttonText: "ඕනෙ එක තෝරන්න",
      sections,
    };

    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
