const Discord = require('discord.js');
const axios = require('axios');
const fetch = require('node-fetch');

module.exports = {
    name: 'trade',
    description: 'Vê as estatísticas sobre a bolsa de valores',

    async run (bot, message, args) {
        const moeda = args[0];

        if(!moeda) return message.reply(`Você precisa colocar a sigla de uma moeda como argumento. Ex.: BTC, BCH, ETH, etc`);

        fetch(`https://www.mercadobitcoin.net/api/${moeda}/ticker`)
        .then(response => response.json())
        .then(data => {
            let high = data.ticker.high.toLocaleString()
            let low = data.ticker.low.toLocaleString()
            let vol = data.ticker.vol.toLocaleString()
            let last = data.ticker.last.toLocaleString()
            let buy = data.ticker.buy.toLocaleString()
            let sell = data.ticker.sell.toLocaleString()

            let embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle(`Dados sobre a moeda ${moeda}`)
            .addFields(
                { name: 'Maior preço unitário de negociação das últimas 24 horas', value: high, inline: false },
                { name: 'Menor preço unitário de negociação das últimas 24 horas', value: low, inline: false },
                { name: 'Quantidade negociada nas últimas 24 horas', value: vol, inline: false },
                { name: 'Preço unitário da última negociação', value: last, inline: false },
                { name: 'Maior preço de oferta de compra das últimas 24 horas', value: buy, inline: false },
                { name: 'Menor preço de oferta de venda das últimas 24 horas', value: sell, inline: false },
            )
            .setTimestamp()
            .setColor(`#851465`)
            .setThumbnail(`https://einvestidor.estadao.com.br/wp-content/uploads/sites/715/2020/11/closeupofethereumlitecoinandbitcoinstackofpkshpjz_201120205255.jpg`)
            message.channel.send(embed);
        }).catch(err => {
            console.log(err)
            message.channel.send(`Ops! Acho que algo deu errado: ${err}`)
        })
    }
}