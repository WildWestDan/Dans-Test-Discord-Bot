const { Client, Intents } = require('discord.js');
const { token } = require('./auth/auth.json');
 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('For Questions', { type: 'WATCHING' });
  client.channels.cache.get("954069762315534356")
          .send('<a:TargetAnim:927671875834875974>')
});

client.on('messageCreate', msg => {
  if (msg.content === '!ping') {
    msg.channel.send('pong');
    console.log('ping');
  } else if (msg.content === '!test') {
    msg.channel.send('Good Test!');
  } else if (msg.content === '!1') {
    msg.channel.send('1');
  } else if (msg.content === '!2') {
    msg.channel.send('2');
  } else if (msg.content === '!3') {
    msg.channel.send('3');
  } else if (msg.content === '!4') {
    msg.channel.send('4');
  } else if (msg.content === '!stop') {
    msg.channel.send('Shutting Down...NOT!');
    process.exit();
  }
});

/*
!actions
!backlog
!backup
!botaccount
!commandrunning
!discordtag
!delay
!logs
!mods
!multimonitor
!obsstudio
!overlay
!platforms
!preview
!settings
!si
!sr
!uninstall
!unlockcommand
!wait
!whispers
!wiki 
*/

//make sure this line is the last line
client.login(token); //login bot using token