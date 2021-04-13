const Discord = require('discord.js');

module.exports = {
    name: 'crl',
    description: 'CARAAAAALHO',

    async run (bot, message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`CARA${`A`.repeat(Math.floor(Math.random() * 201))}LHO!`)

        message.channel.send(embed);
    }
}