/* DSP Bot
   This was written purely for memes, don't do any heavy
   production stuff with it. You can take this code and
   make it read from any database you want by editing the
   config file in this repo.
*/
// Discord stuff
const Discord = require("discord.js");
const client = new Discord.Client();

// database stuff
var mysql = require('mysql');
var CONFIG = require('./dbconfig.json');
var dbHost = CONFIG.dbHost;
var dbUser = CONFIG.dbUser;
var dbPass = CONFIG.dbPass;
var dbName = CONFIG.dbName;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    
  var connection = mysql.createConnection({
      host     : localhost,
      user     : username,
      password : secret,
      database : dbname
  });
});

client.on('message', msg => {
  if (msg.content === '!dsp') {
    
    
    msg.reply('Pong!');
  }
});

client.login('token');
