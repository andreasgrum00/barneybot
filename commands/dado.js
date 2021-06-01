const Discord = require('discord.js');

module.exports = {
    name: 'dado',
    description: 'Role o dado e veja que número dá',

    async run (bot, message, args) {
        const nums = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
        ];
        const num = nums[Math.floor(Math.random() * nums.length)];

        const embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .setTitle(`Dado - BarneyBot`)
        .setDescription(`O número é **${num}**!`)
        .setTimestamp()
        .setColor(`#851465`)
        .setThumbnail(`https://http2.mlstatic.com/D_NQ_NP_607083-MLB43238495119_082020-O.jpg`)
        message.channel.send(embed);
    }
}