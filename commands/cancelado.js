const Discord = require('discord.js');

module.exports = {
    name: 'cancelado',
    description: 'Descubra o porquê de você ter sido cancelado',

    async run (bot, message, args) {
        const m = message.mentions.users.first();
        const motivos = [
            "ser atraente demais",
            "ter charme demais",
            "ser uma pessoa horrível",
            "ser uma grande gostosa",
            "ser boy lixo",
            "ser comunista",
            "debochar demais",
            "ser inteligente demais",
            "ser padrãozinho",
            "pedir muito biscoito",
            "ser corno",
            "ser uma delícia",
            "ser gado demais",
            "não ser ninguém",
            "ser poser",
            "ser insuportável",
            "ser insensível",
            "não fazer nada",
            "ser trouxa",
            "se atrasar sempre",
            "ser impaciente demais",
            "ter virado o Coronga",
            "ser BV",
            "ter muita preguiça",
            "ser inútil",
            "ser inadimplente no Serasa",
            "contar muita piada ruim",
            "procrastinar demais",
            "por se considerar incancelável"
        ];

        const motivo = motivos[Math.floor(Math.random() * motivos.length)];

        if(!m) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle(`${message.author.username} foi cancelado(a) por ${motivo}!`)
            .setThumbnail(message.author.avatarURL())
            
            message.channel.send(embed);
        }

        let embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .setTitle(`${m.username} foi cancelado(a) por ${motivo}!`)
        .setThumbnail(m.avatarURL())

        message.channel.send(embed);
    }
}