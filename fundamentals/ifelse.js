
function greaterNum(numOne, numTwo) {
	
		if(numOne > numTwo) {
			console.log("The greater number of " + numOne + " and "+ numTwo + " is "+ numOne);
		}
		else {
				console.log("The greater number of " + numTwo + " and "+ numOne + " is "+ numTwo);
			}
}	


greaterNum(34, 44)


function helloWorld(language) {
			
	if(language === "en") {
		console.log("Hello World");
}
	else if(language === "es") {
		console.log("Hola Worlda");
}
	else if(language === "de") {
		console.log("Yolo World");
}
	
}

helloWorld("en");
helloWorld("es");
helloWorld("de");



function assignGrade(grade) {

	if(grade >= 90) {
		console.log("A");
	}
	else if(grade >= 70) {
		console.log("B");
	}
	else if(grade >= 60) {
		console.log("C");
	}
	else if(grade >= 50) {
		console.log("D");
	}
	else if(grade <= 49) {
		console.log("F");
	}
}

assignGrade(80);
assignGrade(30);
assignGrade(65);



function pluralize(noun, number) {

if(number === 1) {
	console.log(number + " " + noun);
}
else {
	console.log(number + " " + noun + "s");
}

}
pluralize("dog", 2)







