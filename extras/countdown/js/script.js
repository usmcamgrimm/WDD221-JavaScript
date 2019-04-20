"use strict";
$(document).ready(function()
{
	$("#countdown").click(function()
	{
		let event = $("#event").val();
		let dt = $("#date").val();
		let message = $("#message");

		//make sure task and due date are entered
		if (event.length == 0 || dt.length == 0)
		{
			message.text("Please enter both a name and a date.");
			return
		}

		//make sure due date string has slashes and a 4 digit year
		if (dt.indexOf("/") == -1)
		{
			message.text("Please enter the date in MM/DD/YYYY format.");
			return;
		}

		let year = dt.substring(dt.length - 4);
		if (isNaN(year))
		{
			message.text("Please enter the date in MM/DD/YYYY format.");
			return
		}

		//convert date string to Date object and check for validity
		let date = new Date(dt);
		if (date == "Invalid Date")
		{
			message.text("Please enter the date in MM/DD/YYYY format.");
		}

		// calculate days
		let today = new Date(); //obtain current date
		let oneDay = 24*60*60*1000;
		let days = (date.getTime() - today.getTime()) / oneDay;
		days = Math.ceil(days);

		//create and display message
		if (days == 0)
		{
			message.text("Hooray! Today is ".concat(event.toLowerCase(),
				"!\n(", date.toDateString(), ")"));
		}

		if (days < 0)
		{
			//capitalize event
			event = event.substring(0,1).toUpperCase() + event.substring(1);
			message.text(event.concat(" happened ", Math.abs(days),
				" day(s) ago. \n (", date.toDateString(), ")"));
		}

		if (days > 0)
		{
			message.text(days.toString().concat(" day(s) until ",
				event.toLowerCase(), "!\n(", date.toDateString(), ")"));
		}
	});
	$("#event").focus();
})