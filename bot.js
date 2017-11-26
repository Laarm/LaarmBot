const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzgyOTkyOTQyMDkwMDI3MDM5.DPdyMA.acOBvno_9osaMa2g2xCeW8JIkzY";
const bot = new Discord.Client();
const prefix = ".";

const fs = require("fs");

client.on('message', message => {	
var msg = message;

 
    
    var mentionned = message.mentions.users.first();
if(msg.mentions.users.size > 0) {
if (afk[msg.mentions.users.first().id]) {
if (afk[msg.mentions.users.first().id].reason === true) {
message.channel.send(`@${mentionned.username} is AFK: pas de raison`);
}else{
message.channel.send(`@${mentionned.username} is AFK: ${afk[msg.mentions.users.first().id].reason}`);
}

})
bot.on('guildMemberAdd', gMember => {
    var reason = "C'est le rôle par default!";
    //tools.welcomeUserWithImg(gMember.user, gMember.user.avatarURL);
    tools.addRoleTo(gMember.user, usefulInfos.defaultRole, reason, gMember);
    usefulInfos.welcomeChannel.send("Bienvenue sur un serveur ! Passes un agrébale moment !");

});

bot.login(token);
