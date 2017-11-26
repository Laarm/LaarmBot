const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzgyOTkyOTQyMDkwMDI3MDM5.DPdyMA.acOBvno_9osaMa2g2xCeW8JIkzY";
const bot = new Discord.Client();
var prefix = ".";

const fs = require("fs");

client.on('message', message => {	
var msg = message;

if(message.content.startsWith(prefix + "help")){

(async function() {

 const mainMessage = await message.channel.send("Help | LaarmBot:\n **c!help** : Voire ce message\n**c!afk <message>** : Vous mettre en afk\n**c!remafk** : Enlever l'afk");

await mainMessage.react("◀");
await mainMessage.react("▶");
await mainMessage.react("🛑");

const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
 
panier.on('collect', async(reaction) => 
{
 if (reaction.emoji.name === "◀") {

mainMessage.edit("Help | LaarmBot:\n **c!help** : Voire ce message");

 }
if (reaction.emoji.name === "▶") {

mainMessage.edit("Help | LaarmBot:\n **Page.2**");
 
}
if (reaction.emoji.name === "🛑") {

mainMessage.delete()

 }

 await reaction.remove(message.author.id);

});
 }());
}	
	
    
    
})
bot.on('guildMemberAdd', gMember => {
    var reason = "C'est le rôle par default!";
    //tools.welcomeUserWithImg(gMember.user, gMember.user.avatarURL);
    tools.addRoleTo(gMember.user, usefulInfos.defaultRole, reason, gMember);
    usefulInfos.welcomeChannel.send("Bienvenue sur un serveur ! Passes un agrébale moment !");

});

bot.login(token);
