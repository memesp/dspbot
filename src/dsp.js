/* DSP Bot
   This was written purely for memes, don't do any heavy
   production stuff with it. You can take this code and
   make it read from any database you want by editing the
   config file in this repo.
*/
var CONFIG = require('./config.json');
var auth = require('./auth.json');
// Discord stuff
const Discord = require("discord.js");
const client = new Discord.Client();
const token = auth.token;
var channelName = CONFIG.channel;   // Discord channel you want this to listen to for commands

// database stuff
var mysql = require('mysql');
var dbHost = CONFIG.dbHost;
var dbUser = CONFIG.dbUser;
var dbPass = CONFIG.dbPass;
var dbName = CONFIG.dbName;
var dbTable = CONFIG.dbTable;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    
  var connection = mysql.createConnection({  // connect to whatever database you want to put this in
      host     : localhost,
      user     : username,
      password : secret,
      database : dbname
  }); connection.connect();
});

client.on('message', msg => {
  if (msg.channel.name == channelName && msg.content === '!dsp') {
      var countQuery = "SELECT count(*) FROM " + dbTable;
      var numQuotes = connection.query(countQuery, function (error, result, fields) {
          if (error) throw error;
      });
      var quoteQuery = "SELECT quotedata FROM " + dbTable + " WHERE id==" + numQuotes;
      var quote = [];
      connection.query(quoteQuery, function (error, result, fields) {
          if (error) throw error;
          quote = results[0].quotedata;
      });   
      msg.reply(quote);
  }
});

client.login('token');
