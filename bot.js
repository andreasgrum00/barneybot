const Discord = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');

const config = require('./config.json');

const bot = new Discord.Client();
const prefix = config.prefix;
bot.commands = new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    bot.user.setStatus('online');
    
    bot.user.setActivity('!!help');

    console.log(`O Bot foi logado como ${bot.user.tag}`);
});

bot.on('message', async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        try {
            bot.commands.get(command).run(bot, message, args);

        } catch (error){
            console.log(error);
        }
    }
    if(message.content === `<@!${bot.user.id}>`){
        message.reply(`o meu prefixo é **_${config.prefix}_**`);
    }
});

bot.login(config.token);
