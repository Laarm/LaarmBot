const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzgyOTkyOTQyMDkwMDI3MDM5.DPdyMA.acOBvno_9osaMa2g2xCeW8JIkzY";
const bot = new Discord.Client();
const prefix = "."

bot.on('guildMemberAdd', gMember => {
    var reason = "C'est le rôlebpar default!";
    //tools.welcomeUserWithImg(gMember.user, gMember.user.avatarURL);
    tools.addRoleTo(gMember.user, usefulInfos.defaultRole, reason, gMember);
    usefulInfos.welcomeChannel.send("Bienvenue sur un serveur ! Passes un agrébale moment !");

});

bot.login(token);
