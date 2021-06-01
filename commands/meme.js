const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'meme',
    description: 'Manda um meme aleatório',

    async run (bot, message, args) {
        const subReddits = ['dankmeme', 'meme', 'memes'];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const titles = [`Tá ae, browww.`, 'Tó, mano.', 'Olha esse meme aqui, velho.', 'Pronto, toma ae.'];
        const title = titles[Math.floor(Math.random() * titles.length)];

        const embed = new Discord.MessageEmbed()
        .setColor("#6b2c85")
        .setTitle(title + ` De r/${random}`)
        .setAuthor("BarneyBot", bot.user.avatarURL())
        .setImage(img)
        .setFooter(`Fonte: r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed);
    }
}