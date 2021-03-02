module.exports = {
	name: 'addPerson',
	description: 'add 1 to Usage',
	async execute(message, args) {


		try {
		// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
		const tag = await Tags.create({
			username: message.author.username,
			usage_count: 1,
		});
		return message.reply(`This is ${tag.username} first item.`);
		}
		catch (e) {
			//console.log(e.name);
			if (e.name === 'SequelizeUniqueConstraintError') {
					const tag = await Tags.findOne({ where: { username: message.author.username } });
						if (tag) {
						// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';

						tag.increment('usage_count');
						return;
						}
			}
			else{
			return message.reply('Shit has hit the fan.');
			}
			}


		
		
	},
};