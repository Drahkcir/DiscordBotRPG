const discord = require('discord.js');

//let getindex = require('../index.js');





module.exports = {

	getCommand: function (args, message) {
		let query = "";
		switch (args[1]) {
			case 'help':
				query = require('./commands/help.js');
				query.sendHelp(message);
				break;
			case 'look':
				message.channel.send('you wanna look around');
				break;
			case 'attack':
				//check if there is a combat 
				query = require('./database/queriesDB.js')
				let combat = query.findCombat(message.author.id)
				if(combat != null){
					query = require('./commands/attack.js');
					query.simulCombat(message);
				}else{
					message.channel.send('you wanna attack but their is no enemies to attack, so you swing your weapon in air like a fool ');
				}

				break;
			case 'flee':
				//check if there is a combat 
				query = require('./commands/flee.js');
				message.channel.send('you wanna flee');
				break;
			case 'defense':
				//check if there is a combat 
				query = require('./commands/defense.js');
				message.channel.send('you wanna flee');

			case 'interact':
				if (args[2] != undefined) {
					message.channel.send('you wanna interact with *' + args[2] + '*');
				}else{
					message.channel.send('you need to specify with what you want to interact ');
				}
				break;
			case 'stats':
				query = require('./commands/stats.js');
				query.statsSearch(message)
				break;
				
			case 'test':
				query = require('.././Tests/tests.js');
			default:
				message.channel.send('command not found try to do the following command : `rpg help`')

		}



	}

};


