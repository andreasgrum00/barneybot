const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'bal',
    description: 'Mostra o saldo de BarneyCoins da pessoa mencionada ou de quem escreveu',

    async run (bot, message, args) {
        let user = message.mentions.users.first() || message.author;
        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        
        if(bal === null) bal = 0
        
        message.channel.send(`<@!${user.id}> atualmente tem ${bal} BarneyCoins...`);
    }
}
