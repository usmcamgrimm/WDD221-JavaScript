// declare variables
let startBtn = document.getElementById('start'),
	stopBtn = document.getElementById('stop'),
	pauseBtn = document.getElementById('pause'),
	hour = document.getElementById('h'),
	minute = document.getElementById('m'),
	second = document.getElementById('s');

// add event listeners
startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
pauseBtn.addEventListener('click',pause);

// initialize stop and pause functions
var stop = false;
var pause = false;

// start function:
function start()
{
	//extract the integer value from times
	let h = parseInt(hour.innerText),
		m = parseInt(minute.innerText),
		s = parseInt(second.innerText);

	// increment seconds
	s = s + 1;

	// if 60 seconds, set to 0 and increase minute
	if (s==60)
	{
		s = 0;

		// if 60 minutes set to 0 and increase hour
		if (m == 60)
		{
			m = 0;
			h = h + 1;
			hour.innerText = h + " h";
		}
		m = m + 1;
		minute.innerText = m + " m";
	}

	// if stop is not pressed
	if (!stop)
	{
		//if pause is not pressed
		if (!pause)
		{
			//increase time
			second.innerText = s + " s";
			setTimeout(start,5);
		} else {
			// toggle pause
			pause = !pause;
		}
	} else {
		// toggle stop
		stop = !stop;
	}
}

// stop function
function stop()
{
	stop = true;
	second.innerText = 0 + " s";
	minute.innerText = 0 + " m";
	hour.innerText = 0 + "h";
}

// pause function
function pause()
{
	pause = true;
}