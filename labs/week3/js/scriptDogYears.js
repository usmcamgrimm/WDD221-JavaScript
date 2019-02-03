/*
	Adrian Grimm
	WDD221 - JavaScript 
	Week 3 Lab
	2/2/2019
*/

const myAge = 42; //store my age as a variable
var earlyYears = 2; //Variable earlyYears

var earlyYears = earlyYears * 10.5;
//Mulitplying the current earlyYears value and reassigning the answer as the current value

var laterYears = myAge - 2;
//Subtract 2 from myAge because this is already accounted for in earlyYears 

var laterYears = laterYears * 4;
//Use basic multiplication to assign a number of dog years
//This is used for the laterYears variable

/*
console.log(earlyYears);
//Shows a value of 21, which is correct
console.log(laterYears);
//Shows a value of 160, which is also correct
*/

let myAgeInDogYears = earlyYears + laterYears;
//Use addition to add the values.
//The sum determines my age in dog years

var myName = "Adrian Grimm";
//This line is my name as a string
var myName = myName.toLowerCase();
//Convert the string myName to all lower case letters
//Used W3schools as a reference for this function

console.log('My name is ' + myName + '. I am ' + myAgeInDogYears + ' years old in dog years.');
//This line adds the value from myAgeInDogYears with the string above.
//Shows myName and the age in dog years.

document.write('My name is ' + myName + '. I am ' + myAgeInDogYears + ' years old in dog years.');