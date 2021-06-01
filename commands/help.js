const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Mostra os comandos do BarneyBot',

    async run (bot, message, args) {
        const moderation = new Discord.MessageEmbed()
        .setColor(`#6b2c85`)
        .setTitle("Moderação")
        .addField(`!!ban`, `Bane o usuário mencionado`)
        .addField(`!!kick`, `Expulsa o usuário mencionado`)
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setColor(`#6b2c85`)
        .setTitle(`Diversão`)
        .addField(`!!8ball`, `O BarneyBot responde suas perguntas para você`)
        // .addField(`!!bolsonaro (AINDA EM DESENVOLVIMENTO!)`, `Coloca a imagem anexada na TV do Bolsonaro, talkei?`)
        .addField(`!!meme`, `Manda um meme aleatório dos subreddits r/meme, r/memes e r/dankmeme`)
        .addField(`!!ppt`, `Pedra, Papel e Tesoura, basicamente`)
        .addField(`!!say`, `Repete a frase dita depois do comando`)
        .addField(`!!shiba`, `Manda a foto de um shiba publicada na Internet`)
        .addField(`!!tts **(SOMENTE PARA COMPUTADOR)**`, `O BarneyBot diz em Text-To-Speech a frase dita depois do comando`)
        .setTimestamp()

        const useless = new Discord.MessageEmbed()
        .setColor(`#6b2c85`)
        .setTitle(`Úteis`)
        .addField(`!!clear`, `Limpa a quantidade de mensagens desejada. Obs.: Todos os Bots conseguem apagar mensagens de até 14 dias!`)
        .addField(`!!covid [País em Inglês]/all`, `Mostra os status em um país específico ou globalmente sobre o Coronavírus`)
        .addField(`!!help`, `Mostra todos os comandos do BarneyBot`)
        .addField(`!!img`, `Pega uma imagem da Internet do que foi dito depois do comando`)
        .setTimestamp()

        const music = new Discord.MessageEmbed()
        .setColor(`#6b2c85`)
        .setTitle(`Música`)
        .addField(`!!join`, `Entra no canal de voz que você está`)
        .addField(`!!leave`, `Sai do canal de voz que você está`)
        .addField(`!!play`, `Toca a música que você quer. Obs.: Ainda não há um comando pra tocar URL's, então bote somente o nome da música depois do comando`)
        .setTimestamp()

        message.channel.send(moderation);
        message.channel.send(fun);
        message.channel.send(useless);
        message.channel.send(music);
        message.channel.send(`**CASO QUEIRA SUGERIR UM COMANDO PARA O BARNEYBOT, ENVIE !!suggest [Sugestão] PARA FAZER UMA SUGESTÃO DE COMANDOS. O MEU DEV AGRADECE S2**`)
    }
}