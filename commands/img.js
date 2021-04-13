const Discord = require('discord.js');
const Scrapper = require('images-scraper');

const google = new Scrapper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'img',
    description: 'Mostra uma imagem do Google relacionado ao que você escreveu depois do comando',

    async run (bot, message, args) {
        const img = args.join(' ');
        const r = await google.scrape(img, 1);

        if(!img) return message.reply(`escreva algo depois do comando...`);

        const embed = new Discord.MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .setImage(r[0].url)
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`)

        message.reply(embed);
    }
}