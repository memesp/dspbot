/* DSP Bot
   This was written purely for memes, don't do any heavy
   production stuff with it. You can take this code and
   make it read from any database you want by editing the
   config file in this repo.
*/
var CONFIG = require('./config.json');
// Discord stuff
const Discord = require("discord.js");
const client = new Discord.Client();
var channelName = CONFIG.channel;   // Discord channel you want this to listen to for commands

// database stuff
var mysql = require('mysql');
var dbHost = CONFIG.dbHost;
var dbUser = CONFIG.dbUser;
var dbPass = CONFIG.dbPass;
var dbName = CONFIG.dbName;
var dbTable = CONFIG.dbTable;
var countQuery = "SELECT count(*) FROM " + dbTable;
var quoteQuery = "SELECT * FROM " + dbTable + " WHERE id==" + numQuotes;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    
  var connection = mysql.createConnection({  // connect to whatever database you want to put this in
      host     : localhost,
      user     : username,
      password : secret,
      database : dbname
  }); connection.connect();
});
   
});

client.on('message', msg => {
  if (msg.channel.name == channelName && msg.content === '!dsp') {
      var numQuotes = connection.query('SELECT count(*) FROM 
      var quoteQuery = "SELECT * FROM " + dbTable + " WHERE id==" + numQuotes;
      var quote;
      connection.query(quoteQuery, function (error, results, fields) {
          if (error) throw error;
          quote = results[0].solution;
      });   
      msg.reply(quote);
  }
});

client.login('token');
