const Discord = require('discord.js');

module.exports = {
    name: 'github',
    description: 'Mostra o código-fonte do BarneyBot',

    async run (bot, message, args) {
        message.reply(`Veja meu código-fonte: https://github.com/andreasgrum00/barneybot`)
    }
}
