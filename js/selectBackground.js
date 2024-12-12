
function selectBackground() {
	
	var mySelector = document.getElementById("chosen-background");
    var myValue = mySelector.value;
	
	var parent = document.getElementById("background-description-div");
	const title = document.createElement('h2');
	const description = document.createElement('p');
	
	if (myValue == "choose") {
		/* NO OPTION PICKED */
		
		title.innerHTML = 'Background Description -';
        description.innerHTML = 'Pick a background to see its description.';
		
    } else if (myValue == "acolyte") {
		/* ACOLYTE */
		
		title.innerHTML = 'Background Description - Acolyte';
		description.innerHTML = 'This is what an acolyte is!';
        
    } else if (myValue == "criminal") {
		/* CRIMINAL */
		
		title.innerHTML = 'Background Description - Criminal';
		description.innerHTML = 'This is what an criminal is!';
        
    } else if (myValue == "folk-hero") {
		/* FOLK HERO */
		
		title.innerHTML = 'Background Description - Folk Hero';
		description.innerHTML = 'This is what an folk hero is!';
        
    } else if (myValue == "noble") {
		/* NOBLE */
		
		title.innerHTML = 'Background Description - Noble';
		description.innerHTML = 'This is what an noble is!';
        
    } else if (myValue == "sage") {
		/* SAGE */
		
		title.innerHTML = 'Background Description - Sage';
		description.innerHTML = 'This is what an sage is!';
        
    } else if (myValue == "soldier") {
		/* SOLDIER */
		
		title.innerHTML = 'Background Description - Soldier';
		description.innerHTML = 'This is what an soldier is!';
        
    }
	
	title.id = 'background-description-title';
	description.id = 'background-description';
	
	var oldTitle = document.getElementById('background-description-title');
	if (oldTitle) {
		parent.removeChild(oldTitle);
	}
	
	var oldDescription = document.getElementById('background-description');
	if (oldDescription) {
		parent.removeChild(oldDescription);
	}
	
	parent.appendChild(title);
	parent.appendChild(description);
	
}
