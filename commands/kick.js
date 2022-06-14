module.exports = {
    name: "kick",
    description: "kicks a user",
    execute(message, args, Discord){
    const member = message.mentions.users.first();
    if(message.member.permissions.has("KICK_MEMBERS")){
    if(member){
      const memberTarget = message.guild.members.cache.get(member.id)
      memberTarget.kick();
      const kickedembed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle("Member kicked.")
      .setDescription("This member has been kicked from the server.")
      message.channel.send({embeds: [kickedembed]}) 
    }else{
      const youcannotkickembed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle("Couldn't kick this member.")
      .setDescription("You cannot kick this member or you didn't mention anyone.")
      message.channel.send({embeds: [youcannotkickembed]}) 
    }
  }
}
}