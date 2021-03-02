module.exports = {
    name: 'help',
    description: 'help stuff',
    execute(message, args) {
 
        message.channel.send({embed: {
            title: "Christmas Bot Help",
            fields: [
                {name: 'c!help', value: 'The syntax of the help command is [ c!help ]\nThe bot will then send this message detailing all of the commands that it supports and how to use them.'},
                {name: 'c!start', value: 'The syntax of the start command is [ c!start ]\nThe bot will then start to listen for messages and return christmas stuff.'},
                {name: 'c!gift', value: 'The syntax of the gift command is [ c!gift ]\nThis is used for Christmas messages to gain items.'},
                {name: 'c!coal', value: 'The syntax of the coal command is [ c!coal ]\nThis is used for Christmas messages to gain items.'},
                {name: 'c!score', value: 'The syntax of the scoreboard command is [ c!score ]\nDisplays the full scoreboard showing ranks of everyone in the server'}
            ]
        }})

    },
};
