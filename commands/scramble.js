const Discord = require('discord.js');

module.exports = {
    name: 'scramble',
    description: 'O BarneyBot irá embaralhar seu cubo mágico para ti',

    async run (bot, message, args) {
        const moves = ['R ', 'R\' ', 'R2 ', 'L ', 'L\' ', 'U ', 'U\' ', 'U2 ', 'D ', 'D\' ', 'D2 ', 'F ', 'F\' ', 'F2 ', 'B ', 'B\' ', 'B2 '];
        const move1 = moves[Math.floor(Math.random() * moves.length)];
        const move2 = moves[Math.floor(Math.random() * moves.length)];
        const move3 = moves[Math.floor(Math.random() * moves.length)];
        const move4 = moves[Math.floor(Math.random() * moves.length)];
        const move5 = moves[Math.floor(Math.random() * moves.length)];
        const move6 = moves[Math.floor(Math.random() * moves.length)];
        const move7 = moves[Math.floor(Math.random() * moves.length)];
        const move8 = moves[Math.floor(Math.random() * moves.length)];
        const move9 = moves[Math.floor(Math.random() * moves.length)];
        const move10 = moves[Math.floor(Math.random() * moves.length)];
        const move11 = moves[Math.floor(Math.random() * moves.length)];
        const move12 = moves[Math.floor(Math.random() * moves.length)];
        const move13 = moves[Math.floor(Math.random() * moves.length)];
        const move14 = moves[Math.floor(Math.random() * moves.length)];
        const move15 = moves[Math.floor(Math.random() * moves.length)];
        const move16 = moves[Math.floor(Math.random() * moves.length)];
        const move17 = moves[Math.floor(Math.random() * moves.length)];
        const move18 = moves[Math.floor(Math.random() * moves.length)];
        const move19 = moves[Math.floor(Math.random() * moves.length)];
        const move20 = moves[Math.floor(Math.random() * moves.length)];
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .setDescription(`${move1}${move2}${move3}${move4}${move5}${move6}${move7}${move8}${move9}${move10}${move11}${move12}${move13}${move14}${move15}${move16}${move17}${move18}${move19}${move20}`)
        
        message.channel.send(embed);
    }
}