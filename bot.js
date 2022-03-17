const { Client, Intents } = require('discord.js');
const { token } = require('./config/auth.json');
 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('For Questions', { type: 'WATCHING' });
  client.channels.cache.get("954069762315534356")
          .send(`Ok, ok, I'm awake! Geez...`)
});

client.on('interactionCreate', async interaction => {
	console.log('interaction!');
  if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.on('messageCreate', msg => {
  if (msg.content === '!pingy') {
    msg('pongy');
    console.log('ping');
  } else if (msg.content === '!test') {
    msg('Good Test!');
  } else if (msg.content === '!1') {
    msg('1');
  } else if (msg.content === '!2') {
    msg('2');
  } else if (msg.content === '!3') {
    msg('3');
  } else if (msg.content === '!4') {
    msg('4');
  } else if (msg.content === '!stop') {
    msg.reply('Shutting Down...NOT!');
//    client.destroy();
  }
});

//make sure this line is the last line
client.login(token); //login bot using token