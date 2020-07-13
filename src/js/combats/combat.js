const discord = require('discord.js')
const index = require('../../index.js')
const models = require('../database/models.js') 
const query = require('../database/queriesDB.js') 


module.exports = {

    createcombat: function (id, timestamp, enemy, enemyHealth){
        let combat = models.getCombatModel()
        combat.userId = id
        combat.enemy = enemy
        combat.enemyHealth = enemyHealth
        combat.timestamp = timestamp

        combat.save(function (err) {
            if (err) return handleError(err);
            // saved!
          });
    },

    checkCombat: function (userId,timestamp){
        combat = query.findCombat(userId)
        return combat

    },


    supressCombat:function (userId) {
        // once finished we clear the finished combats
    }





}