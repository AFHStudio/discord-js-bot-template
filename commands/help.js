module.exports = {
    name: "help",
    description: "all commands for bot",
    execute(message, args, Discord){
      const helpembed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('commands :)')
      .addFields(
        { name: 'hey', value: 'a!hey' },
        { name: 'help', value: 'a!help' },
      )
      message.channel.send({embeds: [helpembed]})
    }
  }