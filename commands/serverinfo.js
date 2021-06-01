const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Mostra as informações do server',

    async run (bot, message, args) {
        const guild = message.guild;
    
        let createdAt = String(guild.createdAt);
        const description = guild.description;
        const banner = guild.banner;
        const id = guild.id;
        const membersCount = guild.memberCount;
        const ownerID = guild.ownerID;
        const name = guild.name;
        const region = guild.region;
        const verified = guild.verified;

        createdAt = createdAt.split('.')[0]

        const response = new Discord.MessageEmbed()
            .setColor("#6b2c85")
            .setTitle("BarneyBot")
            .setDescription("Informações sobre o servidor")
            .setThumbnail(guild.bannerURL())
            .setAuthor('BarneyBot', bot.user.avatarURL())
            .addFields(
                { name: 'Nome:', value: name },
                { name: "\\😎 Dono:", value: `<@${ownerID}>` },
                { name: "\\👨‍👦‍👦 Quantia de membros:", value: membersCount },
                { name: "\\❓ Descrição:", value: `${description ? description : 'Nenhuma'}` },
                { name: '\\🌎 Região:', value: region },
                { name: "\\🕵️ ID do Servidor (Para desenvolvedores):", value: id },
                { name: "\\⏰ Criado em:", value: createdAt },
            )
            .setTimestamp();

        message.channel.send(response);
    }
}