/*
	Adrian Grimm
	WDD221 JavaScript
	Week 8 Exam Part 2
	3/06/2019
*/

'use strict'; // make sure there are no undeclared variables

function sumInput()
{
	let numbers = [];
	while (true)
	{
		let value = prompt("Please enter a number! Pressing \"Cancel\" to quit will add the input numbers!", 0);
		if (value === "" || value === null || !isFinite(value)) break;
		numbers.push (+value);
	} 
	document.write("<br><span style='font-family:Ubuntu;font-size:20px;padding-left:10px;color:#ffffff;'>The \'numbers\' array you entered is: " + numbers + "</span>")
	let sum = 0;
	for (let number of numbers)
	{
		sum += number;
	}
	return sum;
}

document.write("<br><span style='font-family:Ubuntu;font-size:22px;padding-left:10px;color:#ffffff;'>The total sum of these numbers: " + sumInput() + "</span>");

/* Mouse events to add a little flair */
function mouseOver()
{
	document.getElementById("title").style.color = "#388e3c";
}

function mouseOut()
{
	document.getElementById("title").style.color = "#1565c0";
}