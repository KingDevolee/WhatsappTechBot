//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348057627946";
global.owner = process.env.OWNER_NUMBER || "2348057627946";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BIVU1XdnFiUjFNMXNUUmVGZndmTkk1MmFaMDRoMmt4SldrVG53d2NVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW1Ic0JkVjJRWE1ZR0hkU2FPdk56eEhUa0dZclNPTW5SUlIybGlLdkR6az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRTNaZm5zKzZRM1NSaGR5cWNGc2UybkpoZnB3OW5yclY3ekppWXpteDNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5UEhXenZqcVNZbm9WenpGMVBPcTg4K0VNSzlpTi9yMkM1UVNIVHNzeUdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNMWdUeFk2TnNkVkRFbWRGMkphVHJ0Y0Y1VzBwMEx2RzdvQS81N2xTV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJEYkRuYThndmRRbDFVWVgzRHdROGtud3plbEU1V2tTeDAzanowS2Mzd2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Z3dGdVSjAzMklublJRVGhqNm55VXZZc05RQ25lOFNva0xmWFdKQVlYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2l5Z1h3Q1hCSnBva1VLWXQyS2tXSTJxOGFIK0Nic3VKRVl0a2NOUUd3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVVaWFkcHkwQ1h2UFdKKzh0K1hidXNHMHNwSzRhNzl5Y2gxZmp1MDhDV1ROdHFpS3p0Sm9CdUV5dVhDM2YxTWZQWXVpK2VBWm5hZzFNSkVDa0NUbUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IjhwODU0VTJ1UE1yaFBFMW5XYXZOMldFaE5WazJCZlZzL2xyeEhaR05lcTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVGUEZYaFdzU2FpNXhtV2hDZVl1VGciLCJwaG9uZUlkIjoiMDk0NjUyZjctYjg1ZC00Y2IyLTg2YmItZmM0YTAzMDAxNmM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUydUJ6TGxUTUk5aWN2M2s5dms1eXNUUzBFMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEOHNXZEJuV2NjNUY1eWhTWTJNd2p5UWJXbGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1ZMOEZZMkgiLCJtZSI6eyJpZCI6IjIzNDgwNTc2Mjc5NDY6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiOWphbGF1Z2ggdHYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052S2c0TURFUERtMjdzR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldQVFhaWUZkbDBmOSt1MDg4WVE0S0dIWUQrd1dvL05TKzFjYzJnaEpHbUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpUa1I0Z1NacGhOSmRVNWk1Y1cwWThiSHZIeWlwdXROM3BLZ2hVYzJaMEw1SGFLWCtxdW9ZTVFXUXVPWFR6ckJ3MXBFN0VOMy9RUmFsS0xjQUNhekN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1dHgzVW4vREFMQmMyem15Vm9Ba25waWk5SS82NGtPYzI4TTNRYmRBek41VllDdjVVdld0TXorazdyRGFGU0xqQ0lYVHRKekF4a2dPT0xjdGUzZHRCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNTc2Mjc5NDY6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmowMTJXQlhaZEgvZnJ0UFBHRU9DaGgyQS9zRnFQelV2dFhITm9JU1JwaCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTg0ODgzMH0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
