const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Bot-Created-By-Snape" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923142212383";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_34_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzNFdSa3orWGZNQjZvSnZKOTM3UTVjTDRvQkZKUmVXYzMyaEJ4ZnZ0Yi9FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3X0ZuRVJ1TlFTNnJqOTJwbjRVUk13XCIsXG4gIFwicGhvbmVJZFwiOiBcImE5NDg1MGMwLTMzYmEtNDU0NS1iZjQ1LWM0MDM2MTNlMTFhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICA0OCxcbiAgICAgIDE2OSxcbiAgICAgIDI3LFxuICAgICAgNyxcbiAgICAgIDIxNixcbiAgICAgIDExNyxcbiAgICAgIDIyNSxcbiAgICAgIDE2NixcbiAgICAgIDI1MyxcbiAgICAgIDE0NSxcbiAgICAgIDE1NixcbiAgICAgIDg3LFxuICAgICAgMTk3LFxuICAgICAgMjQ1LFxuICAgICAgMTMwLFxuICAgICAgMjUzLFxuICAgICAgNjQsXG4gICAgICAzNyxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICA4LFxuICAgICAgMTUxLFxuICAgICAgMTQ4LFxuICAgICAgMTY0LFxuICAgICAgNjYsXG4gICAgICAyMDQsXG4gICAgICAyNTIsXG4gICAgICAxNzIsXG4gICAgICAyMjQsXG4gICAgICAxMTEsXG4gICAgICAyMDIsXG4gICAgICA3MixcbiAgICAgIDExLFxuICAgICAgMjI5LFxuICAgICAgMzQsXG4gICAgICAxMTIsXG4gICAgICAxMzksXG4gICAgICAxNzIsXG4gICAgICAxOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkhCUVpIU0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0MjIxMjM4Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU25hcGVcIixcbiAgICBcImxpZFwiOiBcIjE0NjQ2MzA5OTIwMzcyODo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uWjRvMENFTEdVNTdNR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNFhwYncreXEvM3JHaTI4bEpJU0tPOENzdnEyS1hjMVpKVTUwVnJOSmJWdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYNmhBRHd1VTQ3bWJMMFJ3UzZ5MTY2TUtuSHNETW9zY1dySjVHRVR4Q20vTFU5NjgxTFU0bmhwYkJnYU1uMDFqWExxY3oreEtCdVZGajA1SFFEN1FDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2dmZEWXBiY1EwT0FoYmxQRjdZNnM5QjB6MUpOMTZ5UXNwZFNPWHFwOGdXZGpMUi9JQm5SUmhmbmR6WjNjWTlPU2J0b0pOMWFaUWlwS05rYm9ldDNoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNDIyMTIzODM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNTc2NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCcm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJyby5qc29uIjogIntcImtleURhdGFcIjpcIk9iblZDOFYrckJMbUZZajFzci85Q3N2UjJMTjdSYnFBQko1R2JsMHNadVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY1NzUxMDE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Snape-ka-Bot",
  ownername:process.env.OWNER_NAME|| "SNAPE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
