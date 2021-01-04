const { tictactoe } = require('reconlx');

module.exports = {
	name: 'tictactoe',
	execute(message, args) {
		const member = message.mentions.members.first();
		if (!member) return message.channel.send('please specify a member');

		new tictactoe({
			player_two: member,
			message: message
		});
	}
};
