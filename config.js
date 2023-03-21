require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "94712448370";   // You can Change this number //
}

// -------------------------------------------------------------- //

global.ownernum = ['94712448370']
global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://fantox:xrto71r@cluster0.dnlowts.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `ᴘᴇᴀᴄᴇ ᴍᴅ`;
global.author = process.env.AUTHOR || "ʙʏ ᴄʜᴀʀɪᴛʜ";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "ᴘᴇᴀᴄᴇ ᴍᴅ ʙʏ ᴄʜᴀʀɪᴛʜ",
  useradmin: "Sorry, only *Group Admins* can use this command *peace*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only *CHARITH* can use this command, peace!",
  grouponly: "This command is only made for *Groups*, peace!",
  privateonly: "This command is only made for *Private Chat*, peace!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "ᴘᴇᴀᴄᴇ ʙᴜᴅᴅʏ...\nපොඩ්ඩක් ඉන්න",
  nolink: "Please provide me *link*, peace!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert peace! This is not a NSFW enabled group!",
};

