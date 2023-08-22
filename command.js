import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE0MzUzNTUzNDE0MTA5NjA5OA.GcANM9.3h2rfyELCJHAb8p3cdahDOr0JAQWGRsAVtj-7M");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1143535534141096098'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}