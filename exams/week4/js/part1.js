/*

    Adrian Grimm
	WDD221 Javascript
	Week 4 - Exam 1!
	2/8/2019

*/

 
//1 - variable assigned as my current name. NOT the name I was using last week!!
let name = 'Adrian Grimm';
console.log('My name is ' + name + '. Pleased to met you!');

//2 - My birthday
let dayOfBirth = 8;
console.log('I was born on this day in December: ' + dayOfBirth);

//3 - Length of my entire name, shown in console
console.log('The length of my entire name is: ' + name.length);

//4
/*
var mead = 'Viking Blod';
console.log(mead);
var mead = 'Vikingernes Mjod';
console.log(mead);
*/
var p = 'precedence';
console.log('The most recently assigned variable takes ' + p);

//5
var favColor = prompt("What is your favorite color?");

if (favColor == null || favColor == "")
{
	console.log('You don\'t have a favorite color?');
}
else
{
	console.log('Thanks for your input! ' + favColor + '... that\'s a nice color!');
}

//6
console.log('My name is: "' + name + '", and I love JavaScript!');

//7
let n = 'NULL';
let u = 'UNDEFINED';
console.log('' + n + ' is an assigned value which indicates the variable has no value, while ' + u + ' means no value has been assigned to a variable.');

//8
var d = 'NaN';
console.log('' + d + ' stands for "Not a Number", and is an undefined number resulting from a mathematical operation. ' + d + ' is a numeric data type.');