const Discord = require('discord.js');

module.exports = {
    name: 'leave',
    description: 'Sai do canal de voz atual',

    async run (bot, message, args) {
        const vC = message.member.voice.channel;
 
        if(!vC) return message.reply("você precisa estar em um canal de voz");
        
        await vC.leave();
        await message.react("👋")
    }
}