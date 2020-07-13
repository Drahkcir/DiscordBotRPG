//disord client
discord = require('discord.js');
bot = new discord.Client();

//fileSystem
const fs = require('fs');


//DEBUG & TESTS
let testChannel = bot.channels.get('627965011100434452');

bot.on('ready', function () {
	testChannel=testChannel = bot.channels.get('627965011100434452');
	console.log("bot connected");
});


let token ="";
fs.readFile('./res/.token','utf-8', function read(err, token) {
    if (err) throw err;
	bot.login(token)
});

let prefix = "!"
let enemy={
    nom:'loups',
    vie:-1,
    vieMax:20
}
let player={
    vie:20,
    vieMax:20
}

function lancer(nbFace){
    return ( Math.round(Math.random()*nbFace)+1 ) ;
}



bot.on('message', message => {
	if ( !message.author.bot && message.channel.type != 'dm' && message.content.startsWith(`${prefix}`)) {
        let arrayMsg= message.content.split();
        var str="";
        switch(arrayMsg[0]){

            case `${prefix}ping`:
                message.channel.send("pong")
                break;

            case `${prefix}start`:
                if(enemy.vie<=0){
                    enemy.vie=enemy.vieMax
                    player.vie= player.vieMax
                    str= "le monstre et votre vie a été reinitialisé"
                }else{
                    str= "le dernier combat n'a pas été terminé finissez le pour pouvoir recommencer un autre combat"
                }
                message.channel.send(str)
                break;
            case `${prefix}attack`:
                
                if(enemy.vie > 0  && player.vie > 0){
                    let res= lancer(6)
                    str=`lancé de dé du joueur: ${res}\n` 
                    enemy.vie = Math.max(enemy.vie-res , 0)
                    res= lancer(6)
                    str+=`lancé de dé du monstre: ${res}\n`
                    player.vie = Math.max(player.vie-res , 0)

                    if (enemy.vie > 0 && player.vie > 0)
                        str+=`vie restante du monstre *${enemy.nom}* : ${enemy.vie}/${enemy.vieMax}\nvotre vie restante: ${player.vie} / ${player.vieMax} `
                    else{
                        if (player.vie <= 0) {
                            str+= "Vous êtes Mort ! :sob:"
                        }else {
                            str+=`félicitation vous avez tué le ${enemy.nom}.`
                        }
                    }
                }else {
                    str=`le combat est fini ou n'a pas été initialisé.(commande !start)`
                }
                message.channel.send(str)
                break



        }

        
	}
});

