module.exports = {
	name: 'timeLocked',
	description: 'Lock',
	async execute(message, args) {
		const Discord = require('discord.js');

        const tagList = await Tags.findAll({order: [
            ['usage_count', 'DESC'],
        	],
        });
		const tagString = tagList.map(t => t.username) || 'No tags set.';
		const tagCount = tagList.map(t => t.usage_count) || 'No tags set.';
		
		const scoreboardEmbed = new Discord.MessageEmbed()
			.setColor('#A62019')
			.setTitle('Unfortunately Christmas has Ended')

			//console.log(tagList);

			scoreboardEmbed.setDescription('All of the creatures have been gifted by your generosity. They will no longer spawn and knock on your doors. \n Thanks for playing :)');
			scoreboardEmbed.addFields({name: 'The Final Scoreboard Is: ',value: '\u200B'},);

			var i;
			for (i=0; i< tagString.length; i++) {
  				let title = tagString[i]
 				scoreboardEmbed.addFields({ name: (i+1) + ')  ' + '**' + tagString[i] + '** ', value: 'Items: (' + tagCount[i] + ')'},)//{ name: 'User: ' + tagString[i] + '    Items: ' + tagCount})
			}
		return message.channel.send(scoreboardEmbed);
	},
};