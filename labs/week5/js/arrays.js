/*
	Adrian Grimm
	WDD221 - JavaScript 
	Week 5 Lab
	2/16/2019
*/

/*
	Part 1
*/

let colorArray = new Array();

colorArray[0] = "black";
colorArray[1] = "gray";
colorArray[2] = "red";
colorArray[3] = "blue";
colorArray[4] = "green";
colorArray[5] = "purple";

let counter1 = 0;

document.write("<h4>My Colors Array Elements</h4>");

for (counter1 = 0;
		counter1 < colorArray.length;
		counter1++)
		document.write("<span style='font-family:Oregano;font-size:20px;padding-left:10px;color:#ffffff;'>" + colorArray[counter1] + "<br></span>");

/*
	Part 2
*/

let musicArray = new Array();

musicArray[0] = "Danheim- Ulfhednar";
musicArray[1] = "King of Asgard- The Nine Worlds Burn";
musicArray[2] = "Niflhel- Berzerkers Rage";
musicArray[3] = "Heilung- Alfadhirhaiti";
musicArray[4] = "Amon Amarth- Valhall Awaits Me";

let music = 0;

document.write("<h5>My Favorite Songs</h5>");

for (music = 0;
		music < musicArray.length;
		music++)
		document.write("<span style='font-family:Mirza;font-size:18px;padding-left:10px;color:#ffffff;'>" + musicArray[music] + "<br></span>");

document.write("<p>My favorite color is " + colorArray[2] + " and my favorite song is " + musicArray[1] + ".</p>");