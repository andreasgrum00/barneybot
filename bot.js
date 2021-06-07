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
    
    const grumm = bot.users.cache.get('417829177757007872');

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

    if(message.content.includes(`discord.gg`)){
        message.delete();
        message.channel.send(`<@!${message.author.id}>, tu sabe q ngm vai entrar nesse server q tu mandou, né?`)
        message.author.send(`Ih, ala KKKKKK. O cara acha que vai conseguir membro pra crl com divulgaçãozinha em servidor alheio KDKAWKDKWAKD. Tá enganado, feio.`);
        grumm.send(`Ow, o ${message.author.username} (id: ${message.author.id}) mandou divulgação no server ${message.guild.name} (id: ${message.guild.id}). Agr faz o resto do trabalho e dá um mute nesse pirralho`);
    }

    // AVISANDO PREFIXO

    if(message.content === `<@!${bot.user.id}>`) return message.reply(`o meu prefixo é **_${config.prefix}_**`);
});

bot.login(config.token);
