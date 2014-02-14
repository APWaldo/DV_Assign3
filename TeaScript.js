/**
 * @author Annie P Waldman
 */
/*
			 * The purpose of this program is to create a list of Mariage Frere teas I would buy if I had a subtantial tea
			 * budget (the lists include the properties of the teas). 
			 * From that list, I will create new lists. See details below for what kinds of lists.
			 */
		
			/*
			 * Created a varible of my Dream Teas below.
			 */
			var myDreamTeas = [{
				"name":"Darjeeling Snow",
				"type":"white",
				"origin": "india",
				"isCaffeinated":false,
				"infusionTimeMinutes": 4,
				"notes": ["jasmine", "lychee", "damp earth"]
			},{
				"name":"Madame Butterfly",
				"type":"white",
				"origin":"china",
				"isCaffeinated":false,
				"infusionTimeMinutes": 7,
				"notes": ["cherry blossoms", "rosebuds", "persimmons"]
			},{
				"name":"Iksander",
				"type":"green",
				"origin":"china",
				"isCaffeinated":true,
				"infusionTimeMinutes": 3,
				"notes": ["floral", "menthol"]
			},{
				"name":"River Tea",
				"type":"green",
				"origin":"china",
				"isCaffeinated":true,
				"infusionTimeMinutes": 2,
				"notes": ["angelica", "pineapple", "wood"]
			},{
				"name":"Darjeeling Indigo",
				"type":"blue",
				"origin":"india",
				"isCaffeinated":true,
				"infusionTimeMinutes": 4,
				"notes": ["plum jam", "black fig", "rosehips"]
			},{
				"name":"Darjeeling Cloud",
				"type":"black",
				"origin":"india",
				"isCaffeinated":true,
				"infusionTimeMinutes": 4,
				"notes": ["jasmine", "orange", "praline"]
			},{
				"name":"Bird Song",
				"type":"black",
				"origin":"vietnam",
				"isCaffeinated":true,
				"infusionTimeMinutes": 3,
				"notes": ["chocolate", "rose", "kiwi"]
			},{
				"name":"Rouge Ruschka",
				"type":"rooibos",
				"origin":"south africa",
				"isCaffeinated":false,
				"infusionTimeMinutes": 5,
				"notes": ["berries", "bergamot", "citrus"]
			},{	
				"name":"Rouge Tea",
				"type":"rooibos",
				"origin":"south africa",
				"isCaffeinated":false,
				"infusionTimeMinutes": 5,
				"notes": ["gingerbread", "zest"]
			}]
			console.log(myDreamTeas);
			
			/*
			 * Creating two new lists in order to later sort (one of my faves and one of the rest).
			 */
			
			var myFaves = [];
			var theRest = [];
			
			/*
			 * For every item in my list, check its type. If it's green, then add them to faves. If not, add to 
			 * theRest. Now I will create a code that makes this happen.
			 */
			for(var i=0; i<myDreamTeas.length; i++) {
			//console.log(i);
			var currentTea = myDreamTeas [i];
			//console.log (currentTea);
			if (currentTea.type == "green") {
				//console.log(currentTea);
			//Because type is green, add the currentTea to myFaves list.
				myFaves.push(currentTea);
			//If not green, then add the currentCookie to theRest list.
			} else {
				theRest.push(currentTea);
			} //this is the end of my if else statement.
			} //this is the end of the for loop.
		// Printing out the two new groups of teas.
		console.log ("My Faves");
		console.log(myFaves);
		console.log("The Rest");
		console.log(theRest);
