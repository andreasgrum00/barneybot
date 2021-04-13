const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Expulsa o usuário mencionado',

    async run (bot, message, args) {
        if (!args[0]) {
            message.channel.send("Especifique qual usuário deve ser banido! Ex: !!ban @Test#3333 (Motivo)");
            return;
        } else if (!message.member.roles.cache.has('leru leru') && !message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("Você não tem permissão para executar esse comando!");
            return;
        }
        
        const user = message.mentions.members.first();
        if (!user) return message.channel.send("Usuário inválido!");
        const username = user.displayName;
    
        args.shift();
        args = args.join([separator = ' ']);
        if (user) user.kick(args); else return;
        message.channel.send(`${username} kickado por: <@${message.author.id}>\nMotivo: ${args}`);
    }
}
