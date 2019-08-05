/*
    Adrian Grimm
    WDD221 JavaScript
    Final
    5/8/2019
*/

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
        alert('Great Job! You found a letter: ' + letter); //Set as an alaert pop up to show a successful guess
        document.querySelector("p").innerHTML = guessedLetters.join(''); //Displays correct letters and underscores on the browser window
        if (!moreToGuess) //If there are no more letters to guess: 
        {
            alert('YOU WON!'); //alert box pops up announcing success
        } 
    } else 
    {
        alert('Oh my, that is not a good choice: ' + letter); //alert pops up notifying incorrect guess
    }
}
// The following are letters, simulating a guess
guessLetter('L');
guessLetter('T');
guessLetter('I');
guessLetter('O');
guessLetter('N');

console.log('The work I submitted on this page is incomplete and I apologize. I have been unable to gind a way to get this working as a word game.  I look forward to finishing this in the future!');