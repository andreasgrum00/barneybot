const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'shiba',
    description: 'Mostra uma foto aleatória de um Shiba Inu',

    async run (bot, message, args){
        const { body } = await superagent.get(
			`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`
		);

		const embed = new Discord.MessageEmbed()
			.setColor(Math.floor(Math.random() * 16777215))
			.setImage(body[0])
			.setTimestamp()
			.setFooter(`Link: ${body[0]}`);
		message.channel.send({ embed });
    }
}