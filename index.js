const Discord = require('discord.js');

const got = require('got');
const enmap = require('enmap');
const Database = require('@replit/database');
const Weather = require('weather-js');
const db = require('quick.db');

const client = new Discord.Client();
const ownerid = '758298255389097984';

//etc
client.write = require('./Message.json');
const data = new Database();

//command handler
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync('./Commands/')
	.filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
        let prefix

	if (db.get(`prefix_${message.guild.id}`) === null) {
		prefix = ':';
	} else {
		prefix = db.get(`prefix_${message.guild.id}`);
	}

	if (!message.content.startsWith(prefix)) return;

	let args = message.content.slice(prefix.length).split(/ +/);
	let command = args.shift().toLowerCase();

	//------
	if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'say') {
		var text = message.content
			.split(' ')
			.slice(1)
			.join(' ');
		if (!text) return message.reply('Tolong beri aku kata kata!!!!!!');
		message.channel.send(text);
		message.channel.bulkDelete(1);
	} else if (message.content === `${prefix}fruits`) {
		message.react('🍎');
		message.react('🍊');
		message.react('🍇');
		message.react('🍉');
	} else if (command === 'help') {
		client.commands.get('help').execute(message, args);
	} else if (command === 'meme') {
		client.commands.get('meme').execute(message, args);
	} else if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === 'clearms') {
		if (message.member.hasPermission('ADMINISTRATOR')) {
			message.channel.messages.fetch().then(results => {
				message.channel.bulkDelete(results);
			});
		}
	} else if (command === 'serverscount') {
		client.guilds.cache.forEach(guild => {
			message.channel.send(
				`${guild.name} has a total of ${guild.memberCount} members`
			);
		});
	} else if (command === 'uptime') {
		client.commands.get('uptime').execute(message);
	} else if (command === 'serverinfo') {
		const { guild } = message;

		const { name, region, memberCount, owner, afkTimeout } = guild;
		const icon = guild.iconURL();

		const embed = new Discord.MessageEmbed()
			.setTitle(`Server info for "${name}"`)
			.setThumbnail(icon)
			.addFields(
				{
					name: 'Region',
					value: region
				},
				{
					name: 'Members',
					value: memberCount
				},
				{
					name: 'AFK Timeout',
					value: afkTimeout / 60
				}
			);

		message.channel.send(embed);
	} else if (command === 'playttt') {
		client.commands.get('tictactoe').execute(message, args);
	} else if (command === 'eval') {
		const { member, channel, content } = message;

		if (member.id === ownerid) {
			const result = eval(content.replace(':eval ', ''));
			channel.send(result);
		}
	} else if (command === 'math') {
		client.commands.get('math').execute(message, args);
	} else if (command === 'agl') {
		client.commands.get('agl').execute(message, args);
	} else if (command === '8ball') {
		client.commands.get('8ball').execute(message, args);
	} else if (command === 'randnum') {
		client.commands.get('rand').execute(message, args, Discord);
	} else if (command === 'savemsg') {
		editmessage = message.content.slice(6);

		client.write[message.author.username] = {
			save: message.content
		};
		//write
		fs.writeFile(
			'./Message.json',
			JSON.stringify(client.write, null, 4),
			err => {
				if (err) throw err;
				message.channel.send('savemsg is: ' + message.content);
			}
		);
	} else if (command === 'loadmsg') {
		let _message = client.write[message.author.username].save;
		message.channel.send('load is: ' + _message);
	} else if (command === '') {
		message.reply('error');
	} else if (command === 'chat') {
		client.commands.get('chat').execute(client, message, args);
	} else if (command === 'weather') {
		client.commands.get('weather').execute(message, args, Discord, Weather);
	} else if (command === 'prefix') {
		client.commands.get('prefixes').execute(message, args, db);
	} else if (command === 'startgame') {
		client.commands.get('start').execute(message, args, db);
	} else if (command === 'buy') {
		client.commands.get('buy').execute(message, args, db);
	} else if (command === 'bal') {
		client.commands.get('bal').execute(message, args, db, Discord, prefix);
	} else if (command === 'attack') {
		client.commands.get('attack').execute(message, args, db);
	} else if (command === 'work') {
		client.commands.get('work').execute(message, args, db);
	} else if (command === 'hyprelinks') {
		message.channel.send(`[this is the display text](https://google.com)`);
	} else if (command === 'hyperlinksembed') {
		const embed = new Discord.MessageEmbed()
			.setTitle('[this is the display text](https://www.google.com)')
			.setDescription('[text](https://www.google.com)')
			.setFooter(`[text](https://www.google.com)`);

		message.channel.send(embed);
	} else if (command === 'args') {
		if (!args.length) {
			return message.reply('input not found');
		}

		message.channel.send(`command name: ${command}\nargs: ${args}`);
	} else if (command === 'ascii') {
		client.commands.get('ascii').execute(client, message, args);
	} else if (command === 'restart') {
                if (message.author.id != ownerid) return message.reply('you not an owner')
                
                await message.channel.send('restarting')
                process.exit()
});

client.login('your-cool-token');
