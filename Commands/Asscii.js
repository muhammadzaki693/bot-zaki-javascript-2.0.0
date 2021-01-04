const figlet = require('figlet');

module.exports = {
	name: 'ascii',
	description: 'Converts text to ascii',
	execute(client, message, args) {
		if (!args[0]) return message.channel.send('Please provide some text');

		msg = args.join(' ');

		figlet.text(msg, function(err, data) {
			if (err) {
				console.log('Something went wrong');
				console.log(err);
				message.channel.send('error: ' + err)
			}
			if (data.length > 20000)
				return message.channel.send(
					'Please provide text shorter than 20000 characters'
				);

			message.channel.send('```' + data + '```');
		});
	}
};
