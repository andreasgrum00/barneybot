const Discord = require('discord.js');
let rps = ["**:pencil: Papel**", "**:moyai: Pedra**", "**:scissors: Tesoura**"];
function random() {
	return `${rps[Math.floor(Math.random() * Math.floor(2))]}!`;
}

module.exports = {
    name: 'ppt',
    description: 'É um pedra, papel e tesoura, basicamente',

    async run (bot, message, args) {
        let choice = args.join(" ").toLowerCase();
		if (choice === "")
			return message.reply("Por favor, escolha Pedra, Papel ou Tesoura");
		if (choice !== "pedra" && choice !== "papel" && choice !== "tesoura")
			return message.reply(
				`Por favor, escolha Pedra, Papel ou Tesoura. ${choice} não é uma delas`
			);
		message.channel.send(random());
    }
}