import { Application, Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message) => {
    // console.log(message.content);

    if(message.author.bot) return;  // if bot's message then don't reply

    message.reply({
        content: "Hi from GigaBOT 🗿"
    })
});

client.on('interactionCreate', (interaction) => {
    // console.log(interaction);

    interaction.reply('Pong!!!')
})

client.login(
    process.env.TOKEN
);