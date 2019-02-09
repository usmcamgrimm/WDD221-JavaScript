/*

    Adrian Grimm
	WDD221 Javascript
	Week 4 - Exam 1!
	Temperature Converter
	2/8/2019

*/

function convert(temp)
{
	var x;
	if (temp == 'F')
	{
		x = (document.getElementById("f").value -32) * 5 / 9;
		document.getElementById("c").value = Math.round(x);

	} else
	{
		x = document.getElementById("c").value * 9 / 5 + 32;
		document.getElementById("f").value = Math.round(x);
	}
}
console.log('The "onkeyup" event is used to start the conversion function when the user releases a keyboard key.');
console.log('The original function i used included many decimal places. I also chose to use the "Math.tound()" property to round the "x" value to the nearest whole number.')
console.log('I utilized  W3schools for assistance with the function because I liked the automatic conversion function.');