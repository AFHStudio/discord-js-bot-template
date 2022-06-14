module.exports = {
  name: "hey",
  description: "says hey",
  execute(message, args, Discord){
    const heyembed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Hello!')
    .setDescription("Hey! Hope you're having a great day!")
    message.channel.send({embeds: [heyembed]})
  }
}