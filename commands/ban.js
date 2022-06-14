module.exports = {
  name: "ban",
  description: "bans a user",
  execute(message, args, Discord){
  const member = message.mentions.users.first();
  if(message.member.permissions.has("BAN_MEMBERS")){
  if(member){
    const memberTarget = message.guild.members.cache.get(member.id)
    memberTarget.ban();
    const bannedembed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle("Member banned.")
    .setDescription("This member has been banned from the server.")
    message.channel.send({embeds: [bannedembed]}) 
  }else{
    const youcannotbanembed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle("Couldn't ban this member.")
    .setDescription("You cannot ban this member or you didn't mention anyone.")
    message.channel.send({embeds: [youcannotbanembed]}) 
  }
}
}
}