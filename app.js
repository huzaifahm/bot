const Discord = require('discord.js');
const client = new Discord.Client(); 
const settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
})

var prefix = "%"
client.on('message', message => {
//  if (!message.content.startsWith(prefix)) return;
  console.log('I see you 1');
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'ping')) {
      message.channel.sendMessage('pong');
  }
}):

client.on('message', message => {
 // if (!message.content.startsWith(prefix)) return;
  console.log('I see you 2');
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'ping')) {
      message.channel.sendMessage('pong');
  }
}):

client.login(token);
