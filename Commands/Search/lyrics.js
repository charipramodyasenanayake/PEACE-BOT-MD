const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  name: "lyrics",
  alias: ["songlysics"],
  desc: "To get any song lyrics",
  category: "Search",
  usage: `lyrics <song name>`,
  react: "🔎",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var LyricssearchTerm = args.join(" ");

    const searchQuery = (LyricssearchTerm);
    axios.get(`https://sinhalasonglyrics.com/?s=${LyricssearchTerm}&submit=Search`)
  .then(response => {
    const $ = cheerio.load(response.data);
    const firstResult = $('.entry-title > a').first();
    const songTitle = firstResult.text().trim();
  })

  axios.get(songLink)
  .then(response => {
    const $ = cheerio.load(response.data);
    const lyrics = $('.entry-content > p').text().trim();})

    let resText = `  *『  PEACE MD Lyrics Search  』*\n\n\n💭 _Search Term:_ *${LyricssearchTerm}*\n🔰 Song Title: ${songTitle}\n\n*💭 Lyrics: * \n\n${lyrics}\n\n`;

    await Miku.sendMessage(
      m.from,
      {
        image: {
          url: botImage3,
        },
        caption: resText,
      },
      { quoted: m }
    );
  },
};
