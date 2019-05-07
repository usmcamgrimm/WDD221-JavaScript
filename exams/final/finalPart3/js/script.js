let wordLetters     = ['L', 'I', 'O', 'N']; //create an array for the letters in the word
let guessedLetters  = ['_', '_', '_', '_']; //create an array for the letters' spaces

//create the main function for guessing the letters
function guessLetter(letter) 
{
	//set variables to false in advance of the function loop
    let goodGuess = false;
    let moreToGuess = false;
    for (let i = 0; i < wordLetters.length; i++) //start the loop
    {
        if (wordLetters[i] == letter) 
        {
            guessedLetters[i] = letter;
            goodGuess = true; //Indicates a successful guess
        }
        if (guessedLetters[i] == '_') 
        {
            moreToGuess = true; //Incorrect letter guessed
        }
    }
    if (goodGuess) //In the case of a correctly guessed letter:
    {
        alert('Great Job! You found a letter!'); //Set as an alaert pop up to show a successful guess
        document.querySelector("p").innerHTML = guessedLetters.join(''); //Displays correct letters and underscores on the browser window
        if (!moreToGuess) //If there are no more letters to guess: 
        {
            alert('YOU WON!'); //alert box pops up announcing success
        } 
    } else 
    {
        alert('Oh my, that is not a good choice!'); //alert pops up notifying incorrect guess
    }
}
// The following are letters, simulating a guess
guessLetter('L');
guessLetter('T');
guessLetter('I');
guessLetter('O');
guessLetter('N');