module.exports = {
    name: "help",
    description: "all commands for bot",
    execute(message, args, Discord){
      const helpembed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('commands :)')
      .addFields(
        { name: 'help', value: 'afh!help' },
        { name: 'ban', value: 'afh!ban' },
        { name: 'kick', value: 'afh!kick' },
      )
      message.channel.send({embeds: [helpembed]})
    }
  }
