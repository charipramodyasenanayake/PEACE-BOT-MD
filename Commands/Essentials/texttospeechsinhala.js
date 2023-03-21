const ttt = require("google-tts-api");

module.exports = {
  name: "saysinhala",
  alias: ["speaksi", "saysi", "කියන්න"],
  desc: "Say somethong using bot in sinhala accent.",
  usage: "saysinhala <text>",
  react: "🎙️",
  category: "Essentials",
  start: async (Miku, m, { pushName, prefix, args, text, mime }) => {
    if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ""}`;
    } else if (args[0]) {
      message = args.join(" ");
    } else {
      message = `${pushName}, කියන්න ඕනෙ දේ type කරන්න !`;
    }

    const texttospeechurl = ttt.getAudioUrl(message, {
      lang: "hi",
      slow: false,
      host: "https://translate.google.com",
    });

    Miku.sendMessage(
      m.from,
      { audio: { url: texttospeechurl }, mimetype: "audio/mpeg" },
      { quoted: m }
    ).catch((e) => {
      m.reply(`An error Occurd !`);
    });
  },
};
