const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'covid',
    description: 'Mostra casos de Covid-19, mortes, etc.',

    async run (bot, message, args) {
        let countries = args.join(" ");
        const noArgs = new Discord.MessageEmbed()
        .setTitle(`Não há argumentos depois do comando!`)
        .setColor("#6b2c85")
        .setDescription(`Coloque argumentos pra executar esse comando! Ex.: !!covid Canada (Obs: O nome do país tem que ser em inglês)`)
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all") {
            fetch("https://covid19.mathdro.id/api")
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle('Status da COVID-19 Globalmente')
                .addField('Casos Confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Status da COVID-19 em **${countries}**`)
                .addField('Casos Confirmados', confirmed)
                .addField('Recuperados', recovered)
                .addField('Mortes', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send(`**País inválido! Verifique se o nome do país está escrito corretamente**`);
            })
        }
    }
}
