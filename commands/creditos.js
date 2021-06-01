const Discord = require('discord.js');

module.exports = {
    name: 'creditos',
    description: 'Mostra os créditos do BarneyBot',

    async run (bot, message, args) {
        message.channel.send("O meu desenvolvedor é o ${grumm}#1071!")
    }
}