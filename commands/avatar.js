const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Mostra o seu avatar ou da pessoa mencionada',

    async run (bot, message, args) {
        const m = message.mentions.users.first();

        if(!m) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle(`🖼️ ${message.author.username}`)
            .setImage(message.author.avatarURL())
            .setDescription(`Clique no título para baixar a imagem!`)
            .setURL(message.author.avatarURL({size: 2048}))
            message.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle(`🖼️ ${m.username}`)
            .setImage(m.avatarURL())
            .setDescription(`Clique no título para baixar a imagem!`)
            .setURL(m.avatarURL({size: 2048}))
            message.channel.send(embed);
        }
    }
}