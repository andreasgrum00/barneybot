// CARREGANDO PACOTES

const Discord = require('discord.js');

const fs = require('fs');
const { join } = require('path');

const ChessWebAPI = require('chess-web-api');
const chessAPI = new ChessWebAPI(); 
const { Chess } = require('chess.js');
const chess = new Chess();

require('dotenv').config();

// CONFIG BOT

const config = require('./config.json');

const bot = new Discord.Client();
const prefix = config.prefix;

bot.commands = new Discord.Collection();

// COMMAND HANDLER

const commandFiles = fs.readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

// SETUP BOT

bot.on('ready', async () => {
    bot.user.setStatus('online');
    bot.user.setActivity('!!help');

    console.log(`O Bot foi logado como ${bot.user.tag}`);
});

// CHECKANDO MENSAGENS

bot.on('message', async message => {
    // COMMAND HANDLER

    if(message.author.bot) return;
    
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        try {
            bot.commands.get(command).run(bot, message, args);

        } catch (error){
            console.log(error);
        }
    }

    // AVISANDO PREFIXO

    if(message.content === `<@!${bot.user.id}>`) return message.reply(`o meu prefixo é **_${config.prefix}_**`);
});

bot.login(config.token);
