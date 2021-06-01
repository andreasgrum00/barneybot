const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converte texto em ascii",

    async run (bot, message, args){
        if(!args[0]) return message.channel.send('Por favor, coloque um texto depois do comando...');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log(`Algo deu errado`);
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Por favor, digite um texto menor que 2000 caracteres...')

            message.channel.send('```' + data + '```')
        })
    }
}