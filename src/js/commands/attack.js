const discord = require('discord.js')
const index = require('../../index.js')
const models = require('../database/models.js') 


module.exports = {

	simulCombat : function (msg,combat) {	
		// TODO
		msg.channel.send("combat simulé")

	},

	contextHelp : function(){
		return "attack : permet de lancer un combat ";
	}


}

