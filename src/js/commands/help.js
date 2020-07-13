const discord = require('discord.js')
const folder = './src/js/commands/'
const fs = require('fs');


module.exports = {

	sendHelp: function (msg) {
		let str = "list of commands :```"
		let commands;
		fs.readdir(folder, (err, files) => {
			files.forEach(file => {
				commands = require('./'+file)
				str += commands.contextHelp()+"\n";
			});
			str +="```"
			msg.channel.send(str)
		});
	},

	contextHelp: function () {
		return "help : give the commands available,their options and their effect";
	}


}