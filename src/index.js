//disord client
discord = require('discord.js');
bot = new discord.Client();

//fileSystem
const fs = require('fs');

//mongodb & mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Bloodborne', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to mongodb via mongoose")
});


//DEBUG & TESTS
let testChannel = bot.channels.get('627965011100434452');


module.exports = {
	getbot: function () {
		return bot;
	},

	getDB: function(){
		return db;
	},

	//DEBUG & TESTS
	getTestChannel: function(){
		return testChannel;
	}
}


const command = require('./js/botQuery.js');

bot.on('ready', function () {
	testChannel=testChannel = bot.channels.get('627965011100434452');
	
	console.log("bot connected");
	testChannel.send("bot up and ready");
	
	//Aelkion
	//bot.fetchUser("394178521032818698").then(user => user.send("dis dis dis tu me fais un petit frère ou une petite soeur ?!?  "))
		
	//Drahkcir
	//bot.fetchUser("135057762383167488").then(user => user.send("Hi there !! i'm UP !"))
	
});


let token ="";
fs.readFile('./res/.token','utf-8', function read(err, token) {
    if (err) throw err;
	bot.login(token)
});


bot.on('message', message => {
	if (message.author != bot.user && message.channel.type != 'dm' && message.content.startsWith("rpg")) {
		args = message.content.split(' ')
		command.getCommand(args, message);
	}
});

