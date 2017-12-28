# dspbot

A bot that spits out funny quotes from our favorite let's player in your Discord. If you have any questions about setup or usage, contact me through GitHub or post an issue on this repo!

## Requirememts

* JavaScript
* NPM
* discord.js
* mysql

## Setup
The config.json file is where the bot pulls database info and which channel it needs to listen to for commands. Definitely edit that once you make your quotes database because it won't work otherwise.

## Usage

Pretty simple, typing "!dsp" into the Discord chat where the bot's active will give you a random quote. I plan to add the ability to add quotes to the database via text chat later, though that function will only be available to mods of the particular Discord server.


## Notes on the Database for Quotes

The database really only needs to have one table that has one column labelled 'id' and one column labelled 'quote' (latter column doesn't matter since the 'id' value is how the bot randomly selects a quote anyway). There are several tutorials on how to set up the MySQL database this bot needs so look there if you need help on that.

' Table Setup for Quotes:'
'------------------------'
'| id     | quotedata   |'
'------------------------'
'|   ...   |   ...      |'
