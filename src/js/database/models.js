const mongoose = require('mongoose')
const index = require('../../index.js')

let enemiesSchema = new mongoose.Schema({ //OK
	name: String,
	health: Number,
	damage: Number,
	money: Number,
	location: String,
});

let usersSchema = new mongoose.Schema({
	user: String,
	discordUserId: String,
	money: Number,
	level: Number,
	health: Number,
	maxHealth: Number,
	damage: Number,
	stats: {
		vitality: Number, //hp ??
		endurance: Number, //fatigue
		strength: Number, //force ==> attaque
		dodge: Number, // esquisse
	},
	weapons: {
		type: JSON,
		default: {}
	},
	armor: {
		head: {
			type: JSON,
			default: {}
		},
		chest: {
			type: JSON,
			default: {}
		},
		hand: {
			type: JSON,
			default: {}
		},
		legs: {
			type: JSON,
			default: {}
		}
	},
	inventory: [],
	location: String
});

let combatsSchema = new mongoose.Schema({
	combatId:Number,
	userId:String,
	turn:Number,
	userHealth:Number,
	enmemyHealth:Number,
	enmemyName:Number,
	lastActionTimestamp:Number,
}) ;

module.exports={
	
	getUserModel : function(){
		return mongoose.model('users', usersSchema);
	},

	getEnemyModel : function(){
		return mongoose.model('enemies', enemiesSchema);
	},
	
	getCombatModel : function(){
		return mongoose.model('combats', combatsSchema);
	}

}
