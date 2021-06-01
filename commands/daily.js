const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'daily',
    description: 'Receba uma quantia diária de BarneyCoins',

    async run (bot, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = 500;
        let daily = await db.fetch(`daily_${messsage.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`Tu já ganhou sua quantia diária hoje! Volte daqui a ${time.days}d, ${time.hours}h, ${time.minutes}m e ${time.seconds}s`);
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            let embed = new Discord.MessageEmbed()

            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setDescription(`Você recebeu ${amount} BarneyCoins...`)

            message.channel.send(embed);
        }
    }
}