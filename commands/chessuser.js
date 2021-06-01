const ChessWebAPI = require('chess-web-api');
const chessAPI = new ChessWebAPI();
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'chessuser',
    description: 'Multifunção. Pode procurar desde um usuário até uma partida',

    async run (bot, message, args) {
        if(!args[0]) return message.channel.send(`Você não botou argumentos o suficiente. O comando deve ser usado dessa forma: !!chessuser [userID]`);
        
        fetch(`https://api.chess.com/pub/player/${args[0]}`)
        .then(response => response.json())
        .then(data => {
            let avatar = data.avatar.toLocaleString()
            let url = data.url.toLocaleString()
            let name = data.name.toLocaleString()
            let username = data.username.toLocaleString()
            let followers = data.followers.toLocaleString()

            const embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle(`Conta de ${username} no chess.com`)
            .setURL(url)
            .addField(`Nome: `, name)
            .addField(`Apelido: `, username)
            .addField(`Seguidores: `, followers)
            .setThumbnail(avatar)
            .setTimestamp()

            message.channel.send(embed);
        })
    }
}