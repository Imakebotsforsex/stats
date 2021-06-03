const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', async (member) => {
    client.channels.cache.get('848460388856365066').setName(`☁・Current: ${member.guild.memberCount}`)
})

client.on('guildMemberRemove', async (member) => {
    client.channels.cache.get('848460388856365066').setName(`☁・Current: ${member.guild.memberCount}`)
})

client.login('')