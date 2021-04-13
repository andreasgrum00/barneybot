const Discord = require("discord.js");

module.exports = {
    name: 'suggest',
    description: 'Sugere algo para o dev do bot. Obs.: A mensagem vai para a dm do dev do BarneyBot...',
    async run (bot, message, args) {
        var content = args.join(" ");
        const angrupa = bot.users.cache.get('417829177757007872');

        if(!content) return message.reply(`Coloca a sugestão, seu corno`);

        let embed = new Discord.MessageEmbed()
        .setAuthor(`Sugestão de ${message.author.tag}!`, message.author.avatarURL())
        .setThumbnail(message.author.avatarURL())
        .setDescription(content)
        .setTimestamp()
        .setColor("RANDOM")
        angrupa.send(embed)
        message.channel.send(embed);
    }
}
