const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
    name: 'record',
    description: 'Grava sua voz',

    async run (bot, message, args) {
        const voicechannel = message.member.voice.channel;
        if (!voicechannel) return message.channel.send("Entre em um canal de voz, por favor...");

        const connection = await message.member.voice.channel.join();
        const receiver = connection.receiver.createStream(message.member, {
            mode: "pcm",
            end: "silence"
        });

        const writer = receiver.pipe(fs.createWriteStream(`./records/recorded-${message.author.id}.pcm`));
        writer.on("finish", () => {
            message.member.voice.channel.leave();
            message.channel.send("Terminei de gravar!");
        });
    }
}
