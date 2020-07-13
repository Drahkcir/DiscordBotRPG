const mongoose = require('mongoose')
const index = require('../../index.js')
const models= require('./models.js')


module.exports = {

    findCombat: function(id) {
        let combat = models.getCombatModel();
        let query = combat.find({'userId': id});

       //query.select('combatId userId turn userHealth enmemyHealth enmemyName lastActionTimestamp')
        query.exec(function (err, combat) {
            if (err) return handleError(err);
            
            if(combat != null )
                return null;
            else{
                index.getTestChannel().send( "debug : ",str);
                return combat;
            }
            
        }); 

    },

    findEnemies: function(){

    },

    findUser:function(){


    },



}



//==================================Exemples ===================================//


/*==============================Eequetes Enemies================================*/
/*
let enemy = mongoose.model('enemies', models.getEnemiesSchema())
let query = enemy.find({})//'name': 'Bourreau' });

//selecting the fields
query.select('name health damage money location');

// execute the query at a later time
query.exec(function (err, enemies) {
	if (err) return handleError(err);
	index.getTestChannel().send("liste des ennemis :")
	let str = ""
	enemies.forEach(i => {
		str += i.name + " (hp: " + i.health + "  ,degats: " + i.damage + "  ,monaie: " + i.money + " ,lieu: " + i.location + ")\n"
	});
	index.getTestChannel().send(str);
});
*/
/*==============================requetes users================================*/
/*
let user = mongoose.model('users', models.getusersSchema)
let query = user.findOne({'user': "Aelkion" });

//selecting the fields
query.select('user stats damage money location');

// execute the query at a later time
query.exec(function (err, user) {
	if (err) return handleError(err);
	index.getTestChannel().send("user:")
	console.log('%s , %s , %d , %d , %s', user.user, user.stats, user.damage, user.money, user.location);
	str = `${user.user} , ${user.stats} , ${user.damage} , ${user.money} , ${user.location}`
	index.getTestChannel().send(str)
});
*/