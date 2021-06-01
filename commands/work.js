const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('parse-ms');

module.exports = {
    name: 'work',
    description: 'Trabalhe e ganhe uma quantia de BarneyCoins',

    async run (bot, message, args) {
        let user = message.author;
        let author = await db.fetch(`worked_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));

            return message.channel.send(`Você pode voltar a trabalhar daqui a ${time.minutes}m e ${time.seconds}s...`);
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`Você trabalhou e ${amount} BarneyCoins foram adicionados à sua conta...`)
        }
    }
}