module.exports = {
    name: 'Beep',
    description: 'Beep!',
    execute(message, args) {
        message.channel.send('Boop.');
    },
};
