const Discord = require('discord.js');

module.exports = {
    name: 'leave',
    description: 'Sai do canal de voz atual',

    async run (bot, message, args) {
        const vC = message.member.voice.channel;
 
        if(!vC) return message.channel.send("Você precisa estar em um canal de voz para executar o comando");
        
        await vC.leave();
        await message.channel.send(':x: Saindo do Canal de Voz :x:')
    }
}