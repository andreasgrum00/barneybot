const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Apaga a quantidade de mensagens desejadas',

    async run (bot, message, args) {
        const amount = args.join(" ");
        
        if(!amount) return message.reply(`Coloque a quantidade de mensagens que você quer apagar...`);
        if(!typeof amount === 'number') return message.reply(`Isto não é um número... Por favor, coloque um valor válido :|`);
        if(amount > 100) return message.reply(`Não posso apagar mais que cem mensagens...`);
        if(amount < 1) return message.reply(`Você precisa apagar pelo menos uma mensagem...`);

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        });

        message.channel.send(`Sucesso! <@!${message.author.id}> deletou ${amount} mensagens!`);
    }
}