const Discord = require('discord.js');

module.exports = {
    name: 'tts',
    description: 'Lê a mensagem escrita depois do comando pra você',

    async run (bot, message, args) {
        let frase = args.join(" ");
        
        if(!frase) return message.reply(`Você deve mandar uma frase depois desse comando!`);

        message.channel.send(frase, {
            tts: true
        });
    }
}