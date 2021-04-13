const Discord = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');
const avatares = ['https://i.imgur.com/b4BosST.png', 'https://i.imgur.com/f5jR6kg.png', 'https://pbs.twimg.com/profile_images/709356708/barney_icon_400x400.jpg'];
const avatar = avatares[Math.floor(Math.random() * avatares.length)];

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
    
    var interval = setInterval (function () {
        bot.user.setAvatar(avatar)
        .catch(console.error);
    }, 300000);
});

bot.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Bem-vindo(a), ${member.user.tag}`)
    .setAuthor(bot.user.tag)
});

bot.on('message', async message => {
    const grumm = bot.users.cache.get('417829177757007872');

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return grumm.send(`${message.author.tag} (id: ${message.author.id}) disse: "${message.content}"`);
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

    /*
    const fp = ['nigga', 'nigger', 'n1gga', 'n1gger', 'n1gg4', 'n1gg3r', 'nigg4', 'nigg3r'];
    const frases = ['o bosta do', 'o doente do', 'o merda do', 'o racista de bosta do', 'o vagabundo do', 'o retardado mental do', 'o puto do', 'o infeliz do'];
    const frase = Math.floor(Math.random() * frases.length);
    const nha = bot.users.cache.get('609574600795357184');
    const grumm = bot.users.cache.get('417829177757007872');

    if(message.content.includes(fp)){
        nha.send(`Ei, ${frase} <@!${message.author.id}> falou a N-Word em uma mensagem na Taverna da Nayuu! Respeito é algo que todos devemos ter com o próximo... (Conteúdo da mensagem: ${message.author.tag}: "${message.content}")`);
        grumm.send(`Ei, ${frase} <@!${message.author.id}> falou a N-Word em uma mensagem na Taverna da Nayuu! Respeito é algo que todos devemos ter com o próximo... (Conteúdo da mensagem: ${message.author.tag}: "${message.content}")`);
        message.author.send(`Que papo é esse de que tu falou a N-Word na Taverna da Nayuu? Já avisei pra administradora do server, beleza? Ela faz o resto do trabalho...`);
    }
    */
});

bot.login(config.token);
