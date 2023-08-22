import { Client, GatewayIntentBits } from 'discord.js';

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
    "MTE0MzUzNTUzNDE0MTA5NjA5OA.GcANM9.3h2rfyELCJHAb8p3cdahDOr0JAQWGRsAVtj-7M"
);