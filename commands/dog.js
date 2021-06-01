const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'dog',
    description: 'Mostra uma imagem aleatória de cachorro',

    async run (bot, message, args) {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            let foto = data.message.toLocaleString()

            let embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle("Clique aqui para baixar a imagem")
            .setURL(foto)
            .setImage(foto)

            message.channel.send(embed);
        })
    }
}