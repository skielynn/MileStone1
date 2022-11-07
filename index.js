const quizInput = [
    {
        question: "What book did Dipper own?",
        a: "1",
        b: "2",
        c: "3",
        d: "None",
        correct: "c",
    },
    {
        question: "What was episode one about?",
        a: "Gnomes",
        b: "Boybands",
        c: "Zombies",
        d: "The Loch Ness Monster",
        correct: "a",
    },
    {
        question: "What's his name? (character to the left & right)",
        a: "Will",
        b: "He Doesn't Have One",
        c: "Mabel",
        d: "Bill",
        correct: "d",
    },
    {
        question: "What is Mabel obsessed with?",
        a: "Sweaters",
        b: "Cats",
        c: "Boys",
        d: "All Of The Above",
        correct: "d",
    },
    {
        question: "What is Gruncle Stan's brothers name?",
        a: "Gideon",
        b: "Ford",
        c: "Blendin",
        d: "Robbie",
        correct: "b",
    },
];

// FREECODECAMP.ORG BELOW = SOURCE
// we use "let" due to the fact that we want these variables to be changeable
let presentData = 0;
let quizScore = 0;

//Check Understanding: selecting all the elements from the html
// we use "const" due to the fact that we want a non-editable variable.

const quiz = document.getElementById("quiz"); // actual quiz box
const answerInput = document.querySelectorAll(".answer"); // selecting radio input group
const questionsOr = document.getElementById("question"); // where questions prompt
const a_option = document.getElementById("a-option"); // a answer prompts
const b_option= document.getElementById("b-option"); // b answer prompts
const c_option = document.getElementById("c-option"); // c answer prompts
const d_option = document.getElementById("d-option"); // d answer prompts
const submitButn = document.getElementById("submit"); // submit button

loadQuiz(); // function loads the quiz making sure answers aren't selected and there is no score yet (fresh slate)

function deselectAnswers() { //function created to have the answerInput be all unchecked. So no answer choices
    answerInput.forEach((answerInput) => (answerInput.checked = false)); // are filled in yet.
}


function loadQuiz() { //function created for when the game first starts. we have all answers unchecked due to 
    deselectAnswers(); // deselectAnswers() function. 

    const quizData = quizInput[presentData]; // replacing the questions and answers in the order they should be 
                                                  // outputted from the array 
    questionsOr.innerText = quizData.question;
    a_option.innerText = quizData.a; // innerText is returning the text content of the element << ((W3SCHOOLS))
    b_option.innerText = quizData.b;
    c_option.innerText = quizData.c;
    d_option.innerText = quizData.d;
}



function getAnswer() { // function so that the computer knows whether or not player has selected an answer
    let answer;
    answerInput.forEach((answerInput) => {
        if (answerInput.checked) {
            answer = answerInput.id;
        }
    });
    return answer; // returns the value 
}

submitButn.addEventListener("click", () => { // eventlistener for the submit button so when its clicked 
    const answer = getAnswer();    // computer reads players answer
    if (answer) {
        if (answer === quizInput[presentData].correct) { // matches it with the correct answer
            quizScore++; // incriment operator changes adds one point << (W3SCHOOLS)
        }                   // if right the players quiz score goes up 

        presentData++;

        if (presentData < quizInput.length) { // basically tells when the quiz is over if presentdata is less than the length of
            loadQuiz();                      // the actual quiz. 
        } else {                       // "The innerHTML property can be used to examine the current HTML source of the page,
                                       //  including any changes that have been made since the page was initially loaded." -developer.modzilla.org
            quiz.innerHTML = `   
            <h2> You answered ${quizScore}/${quizInput.length} questions right</h2>

            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});