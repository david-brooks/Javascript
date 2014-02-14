 var favoriteCereal = ["Corn Pops", "Fruit Loops", "Frosted Flakes"];

for( i=0; i < favoriteCereal.length; i++) {
	if(i+1 === 1) {
		console.log("My first choice is " + favoriteCereal[i]);
	} 
	else if(i+1 === 2) {
		console.log("My second choice is " + favoriteCereal[i]);
	}
	else if(i+1 === 3) {
		console.log("My third choice is " + favoriteCereal[i]);
	}
}

favoriteCereal(2);





