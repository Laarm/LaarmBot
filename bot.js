const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzgyOTkyOTQyMDkwMDI3MDM5.DPdyMA.acOBvno_9osaMa2g2xCeW8JIkzY";
const bot = new Discord.Client();
const prefix = "."

client.on('message', message => {	
var msg = message;

let afk = JSON.parse(fs.readFileSync("./afks.json", "utf8"));
if (message.content.startsWith(prefix + "remafk")){
if (afk[msg.author.id]) {
delete afk[msg.author.id];
if (msg.member.nickname === null) {
msg.channel.send("J'ai enlever votre afk ^^");
}else{
msg.channel.send("J'ai enlever votre afk ^^");
}
fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}else{
msg.channel.send("Erreur ! Tu es déjà afk");
}
}


if (msg.content.startsWith(prefix + "afk")||msg.content === prefix + "afk") {
if (afk[msg.author.id]) {
return message.channel.send("Erreur ! Tu es déjà afk -_-");
}else{
let args1 = msg.content.split(" ").slice(1);
if (args1.length === 0) {
afk[msg.author.id] = {"reason" : true};
msg.delete();
msg.channel.send(`tu es désormais afk, met **${prefix}remafk** pour enlever ton afk`).then(x => DeleteQueue.add(x, 10000));
}else{
afk[msg.author.id] = {"reason" : args1.join(" ")};
msg.delete();
msg.channel.send(`tu es désormais afk, met **${prefix}remafk** pour enlever ton afk`).then(x => DeleteQueue.add(x, 10000));
}
fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}
}
    
    var mentionned = message.mentions.users.first();
if(msg.mentions.users.size > 0) {
if (afk[msg.mentions.users.first().id]) {
if (afk[msg.mentions.users.first().id].reason === true) {
message.channel.send(`@${mentionned.username} is AFK: pas de raison`);
}else{
message.channel.send(`@${mentionned.username} is AFK: ${afk[msg.mentions.users.first().id].reason}`);
}
}
}
})
bot.on('guildMemberAdd', gMember => {
    var reason = "C'est le rôle par default!";
    //tools.welcomeUserWithImg(gMember.user, gMember.user.avatarURL);
    tools.addRoleTo(gMember.user, usefulInfos.defaultRole, reason, gMember);
    usefulInfos.welcomeChannel.send("Bienvenue sur un serveur ! Passes un agrébale moment !");

});

bot.login(token);
