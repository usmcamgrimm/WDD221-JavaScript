// 1: Select / (get) the element with the ID 'about'. 
//    Store the element in the variable `about`.
//	  Use a method to modify the about id with a color border of your choice

const about = document.getElementById("about");

about.style.border="3px solid #008b00";


// 2: Select all the <h2> elements in the document.
//    Using a loop, set the color of the <h2> elements to a different color.

const h2 = document.getElementsByTagName("h2");

for (i = 0; i < h2.length; i++)
{
	h2[i].style.color = "#ff3600";
}


// 3: Select all elements with the class '.card'.
//    Using a loop, set their background color to the color of your choice.

const card = document.getElementsByClassName("card");

for (i = 0; i < card.length; i++)
{
	card[i].style.color = "#b0bec5";
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
//    Modify the color to one of your choice.

const ul = document.getElementsByTagName("ul") [0];

ul.style.border = "2px solid #0097a7";  // just need to change the hex value

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.

const container = document.getElementsByClassName("container") [1];


// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.

const title = document.querySelectorAll("a[title]");

for (i = 0; i < title.length; i++)
{
	title[i].style.color = "#d50000";
}


//7: Additional DOM change
//Adds an alert box that pops up on mouseover on the "What's Vue" heading
function mOver(obj)
{
	alert('According to the Vue website, vuejs.org: "Vue is a progressive framework for building user interfaces." Vue is designed to be incrementally adoptable, and is easy to integrate with other libraries or existing projects. Vue is also "capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."');
}