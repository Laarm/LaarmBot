const Discord = require("discord.js");
const client = new Discord.Client();
const token = "MzgyOTkyOTQyMDkwMDI3MDM5.DPdyMA.acOBvno_9osaMa2g2xCeW8JIkzY";
const bot = new Discord.Client();
const fs = require("fs");
var prefix = ".";	

client.on('message', message => {	



if (command === "setPrefix") {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`__**Access Interfit**__\nTu n'as pas la perm : __MANAGE_GUILD__.`); // Checks for permissions to change the prefix
  const newPrefix = args.slice(1).join(" "); // define the prefix
  guilds[message.guild.id].prefix = newPrefix; // set the prefix
  message.channel.send(`Le prefix edserveur ur**${message.guild.name}** est : **${newPrefix}**`); // reply with the new sexy prefix!
}


});	
	
	
	if(message.content.startsWith(prefix + 'randomrender')) {
let image = [
'https://cdn.discordapp.com/attachments/344954703978823681/382211613790437378/Skin_43_0084.png',
'https://cdn.discordapp.com/attachments/344954703978823681/382211614545281024/Wallpaper.png',
'https://cdn.discordapp.com/attachments/344954703978823681/382211614994333696/Logo-1.png',
'https://cdn.discordapp.com/attachments/344954703978823681/382211615623348227/JPEG_20171112_231237.jpg', 	
'https://cdn.discordapp.com/attachments/344954703978823681/382211616285917184/Rendu_157_0003.png',	
'https://cdn.discordapp.com/attachments/360813025864843265/382263579925282816/obPT1yK.png'
	
	
]
message.channel.send(image[Math.floor(Math.random() * image.length)])
} 	
	
if(message.content.startsWith(prefix + 'setgame ')) {
if(message.author.id !== '252873409401323520') return;
var args = message.content.split(' ').slice(1).join(' ')
if(!args) return;
client.user.setPresence({ game: { name: args, type: 0 } });
message.channel.send('Le jeux du bot est maintenant **' + args + '**')
}
 

 client.on("ready", () => {

var memberNumber = client.users.size;
var serverNumber = client.guilds.size;

 c

	console.log("--------------------------------------");

  console.log("TutoBOT online\nNombre de serveurs: " + serverNumber + "\navec\n" + memberNumber + " utilisateurs");

});

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

mainMessage.edit("Help | LaarmBot:\n **c!help** : Voire ce message\n**c!afk <message>** : Vous mettre en afk\n**c!remafk** : Enlever l'afk");

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

  
  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== "252873409401323520") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
	function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
})	      

client.login(token)
