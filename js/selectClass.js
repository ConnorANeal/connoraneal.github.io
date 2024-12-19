
function selectClass() {
	
    var mySelector = document.getElementById("chosen-class");
    var myValue = mySelector.value;
	
	var parent = document.getElementById("class-description-div");
	const title = document.createElement('h2');
	const description = document.createElement('p');
    
	if (myValue == "choose") {
		/* NO OPTION PICKED */
		
		title.innerHTML = 'Class Description -';
        description.innerHTML = 'Pick a class to see its description.';
		
    } else if (myValue == "artificer") {
		/* ARTIFICER */
		
		title.innerHTML = 'Class Description - Artificer';
		description.innerHTML = 'An artificer is a half casting class that specializes in the use of magical items. Due to the versatility of an artificer\'s different abilities, they are capable of being either a front line combatant or a support player.';
        
    } else if (myValue == "barbarian") {
		/* BARBARIAN */
		
		title.innerHTML = 'Class Description - Barbarian';
		description.innerHTML = 'Barbarians are tough combatants that are fueled by their rage. When they rage, their attacks become stronger and they become much more difficult for enemies to take down.';
        
    } else if (myValue == "bard") {
		/* BARD */
		
		title.innerHTML = 'Class Description - Bard';
		description.innerHTML = 'Bards use music and dance to create magic. Through their artistic spellcasting they offer valuable support to their teammates and sometimes can deliver some heavy magical attacks.';
        
    } else if (myValue == "cleric") {
		/* CLERIC */
		
		title.innerHTML = 'Class Description - Cleric';
		description.innerHTML = 'Clerics are most famously known as the healers in D&D. They draw on the power of divinity, casting spells which often focus on healing and otherwise supporting their allies.';
        
    } else if (myValue == "druid") {
		/* DRUID */
		
		title.innerHTML = 'Class Description - Druid';
		description.innerHTML = 'Druids draw on the power of nature to cast spells and create other magical effects. Many of their spells reflect their connection to nature, often one of the common elements in nature: fire, air, earth, and water. Druids also use their magic to transform into animals, making them extremely versatile in the battlefield.';
        
    } else if (myValue == "fighter") {
		/* FIGHTER */
		
		title.innerHTML = 'Class Description - Fighter';
		description.innerHTML = 'Fighters take time to train in many different martial styles, making themselves versatile combatants. They often rely on nothing but their sword or bow to get the job done in combat.';
        
    } else if (myValue == "monk") {
		/* MONK */
		
		title.innerHTML = 'Class Description - Monk';
		description.innerHTML = 'Monks are combatants that have spent years in a monestary or otherwise honing their martial skills. Often fighting only with their fists, they are fast attackers that sometimes draw on their Ki power to enhance their attacks.';
        
    } else if (myValue == "paladin") {
		/* PALADIN */
		
		title.innerHTML = 'Class Description - Paladin';
		description.innerHTML = 'Paladins are holy warriors that sometimes draw on the power of divinity to enhance their attacks. They are bound by an oath to a divine figure which grants them additional powers to aid in their battles.';
        
    } else if (myValue == "ranger") {
		/* RANGER */
		
		title.innerHTML = 'Class Description - Ranger';
		description.innerHTML = 'Rangers are warriors on the outskirts of civilization. They draw on the powers of nature to enhance their attacks and provide a little bit of extra utility through their nature spells.';
        
    } else if (myValue == "rogue") {
		/* ROGUE */
		
		title.innerHTML = 'Class Description - Rogue';
		description.innerHTML = 'Rogues sneak in the shadows, taking advantage of their enemies from their hiding places. They are expert assassins, thieves, and criminals.';
        
    } else if (myValue == "sorcerer") {
		/* SORCERER */
		
		title.innerHTML = 'Class Description - Sorcerer';
		description.innerHTML = 'Sorcerers are born with innate magical capabilities in their blood. They draw on this magic to create all sorts of powerful and useful spells in the field of battle.';
		
    } else if (myValue == "warlock") {
		/* WARLOCK */
		
		title.innerHTML = 'Class Description - Warlock';
		description.innerHTML = 'Warlocks have made a deal with some mysterious supernatural being, often against their best interests. With the boons granted by their patron, warlocks are fierce arcane opponents in battle.';
		
    } else if (myValue == "wizard") {
		/* WIZARD */
		
		title.innerHTML = 'Class Description - Wizard';
        description.innerHTML = 'Wizards spend their life studying all things arcane, always improving their magical capabilities. The more time they spend practicing and reading about magic and spellcasting, the more powerful they become.';
        
    }
	
	title.id = 'class-description-title';
	description.id = 'class-description';
	
	var oldTitle = document.getElementById('class-description-title');
	if (oldTitle) {
		parent.removeChild(oldTitle);
	}
	
	var oldDescription = document.getElementById('class-description');
	if (oldDescription) {
		parent.removeChild(oldDescription);
	}
	
	parent.appendChild(title);
	parent.appendChild(description);
	
}
