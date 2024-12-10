
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
		description.innerHTML = 'This is what an artificer is!';
        
    } else if (myValue == "barbarian") {
		/* BARBARIAN */
		
		title.innerHTML = 'Class Description - Barbarian';
		description.innerHTML = 'This is what an barbarian is!';
        
    } else if (myValue == "bard") {
		/* BARD */
		
		title.innerHTML = 'Class Description - Bard';
		description.innerHTML = 'This is what an bard is!';
        
    } else if (myValue == "cleric") {
		/* CLERIC */
		
		title.innerHTML = 'Class Description - Cleric';
		description.innerHTML = 'This is what an cleric is!';
        
    } else if (myValue == "druid") {
		/* DRUID */
		
		title.innerHTML = 'Class Description - Druid';
		description.innerHTML = 'This is what an druid is!';
        
    } else if (myValue == "fighter") {
		/* FIGHTER */
		
		title.innerHTML = 'Class Description - Fighter';
		description.innerHTML = 'This is what an fighter is!';
        
    } else if (myValue == "monk") {
		/* MONK */
		
		title.innerHTML = 'Class Description - Monk';
		description.innerHTML = 'This is what an monk is!';
        
    } else if (myValue == "paladin") {
		/* PALADIN */
		
		title.innerHTML = 'Class Description - Paladin';
		description.innerHTML = 'This is what an paladin is!';
        
    } else if (myValue == "ranger") {
		/* RANGER */
		
		title.innerHTML = 'Class Description - Ranger';
		description.innerHTML = 'This is what an ranger is!';
        
    } else if (myValue == "rogue") {
		/* ROGUE */
		
		title.innerHTML = 'Class Description - Rogue';
		description.innerHTML = 'This is what an rogue is!';
        
    } else if (myValue == "sorcerer") {
		/* SORCERER */
		
		title.innerHTML = 'Class Description - Sorcerer';
		description.innerHTML = 'This is what an sorcerer is!';
		
    } else if (myValue == "warlock") {
		/* WARLOCK */
		
		title.innerHTML = 'Class Description - Warlock';
		description.innerHTML = 'This is what an warlock is!';
		
    } else if (myValue == "wizard") {
		/* WIZARD */
		
		title.innerHTML = 'Class Description - Wizard';
        description.innerHTML = 'This is what an wizard is!';
        
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


function selectSpecies() {
	
	
	
}
