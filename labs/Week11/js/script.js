/*  
	JavaScript Lab
*/

// create a new function named display that passes a parameter named event
function display(event) {
// statement block
 // enter a jQuery selector to select the currentTarget value of the event parameter
 // This function will be called when a user clicks either of the h3 elements, the selector references the h3 element the user clicks
 // The .next() method traverses the DOM tree to the element that follows the h3 element
 	$(event.currentTarget).next().fadeIn();
 // Use the jQuery fadeIn() function
}

$("h3").click(display);