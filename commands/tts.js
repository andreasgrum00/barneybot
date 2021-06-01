const Discord = require('discord.js');
const gtts = require('google-tts-api');

module.exports = {
    name: 'tts',
    description: 'Fala a frase dita depois do comando em um canal de voz',

    async run (bot, message, args) {
        const frase = args.join(" ")
        const vC = message.member.voice.channel;

        if(!frase) return message.channel.send(`Coloque uma frase depois do comando, por favor...`);

        const url = gtts.getAudioUrl(frase, {
            lang: 'pt-BR',
            slow: false,
            host: 'https://translate.google.com',
        });

        if(!vC) return message.channel.send(`Por favor, entre em um canal de voz`)

        vC.join().then(connection => {
            connection.play(url);
        }).catch(err => {
            console.log(err);
            message.reply(`Me desculpe pela inconveniência, mas ocorreu um erro ao executar o comando: '${err}'`)
        })
    }
}