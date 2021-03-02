module.exports = {
	name: 'error',
	description: 'Error throw!',
	execute(message, args) {
		message.channel.send('Sorry I can\'t do that right now');
	},
};