const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: "help command!",
  execute(message, args){
    		message.channel.send('loading....').then(msg => {
			setTimeout(function() {
				msg.edit(
					`me prefix: : \ncommands:\nbeep customreaction\nfruits customreaction\nagl messagenormal\nsay say(not word = message error)\nserver your server info\nmeme meme\nand more....`
				);
			}, 10000);
		});
  }
};
