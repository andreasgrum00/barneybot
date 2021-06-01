const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Toca a música que você deseja',

    async run (bot, message, args) {
        const vC = message.member.voice.channel;

        if(!vC) return message.channel.send(`Você precisa estar em um canal de voz pra tocar música`);

        const permissions = vC.permissionsFor(message.client.user);

        if(!permissions.has('CONNECT')) return message.reply(`Eu não tenho permissões para interagir com este canal`);
        if(!permissions.has('SPEAK')) return message.reply(`Eu não tenho permissões para interagir com este canal`);
        if(!args.length) return message.reply(`Você precisa mandar um link ou o nome de uma música`);

        const connection = await vC.join();
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;   
        }

        const video = await videoFinder(args.join(" "));

        if(video) {
            const stream = ytdl(video.url, { filter: 'audioonly' });
            connection.play(stream, { seek: 0, volume: 1 })
            .on('finish', () => {
                vC.leave();
            })

            let embed = new Discord.MessageEmbed()
            .setAuthor(bot.user.tag, bot.user.avatarURL())
            .setTitle(`:thumbsup: Tocando Agora ***${video.title}***`)
            .setURL(video.url)
            .setThumbnail()
            .setTimestamp()
            .setFooter(`Pedido de música por ${message.author.tag}`, message.author.avatarURL())
            .setColor("#6b2c85")

            await message.channel.send(embed);
        } else {
            message.channel.send(`Não encontrei nenhum vídeo sobre isso...`);
        }
    }
}