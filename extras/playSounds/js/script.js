function removeTransition(e) //e / event passed as a parameter for the function
{
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

function playSound(e)
//attribute selectors use square brackets
// code uses grave symbols NOT apostrophes
{
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!audio) return;
	key.classList.add('playing');
	audio.currentTime = 0; //rewind sound to start position
	audio.play();
}

const keys = document.querySelectorAll('key');
keys.forEach(key => key.AddEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
//listens for keydown event, then run function to give event