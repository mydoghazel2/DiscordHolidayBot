const fs = require('fs');
const { prefix, token } = require('./config.json');

// Import the discord.js module
const Discord = require('discord.js');

//Start Sequalize
const Sequelize = require('sequelize');

// Create an instance of a Discord client
const client = new Discord.Client();




//start sequalize connection
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

//make a table
global.Tags = sequelize.define('tags', {
	username: { 
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});








function isDayOkay() { // min and max included 


	//UTC TIME
	const endTime = new Date('2021-01-01T13:00:00.000Z');
	const startTime = new Date();

	//console.log(startTime);
	//console.log(endTime);
	//console.log(startTime < endTime);



    if (startTime == endTime){
    	//console.log("time");
    	return false;
    }
    else if (startTime < endTime){
    	//console.log("before time");
    	return true;
    }
    else if (startTime > endTime) {
    	//console.log("after time");
    	return false;
    }
    else{
    	console.log("if you see this, shit hit the fan");
    }
    

}







//boolean flags
var started = 0;
var listenFlag = false;
var currentListening = false;
var timeLock = false;




// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
	Tags.sync();

  console.log('I am ready!');
});




//looks for command files
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.characters = new Discord.Collection();
const characterFiles = fs.readdirSync('./characters').filter(file => file.endsWith('.js'));

for (const file of characterFiles) {
	const character = require(`./characters/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.characters.set(character.name, character);
}

client.database = new Discord.Collection();
const databaseFiles = fs.readdirSync('./database').filter(file => file.endsWith('.js'));

for (const file of databaseFiles) {
	const database = require(`./database/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.database.set(database.name, database);
}


// Create an event listener for messages
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  	// If the message is "ping"
  	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (command === 'start' && started == 0) {
		client.commands.get('start').execute(message,args);
		started = 1;
	} else if (command === 'start' && started == 1) {
		client.commands.get('error').execute(message,args);
	} else if (command === 'score') {
		client.commands.get('score').execute(message,args);
	} else if (command === 'help') {
		client.commands.get('help').execute(message,args);
	}
});




var messageSelect = "";
var selector = 0;
var messageToListenFor = "";
var areWeLookingForAResponse = false;

//character pusher

client.on('message', message => {

	if (started == 1 && !listenFlag && !currentListening && !areWeLookingForAResponse){
		currentListening = true;
		setTimeout(function(){ 
		listenFlag = true;
		currentListening = false;
		console.log('listen is true');
		}, randomIntFromInterval(300000, 600000));
	}


//For the actual children
	if(!message.content.startsWith(prefix) && started == 1 && listenFlag && isDayOkay()){
		var min = 1;
		var max = 2;
		selector = Math.floor(Math.random() * (max - min + 1) + min);

		switch(selector){
			case 1 : {
				messageSelect =  "**c!coal**";
				messageToListenFor = "coal";
				areWeLookingForAResponse = true;
				break;
			}
			case 2 : {
				messageSelect =  "**c!gift**";
				messageToListenFor = "gift";
				areWeLookingForAResponse = true;
				break;
			}
		}

		message.channel.send(client.characters.get('characterPull').execute(message, messageSelect, 0)).then(sent => { // 'sent' is that message you just sent
  		id = sent.id;
  		console.log('bot send message at id: ' + id);
		});
		

       listenFlag = false;
	}
});




//response listener
client.on('message', async message => {
	if (message.content.startsWith(prefix) && areWeLookingForAResponse && isDayOkay()){ 
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();
		const user = message.author;

		if (command === 'coal' && messageToListenFor == "coal") {
			//message.channel.send('Nice');


			client.database.get('addPerson').execute(message, args);

			areWeLookingForAResponse = false;
			message.channel.messages.fetch(id).then(messages => {
    			messages.edit(client.characters.get('characterPull').execute(message, messageSelect, 1, user));
  			});;

		} else if (command === 'gift' && messageToListenFor == "gift") {
			//message.channel.send('Nice');

			client.database.get('addPerson').execute(message, args);

			areWeLookingForAResponse = false;
			message.channel.messages.fetch(id).then(messages => {
    			messages.edit(client.characters.get('characterPull').execute(message, messageSelect, 1, user));
  			});;

		} else{
			//message.channel.send('Big Dummy');
			if(command !== 'score' || command !== 'help'){
			areWeLookingForAResponse = false;
			message.channel.messages.fetch(id).then(messages => {
    			messages.edit(client.characters.get('characterPull').execute(message, messageSelect, 2, user));
  			});;
			}
		}

	}
});


client.on('message', async message => {
	if (!message.content.startsWith(prefix) && !isDayOkay() && timeLock == false){ 
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();
		const user = message.author;

		message.channel.send('**CHRISTMAS HAS COME TO A CLOSE**');	
		//timeLocked();	
		client.commands.get('timeLocked').execute(message,args);
		timeLock = true;

	}
});

function randomIntFromInterval(min, max) { // min and max included 
    		return Math.floor(Math.random() * (max - min + 1) + min);
}



// Log our bot in
client.login(token);