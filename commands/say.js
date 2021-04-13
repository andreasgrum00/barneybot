const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Eu basicamente te imito, mano',
    
    async run (bot, message, args) {
        if (!args[0]) return message.channel.send("Coloca uma frase pra eu repetir, cara\nExemplo: !!say E aí, seu boi");

        const say = args.join(" ");
        message.channel.send(`${say}\n\n - <@!${message.author.id}>`)
        message.delete()
    }
}
