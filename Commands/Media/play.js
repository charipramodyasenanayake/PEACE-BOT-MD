const yts = require("youtube-yts");

module.exports = {
  name: "play",
  alias: ["ytplay", "song", "සිංදුව", "සින්දුව"],
  desc: "To play a song from youtube",
  category: "Media",
  usage: `play <song name>`,
  react: "📥",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a song name to play !` },
        { quoted: m }
      );
    const songSerachTerm = args.join(" ");
    const songInfo = await yts(songSerachTerm);
    const song = songInfo.videos[0];
    let buttons = [
      {
        buttonId: `${prefix}ytad ${song.url}`,
        buttonText: { displayText: "🎶 Audio 🎶" },
        type: 1,
      },
      {
        buttonId: `${prefix}ytvd ${song.url}`,
        buttonText: { displayText: "🎥 Video 🎥" },
        type: 1,
      },
      {
        buttonId: `${prefix}ytdoc ${song.url}`,
        buttonText: { displayText: "📁 Document 📁" },
        type: 1,
      },
    ];
    let buttonMessage = {
      image: { url: song.thumbnail },
      caption: `
           *『 PEACE MD Youtube Player 』*


🔰 *Song name :* _${song.title}_

⌛ *Duration :* _${song.timestamp}_

📅 *Uploaded :* _${song.ago}_

🎯 *Channel :* _${song.author.name}_

🔗 *Url :* _${song.url}_\n\n`,
      footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
      buttons: buttons,
      headerType: 4,
    };
    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
