module.exports = {
	name: 'characterPull',
	description: 'find a character',
	execute(message, messageSelect, editMode, user) {
		const Discord = require('discord.js');

		function randomIntFromInterval(min, max) { // min and max included 
    		return Math.floor(Math.random() * (max - min + 1) + min);
		}

		function randomItem(){
			var sel = randomIntFromInterval(1,25);
			switch(sel){
				case 1:
					return ' ***A partridge in a pear tree***';
					break;
				case 2:
					return ' ***A Tesla***';
					break;
				case 3:
					return ' ***A puppy***';
					break;
				case 4:
					return ' ***A pony***';
					break;
				case 5:
					return ' ***A snowglobe***';
					break;
				case 6:
					return ' ***An ornament***';
					break;
				case 7:
					return ' ***A drummer boy***';
					break;
				case 8:
					return ' ***A lego set***';
					break;
				case 9:
					return ' ***A drone***';
					break;
				case 10:
					return ' ***A  Large Panzer IV F2 Tiger Tank***';
					break;
				case 11:
					return ' ***A Moby Huge***';
					break;
				case 12:
					return ' ***A stuffed elephant***';
					break;
				case 13:
					return ' ***Cyberpunk 2077***';
					break;
				case 14:
					return ' ***An amazon giftcard***';
					break;
				case 15:
					return ' ***A block of cheese***';
					break;
				case 16:
					return ' ***A peice of coal***';
					break;
				case 17:
					return ' ***A puertorican cocaine slave***';
					break;
				case 18:
					return ' ***A microscope***';
					break;
				case 19:
					return ' ***A football***';
					break;
				case 20:
					return ' ***A redrider BB gun***';
					break;
				case 21:
					return ' ***An airsoft gun***';
					break;
				case 22:
					return ' ***A switch***';
					break;
				case 23:
					return ' ***A poster***';
					break;
				case 24:
					return ' ***A bodypillow***';
					break;
				case 25:
					return ' ***pocketpussy***';
					break;
				}
		}

		var randomNum = randomIntFromInterval(1, 14);
		
		
		if (editMode == 0){
			saveRoll = randomNum;
			
		switch(randomNum){
			case 1 : {
				// inside a command, event listener, etc.
				const bitSanta = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778800784225468416/Santa.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return bitSanta;
				break;
			}
			case 2 : {
				const animeSanta = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778800245509324840/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-pre.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return animeSanta;
				break;
			}
			case 3 : {
				const cheeseMan = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778799659342102528/the_big_cheese.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return cheeseMan;
				break;
			}
			case 4 : {
				const susSanta = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://www.citypng.com/public/uploads/preview/-41603940146j1ohjgni6c.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return susSanta;
				break;
			}
			case 5 : {
				const snowman = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784668896002834463/snowman.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return snowman;
				break;
			}
			case 6 : {
				const datboi = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://w7.pngwing.com/pngs/127/571/png-transparent-t-shirt-dat-boi-internet-meme-spreadshirt-dab-moment-bicycle-vertebrate-vehicle-thumbnail.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return datboi;
				break;
			}
			case 7 : {
				const luigi = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://www.pngkit.com/png/detail/956-9560181_walgruigi-gru-waluigi-freetoedit-have-you-bring-upon.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return luigi;
				break;
			}
			case 8 : {
				const steve = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784679622063161344/Aa4T75yJ3BM26BAMqPBxe3k4TYtj27Y7bcx58aMgZeenoQxrqJvKq99iSlX1KOD10QGcpaSlnpkMGvsE1D9_w.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return steve;
				break;
			}
			case 9 : {
				const santaRevenge = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784680038166822912/NdN7zeQ.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return santaRevenge;
				break;
			}
			case 10: {
				const blaze = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784679730925666314/0ogm89gpik241.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return blaze;
				break;
			}
			case 11: {
				const herobrine = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://lh3.googleusercontent.com/cv_qlnbUSNppwseL5ezxVmtAm505mMRxat2oyiQ783RjEOHeTwhSNZiyxSkCO20_XfZPC9ufyBUFX-xwvvP4=s400')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return herobrine;
				break;
			}
			case 12: {
				const car = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784681777222254592/jc3kokzvz2x31.png')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return car;
				break;
			}
			case 13: {
				const snowmanCute = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://www.drawyouapicture.com/wp-content/uploads/2018/10/snowman.jpg')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return snowmanCute;
				break;
			}
			case 14: {
				const penguin = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Merry Christmas!')
					.setDescription('Quick! reply with ' + messageSelect + ' to give them a gift!')
					.setImage('https://www.drawyouapicture.com/wp-content/uploads/2018/10/penguin.jpg')
					.setTimestamp()
					.setFooter('Ho Ho Ho');
				
				return penguin;
				break;
			}
		}





		
		} 
		else if (editMode == 1){
			switch(saveRoll){
				case 1 : {
					// inside a command, event listener, etc.
					const bitSanta = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setDescription(user.toString() + ' Has gained the item' + randomItem())
						.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778800784225468416/Santa.png')
						.setTimestamp()
						.setFooter('Merry Christmas!');
					
					return bitSanta;
					break;
				}
				case 2 : {
					const animeSanta = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778800245509324840/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-pre.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return animeSanta;
					break;

				}
				case 3 : {
					const cheeseMan = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778799659342102528/the_big_cheese.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return cheeseMan;
					break;
				}
				case 4 : {
					const susSanta = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://www.citypng.com/public/uploads/preview/-41603940146j1ohjgni6c.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return susSanta;
					break;
				}
				case 5: {
					const snowman = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784668896002834463/snowman.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return snowman;
					break;
				}
				case 6: {
					const datboi = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://w7.pngwing.com/pngs/127/571/png-transparent-t-shirt-dat-boi-internet-meme-spreadshirt-dab-moment-bicycle-vertebrate-vehicle-thumbnail.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return datboi;
					break;
				}
				case 7: {
					const luigi = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://www.pngkit.com/png/detail/956-9560181_walgruigi-gru-waluigi-freetoedit-have-you-bring-upon.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return luigi;
					break;
				}
				case 8: {
					const steve = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784679622063161344/Aa4T75yJ3BM26BAMqPBxe3k4TYtj27Y7bcx58aMgZeenoQxrqJvKq99iSlX1KOD10QGcpaSlnpkMGvsE1D9_w.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return steve;
					break;
				}
				case 9: {
					const santaRevenge = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784680038166822912/NdN7zeQ.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return santaRevenge;
					break;
				}
				case 10: {
					const blaze = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784679730925666314/0ogm89gpik241.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return blaze;
					break;
				}
				case 11: {
					const herobrine = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://lh3.googleusercontent.com/cv_qlnbUSNppwseL5ezxVmtAm505mMRxat2oyiQ783RjEOHeTwhSNZiyxSkCO20_XfZPC9ufyBUFX-xwvvP4=s400')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return herobrine;
					break;
				}
				case 12: {
					const car = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784681777222254592/jc3kokzvz2x31.png')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return car;
					break;
				}
				case 13: {
					const snowmanCute = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://www.drawyouapicture.com/wp-content/uploads/2018/10/snowman.jpg')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return snowmanCute;
					break;
				}
				case 14: {
					const penguin = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription(user.toString() + ' Has gained the item' + randomItem())
					.setImage('https://www.drawyouapicture.com/wp-content/uploads/2018/10/penguin.jpg')
					.setTimestamp()
					.setFooter('Merry Christmas!');
				
					return penguin;
					break;
				}

			}

		}






		else if (editMode == 2){
			switch(saveRoll){
				case 1 : {
					// inside a command, event listener, etc.
					const bitSanta = new Discord.MessageEmbed()
						.setColor('#0099ff')
						.setDescription("**That's the wrong command! they ran away **")
						.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778800784225468416/Santa.png')
						.setTimestamp()
						.setFooter('Better luck next time');
					
					return bitSanta;
					break;
				}
				case 2 : {
					const animeSanta = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778800245509324840/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-pre.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return animeSanta;
					break;

				}
				case 3 : {
					const cheeseMan = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://cdn.discordapp.com/attachments/596180639028346893/778799659342102528/the_big_cheese.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return cheeseMan;
					break;
				}
				case 4: {
					const susSanta = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://www.citypng.com/public/uploads/preview/-41603940146j1ohjgni6c.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return susSanta;
					break;
				}
				case 5: {
					const snowman = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784668896002834463/snowman.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return snowman;
					break;
				}
				case 6: {
					const datboi = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://w7.pngwing.com/pngs/127/571/png-transparent-t-shirt-dat-boi-internet-meme-spreadshirt-dab-moment-bicycle-vertebrate-vehicle-thumbnail.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return datboi;
					break;
				}
				case 7: {
					const luigi = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://www.pngkit.com/png/detail/956-9560181_walgruigi-gru-waluigi-freetoedit-have-you-bring-upon.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return luigi;
					break;
				}
				case 8: {
					const steve = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784679622063161344/Aa4T75yJ3BM26BAMqPBxe3k4TYtj27Y7bcx58aMgZeenoQxrqJvKq99iSlX1KOD10QGcpaSlnpkMGvsE1D9_w.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return steve;
					break;
				}
				case 9: {
					const santaRevenge = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784680038166822912/NdN7zeQ.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return santaRevenge;
					break;
				}
				case 10: {
					const blaze = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784679730925666314/0ogm89gpik241.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return blaze;
					break;
				}
				case 11: {
					const herobrine = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://lh3.googleusercontent.com/cv_qlnbUSNppwseL5ezxVmtAm505mMRxat2oyiQ783RjEOHeTwhSNZiyxSkCO20_XfZPC9ufyBUFX-xwvvP4=s400')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return herobrine;
					break;
				}
				case 12: {
					const car = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://cdn.discordapp.com/attachments/772929053400367156/784681777222254592/jc3kokzvz2x31.png')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return car;
					break;
				}
				case 13: {
					const snowmanCute = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://www.drawyouapicture.com/wp-content/uploads/2018/10/snowman.jpg')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return snowmanCute;
					break;
				}
				case 14: {
					const penguin = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setDescription("**That's the wrong command! they ran away **")
					.setImage('https://www.drawyouapicture.com/wp-content/uploads/2018/10/penguin.jpg')
					.setTimestamp()
					.setFooter('Better luck next time');
				
					return penguin;
					break;
				}
			}
		}
	},
};
