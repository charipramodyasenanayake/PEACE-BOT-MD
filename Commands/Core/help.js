module.exports = {
  name: "help",
  alias: ["menu", "list", "මෙනු", "මෙනුව"],
  desc: "Gives all bot commands list",
  react: "📃",
  category: "Core",
  start: async (
    Miku,
    m,
    { prefix, pushName, NSFWstatus, args, commands, text }
  ) => {
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `🍁Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`);
      if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `💡Example : ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}menu`,
          buttonText: { displayText: `📃 MENU 📃` },
          type: 1,
        },
      ];
      let buth = {
        text: `ℹ️Command Info\n\n${data.join("\n")}`,
        footer: `${botName}`,
        buttons: buttonss,
        headerType: 1,
      };
      return Miku.sendMessage(m.from, buth, { quoted: m });
    } else {
      const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        let timestampe = speed();
        let latensie = speed() - timestampe
const pstime = moment.tz('Asia/Colombo').format('HH:mm:ss')
const psdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')  
    if(time2 < "23:59:00"){
var ucapanWaktu = `😴 Good Night `
    }
    if(time2 < "17:00:00"){
var ucapanWaktu = `☕ Good Evening `
    }
    if(time2 < "18:00:00"){
var ucapanWaktu = `☕ Good Evening `
    }
    if(time2 < "15:00:00"){
var ucapanWaktu = `☀️ Good Afternoon `
    }
    if(time2 < "12:00:00"){
var ucapanWaktu = `⛅ Good Morning `
    }
    if(time2 < "05:00:00"){
var ucapanWaktu = `⛅ Good Morning `
    } 


      let textHelpMenu = `
╔⏤⏤⏤⏤⏤⏤⏤⏤⏤╗
  ＰＥＡＣＥ ＭＤ  
╚⏤⏤⏤⏤⏤⏤⏤⏤⏤╝
├
├・✌️ PEACE, ${pushName}
├・
├・${ucapanWaktu}
├・🐌 SPEED ${latensie.toFixed(4)} ms
├・🏃🏻 RUNTIME ${uptime()}
├・👨‍💻 OWNER CHARITH PRAMODYA
├・🌼 PREFIX '.'
├・⏰ TIME ${pstime}
├・🗓️ DATE ${psdate}
├
├───☮️ *MAIN MENU* ☮️───
├
├・💫 PEACE MENU
├・ ${ᴘʀᴇғɪx}ᴘᴇᴀᴄᴇᴍᴇɴᴜ
├・💫 AUDIO MENU
├・ ${ᴘʀᴇғɪx}ᴀᴜᴅᴍᴇɴᴜ
├・💫 DOWNLOAD MENU
├・ ${ᴘʀᴇғɪx}ᴅᴏᴡɴᴍᴇɴᴜ
├・💫 SEARCH MENU
├・ ${ᴘʀᴇғɪx}sᴇᴀʀᴄʜᴍᴇɴᴜ
├・💫 STICKER MENU
├・ ${ᴘʀᴇғɪx}sᴛɪᴄᴋᴍᴇɴᴜ
├・💫 TOOL MENU
├・ ${ᴘʀᴇғɪx}ᴛᴏᴏʟᴍᴇɴᴜ
├・💫 LOGO MENU
├・ ${ᴘʀᴇғɪx}ʟᴏɢᴏᴍᴇɴᴜ
├・💫 GROUP MENU
├・ ${ᴘʀᴇғɪx}ɢʀᴏᴜᴘᴍᴇɴᴜ
├・💫 IMAGE MENU
├・ ${ᴘʀᴇғɪx}ɪᴍɢᴍᴇɴᴜ
├
├・😉 THANKS FOR USING PEACE MD
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤╝\n\n\n`;

      textHelpMenu += `💭 type " *${prefix}Command name*".\n🧩 Connect With Developer : https://wa.me/94712448370?text=PEACE%20✌️.\n🙏 Thanks For using *PEACE MD*`;

      let buttons = [
        {
          buttonId: `${prefix}owner`,
          buttonText: { displayText: "Bot Owner" },
          type: 1,
        },
        {
          buttonId: `${prefix}dev`,
          buttonText: { displayText: "Developer" },
          type: 1,
        }
      ];
      let buttonMessage = {
        video: { url: botVideo },
        gifPlayback: true,
        caption: textHelpMenu,
        buttons: buttons,
        footer: `ᴘᴇᴀᴄᴇ ᴍᴅ`,
        headerType: 4,
      };

      await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
    }
  },
};
