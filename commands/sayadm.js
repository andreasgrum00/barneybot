const Discord = require('discord.js');

module.exports = {
    name: 'sayadm',
    description: 'Ferramenta disponível somente para administradores. O BarneyBot repete o que disse depois do comando, mas sem o aviso abaixo da mensagem',

    async run (bot, message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            message.reply(`Você tem que ser administrador do server para poder executar este comando...`);
        } else {
            if (!args[0]) return message.channel.send("Coloca uma frase pra eu repetir, cara\nExemplo: !!say E aí, seu boi");

            const say = args.join(" ");
            message.channel.send(`${say}`)
            message.delete()
        }
    }
}
