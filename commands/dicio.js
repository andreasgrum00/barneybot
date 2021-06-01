const fetch = require('node-fetch');
const Discord = require('discord.js');
const { default: axios } = require('axios');

module.exports = {
    name: 'dicio',
    description: 'Mostra o significado de uma palavra',

    async run (bot, message, args) {
        const palavra = args[0];

        if(!palavra) return message.reply(`diga uma palavra depois do comando, por favor...`);

        axios.get(`https://significado.herokuapp.com/meanings/${palavra}`)
        .then((res) => {
            let embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle(`Dicionário do BarneyBot`)
            .setDescription(`*${res.data[0].class}*`)
            .addFields(
                { name: `Significado de ${palavra}`, value: res.data[0].meanings[0] },
            )
            .setTimestamp()
            .setColor(`#851465`)
            .setThumbnail(`https://upload.wikimedia.org/wikipedia/pt/a/a6/Dicion%C3%A1rio_Aur%C3%A9lio_da_L%C3%ADngua_Portuguesa.jpg`)
            message.channel.send(embed)
        })
        .catch((err) => {
            console.log(`ERR: ` + err);
            message.channel.send(`Ops! Algo deu errado! Verifique se você digitou a palavra corretamente. Erro: ${err}`);
        })
    }
}
