
function selectSpecies() {
	
	var mySelector = document.getElementById("chosen-species");
    var myValue = mySelector.value;
	
	var parent = document.getElementById("species-description-div");
	const title = document.createElement('h2');
	const description = document.createElement('p');
	
	if (myValue == "choose") {
		/* NO OPTION PICKED */
		
		title.innerHTML = 'Species Description -';
        description.innerHTML = 'Pick a species to see its description.';
		
    } else if (myValue == "dwarf") {
		/* DWARF */
		
		title.innerHTML = 'Species Description - Dwarf';
		description.innerHTML = 'This is what an dwarf is!';
        
    } else if (myValue == "elf") {
		/* ELF */
		
		title.innerHTML = 'Species Description - Elf';
		description.innerHTML = 'This is what an elf is!';
        
    } else if (myValue == "halfling") {
		/* HALFLING */
		
		title.innerHTML = 'Species Description - Halfling';
		description.innerHTML = 'This is what an halfling is!';
        
    } else if (myValue == "human") {
		/* HUMAN */
		
		title.innerHTML = 'Species Description - Human';
		description.innerHTML = 'This is what an human is!';
        
    } else if (myValue == "dragonborn") {
		/* DRAGONBORN */
		
		title.innerHTML = 'Species Description - Dragonborn';
		description.innerHTML = 'This is what an dragonborn is!';
        
    } else if (myValue == "gnome") {
		/* GNOME */
		
		title.innerHTML = 'Species Description - Gnome';
		description.innerHTML = 'This is what an gnome is!';
        
    } else if (myValue == "half-elf") {
		/* HALF-ELF */
		
		title.innerHTML = 'Species Description - Half-Elf';
		description.innerHTML = 'This is what an half-elf is!';
        
    } else if (myValue == "half-orc") {
		/* HALF-ORC */
		
		title.innerHTML = 'Species Description - Half-Orc';
		description.innerHTML = 'This is what an half-orc is!';
        
    } else if (myValue == "tiefling") {
		/* TIEFLING */
		
		title.innerHTML = 'Species Description - Tiefling';
		description.innerHTML = 'This is what an tiefling is!';
        
    }
	
	title.id = 'species-description-title';
	description.id = 'species-description';
	
	var oldTitle = document.getElementById('species-description-title');
	if (oldTitle) {
		parent.removeChild(oldTitle);
	}
	
	var oldDescription = document.getElementById('species-description');
	if (oldDescription) {
		parent.removeChild(oldDescription);
	}
	
	parent.appendChild(title);
	parent.appendChild(description);
	
}
