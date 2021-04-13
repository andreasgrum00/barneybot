const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'O BarneyBot irá responder suas perguntas!',

    async run (bot, message, args) {
        const pergunta = args.join(" ");
        const user = message.guild.members.cache.random();
        if (!pergunta) return message.reply("Por favor, faça uma pergunta depois do comando. Ex.: !!8ball Tudo bem com você?");
        let respostas = [
            "Talvez",
            "Certamente não",
            "Espero que sim",
            "Nem a pau",
            "Há uma boa chance",
            "Bem provável",
            "Acho que sim",
            "Espero que não",
            "Acho que não",
            "Nunca!",
            "Já tentou apagar teu system32?",
            "Nem sonhando",
            "Óbvio!",
            "Nem f*dendo",
            "Aí não sei, cara",
            `Não sei, pergunta pro(a) <@!${user.id}>`,
            "Prefiro não dizer",
            "Quem se importa?",
            "É bem possível",
            "Nop :P",
            "Há uma pequena chance",
            "Sim!",
            "Não KKKKKKKKKKK",
            "Há uma grande probabilidade",
            "Que diferença isso faz?",
            "Isso não é problema meu",
            "Sei lá",
        ];

        let resposta = Math.floor(Math.random() * respostas.length);

        let embed = new Discord.MessageEmbed()
        .setTitle("8Ball do BarneyBot")
        .setColor("RANDOM")
        .addField("Pergunta:", pergunta)
        .addField("Resposta:", respostas[resposta])
        .setTimestamp()
        .setThumbnail(`https://www.casadehoodoo.com/wp-content/uploads/2019/08/IMG_3011.jpeg`)
        .setFooter(`Resposta feita por ${message.author.tag}`);

        message.channel.send(embed);
    }
}