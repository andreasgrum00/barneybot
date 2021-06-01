const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Mostra a Latência do Bot',


    async run (bot, message, args) {
        const m = await message.channel.send("Testando Ping...")

        const embed = new Discord.MessageEmbed()
        .setTitle('Ping')
        .setColor("#6b2c85")
        .addField('⌚ Latência', `${(m.createdTimestamp - message.createdTimestamp)}ms`, true)
        .addField('🤖 Latência do Bot', `${Math.round(bot.ws.ping)}ms`, true)
        .setTimestamp()
        
        message.channel.send(embed)
    }
}