//  This function is enclosed in parenthesis, something you haven't seen yet
//  This type of function is invoked immediately, AKA Immediately-Invoked Function Expression
//  IIFE, pronounced iffy

(function() 
{
  function buildQuiz() 
  {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
	// observe the => syntax, which is basically the same as using return
	
    myQuestions.forEach((currentQuestion, questionNumber) => 
	{
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) 
	  {
        // ...add an HTML radio button, use the push method to add an array item
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() 
  {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => 
	{
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) 
	  {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "#00b008";
      } else 
	  {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "#d50000";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

 /* 
    The purpose of this assignment is for you to create at least five (5) 
      JavaScript quiz questions.
	  
	It's also a good lesson in observing functional code to clarify the concepts

*/
	  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = 
  [
    {
      question: "All browsers allow cookies to be set on local files.",
      answers: 
	  {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "What property disables browser-based validationby the browser when set to false?",
      answers: 
	  {
        a: "validity",
        b: "willValidate",
        c: "novalidate",
        d: "autocomplete"
      },
      correctAnswer: "c"
    },
    {
      question: "Whate is the focus() method used for?",
      answers: 
	  {
        a: "Returns a selection of elements matching a specified css selector",
        b: "Used to make a window the active window",
        c: "Names an object",
        d: "Allows you to change to a new web page from within the JavaScript"
      },
      correctAnswer: "b"
    },
    {
      question: "What do we call the process of running code through a program that flags common issues?",
      answers:
    {
        a: "logging",
        b: "bulletproofing",
        c: "linting",
        d: "tracing"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the value in an array called?",
      answers:
    {
        a: "index",
        b: "element",
        c: "iteration",
        d: "fallthrough"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is an input element not displayed by web browsers?",
      answers:
    {
        a: "noInput",
        b: "hidden form field",
        c: "secure()",
        d: "escape clause"
      },
      correctAnswer: "b"    
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
