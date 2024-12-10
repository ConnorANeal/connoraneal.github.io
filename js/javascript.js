/*
function selectClass() {
	
	var mySelector = document.getElementById("chosen-class");
	var myValue = mySelector.value;
	
	if(myValue == "artificer") {
		
		var child = document.getElementById("class-description");
		var parent = document.getElementById("class-description-div");
		
		parent.removeChild(child);
		
		const description = document.createElement('p');
		description.innerHTML = 'This is what an artificer is!';
		description.id = 'class-description';
		
		parent.appendChild(child);
		
	}
}
*/

function selectClass() {
	
    var mySelector = document.getElementById("chosen-class");
    var myValue = mySelector.value;
    
	if (myValue == "choose") {
		/* NO OPTION PICKED */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description -';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'Pick a class to see its description.';
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
		
    } else if (myValue == "artificer") {
		/* ARTIFICER */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Artificer';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an artificer is!';
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
		
    } else if (myValue == "barbarian") {
		/* BARBARIAN */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Barbarian';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an barbarian is!';
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
		
    } else if (myValue == "bard") {
		/* BARD */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Bard';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an bard is!';
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
		
    } else if (myValue == "cleric") {
		/* CLERIC */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Cleric';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an cleric is!';
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
		
    } else if (myValue == "druid") {
		/* DRUID */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Druid';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an druid is!';
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
		
    } else if (myValue == "fighter") {
		/* FIGHTER */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Fighter';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an fighter is!';
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
		
    } else if (myValue == "monk") {
		/* MONK */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Monk';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an monk is!';
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
		
    } else if (myValue == "paladin") {
		/* PALADIN */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Paladin';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an paladin is!';
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
		
    } else if (myValue == "ranger") {
		/* RANGER */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Ranger';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an ranger is!';
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
		
    } else if (myValue == "rogue") {
		/* ROGUE */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Rogue';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an rogue is!';
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
		
    } else if (myValue == "sorcerer") {
		/* SORCERER */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Sorcerer';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an sorcerer is!';
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
		
    } else if (myValue == "warlock") {
		/* WARLOCK */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Warlock';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an warlock is!';
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
		
    } else if (myValue == "wizard") {
		/* WIZARD */
		
		var parent = document.getElementById("class-description-div");
        
		const title = document.createElement('h2');
		title.innerHTML = 'Class Description - Wizard';
		title.id = 'class-description-title';
		
        const description = document.createElement('p');
        description.innerHTML = 'This is what an wizard is!';
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
}
