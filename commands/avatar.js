const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Mostra o seu avatar ou da pessoa mencionada',

    async run (bot, message, args) {
        const m = message.mentions.users.first();

        if(!m) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setColor("#6b2c85")
            .setTitle(`🖼️ ${message.author.username}`)
            .setImage(message.author.avatarURL())
            .setDescription(`Clique no título para baixar a imagem!`)
            .setURL(message.author.avatarURL({dynamic: true, size: 2048}))
            .setColor("#6b2c85")
            message.channel.send(embed);
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setColor("#6b2c85")
            .setTitle(`🖼️ ${m.username}`)
            .setImage(m.avatarURL())
            .setDescription(`Clique no título para baixar a imagem!`)
            .setURL(m.avatarURL({dynamic: true, size: 2048}))
            .setColor("#6b2c85")
        message.channel.send(embed);
    }
}