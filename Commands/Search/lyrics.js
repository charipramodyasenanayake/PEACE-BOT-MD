const { lyrics, lyricsv2 } = require("@bochilteam/scraper");

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

    const resultlyrics = await lyrics(LyricssearchTerm).catch(
      async (_) => await lyricsv2(LyricssearchTerm)
    );

    let resText = `  *『  PEACE MD Lyrics Search  』*\n\n\n💭 _Search Term:_ *${LyricssearchTerm}*\n\n\n*🍭 Lyrics:* \n\n${resultlyrics.lyrics}\n\n`;

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
