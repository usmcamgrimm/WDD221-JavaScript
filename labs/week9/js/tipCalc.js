/*
	Adrian Grimm
	WDD221 - JavaScript
	Week 9 Lab - Tip Calculator
	3/14/2019
*/

//Calculate tip
function calculateTip()
{
	let billAmt = document.getElementById("billamt").value;
	let serviceQual = document.getElementById("serviceQual").value;
	let numOfPeople = document.getElementById("peopleamt").value;

	//validate input
	if (billAmt === "" || serviceQual == 0)
	{
		alert("Please fill in these values");
		return;
	}
	//check if input is empty or less than or equal to 1
	if (numOfPeople === "" || numOfPeople <= 1)
	{
		numOfPeople = 1;
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}

	//calculate tip
	const total = (billAmt * serviceQual) / numOfPeople;
	//round to 2 decimal places
	total2 = Math.round(total * 100) / 100;
	//allows 2 digits after decimal
	total3 = total.toFixed(2);
	//display the tip amount
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

//hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function()
{
	calculateTip();
}