const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');

module.exports = () => {
    client.on('ready', () => console.log('Logged in'));

    client.on('message', (message) => {
        if(message.content.startsWith(`${prefix}test`)) {
            message.channel.send('Test!');
        }
    })

    client.login(process.env.TOKEN);
}

