const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Discord.Collection
const commandfolder = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
const settings = {
  prefix: 'afh!'
}
client.once('ready', () =>{ console.log('AFHBot is ready!'); client.user.setActivity('Hello world!',  { type: 'PLAYING'}); });
console.log('Bot is using node')
console.log(process.version)
client.on('message', async message => {
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
  var args = message.content.split(' ').slice(1);
  if(!client.commands.has(command)) return;
  try{
    client.commands.get(command).execute(message, args, Discord);
  }catch(error){
    console.error(error);
    message.reply("Sorry, there was an issue using that command.")
  }
       if(message.author.bot) {
        return;
    };
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;
});
client.login(process.env.TOKEN)
for(const file of commandfolder){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}
 
