const Discord = require('discord.js');

module.exports = {
    name: 'crl',
    description: 'CARAAAAALHO',

    async run (bot, message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`CARA${`A`.repeat(Math.floor(Math.random() * 201))}LHO${`O`.repeat(Math.floor(Math.random() * 60))}!`)
        .setColor("#6b2c85")

        message.channel.send(embed);
    }
}