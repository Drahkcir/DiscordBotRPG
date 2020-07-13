const discord = require('discord.js')
const index = require('../../index.js')
const models = require('../database/models.js')
const mongoose = require('mongoose')


module.exports = {

	statsSearch: function (msg) {

		let user = models.getUserModel()
		let query = user.findOne({ 'discordUserId': msg.author.id });

		//selecting the fields
		query.select('user stats');

		query.exec(function (err, user) {
			if (err) return handleError(err);
			console.log("name : %s \n %s", user.user, user.stats)
			msg.channel.send(`name : ${user.user} \n ${user.stats}`)
		});

	},

	contextHelp: function () {
		return "stats : permet de connaitre les stats de son avatar";
	}


}