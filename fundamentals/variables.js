

function fortuneTeller(numOfChildren, partnerName, location, jobTitle) {
	var result = "In  the future you will have the job " + jobTitle + " and be married to " + partnerName + ", you will have " + numOfChildren + " children and live in " + location; 
	document.write(result);
}	

fortuneTeller(5, "Jane", "Boston", "secretary");



function ageCalculator(currentYear, birthYear) {
	var currentAge = currentYear - birthYear;
	var altAge = (currentYear - birthYear) - 1;
	console.log("They are either " + currentAge + " or "+ altAge);
}

ageCalculator(2014, 1985);




function lifetimeSupply(currentAge, maxAge) {
	var eatAllLife = (maxAge - currentAge) * 3
	console.log("You will need " + eatAllLife + " Ritz Bitz bags to last you until the ripe old age of " + maxAge)
} 

lifetimeSupply(28, 100);





function geometrizer(radius) {
	var circumference = 2 * 3.14 * radius
	var area = 3.14 * (radius * radius)
	console.log("The circumference is " + circumference);
	console.log("The area is " + area);
}

geometrizer(5);




function tempConverter(celsius, farenheit) {
	var farenheitTemp = (celsius * (9/5)) + 32
	var celsiusTemp = ((5/9) * (farenheit - 32))
	console.log(celsius + " degrees celsius is "+ farenheitTemp + " degrees farenheit");
	console.log(farenheit + " degrees fareheit is "+ celsiusTemp + " degrees celsius");
}

tempConverter(32, 100)