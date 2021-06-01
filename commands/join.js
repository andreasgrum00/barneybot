const Discord = require('discord.js');

module.exports = {
    name: 'join',
    description: 'Entra no canal que você tá',
    
    async run (bot, message, args) {
        const vc = message.member.voice.channel;
        
        if(!vc) message.reply(`você precisa estar em um canal de voz`);

        vc.join()
        .then(message.react("👍"));
    }
}