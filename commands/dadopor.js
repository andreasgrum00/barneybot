const Discord = require('discord.js');

module.exports = {
    name: 'dadopor',
    description: 'Dado, mas com porcentagem',

    async run(bot, message, args) {
        const nums = [
            10,
            20,
            30,
            40,
            50,
            60,
            70,
            80,
            90,
            100
        ];
        const num = nums[Math.floor(Math.random() * nums.length)];

        const embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .setTitle(`Dado de Porcentagem - BarneyBot`)
        .setDescription(`A porcentagem é **${num}%**!`)
        .setTimestamp()
        .setColor(`#851465`)
        .setThumbnail(`https://http2.mlstatic.com/D_NQ_NP_607083-MLB43238495119_082020-O.jpg`)
        message.channel.send(embed);
    }
}