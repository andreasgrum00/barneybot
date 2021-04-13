const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Manda o convite do BarneyBot',

    async run (bot, message, args) {
        message.reply(`https://discord.com/api/oauth2/authorize?client_id=822554767905390633&permissions=4294967287&scope=bot`)
    }
}
