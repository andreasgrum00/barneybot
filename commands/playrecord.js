const fs = require("fs");
const Discord = require('discord.js');

module.exports = {
    name: 'playrecord',
    description: 'Toca a sua gravação anterior',

    async run (bot, message, args) {
        const voicechannel = message.member.voice.channel;
        if (!voicechannel) return message.channel.send("Entre em um canal de voz, por favor...");

        if (!fs.existsSync(`./records/recorded-${message.author.id}.pcm`)) return message.channel.send("Você ainda não tem gravações!");

        const connection = await message.member.voice.channel.join();
        const stream = fs.createReadStream(`./records/recorded-${message.author.id}.pcm`);

        const dispatcher = connection.play(stream, {
            type: "converted"
        });

        dispatcher.on("finish", () => {
            message.member.voice.channel.leave();
            return message.channel.send("Terminei de tocar a gravação!");
        })
    }
}