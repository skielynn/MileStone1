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
const answerOr = document.querySelectorAll(".answer"); // selecting radio input group
const questionsOr = document.getElementById("question"); // where questions prompt
const a_option = document.getElementById("a-option"); // a answer prompts
const b_option= document.getElementById("b-option"); // b answer prompts
const c_option = document.getElementById("c-option"); // c answer prompts
const d_option = document.getElementById("d-option"); // d answer prompts
const submitButn = document.getElementById("submit"); // submit button

loadQuiz(); // function loads the quiz making sure answers aren't selected and there is no score yet (fresh slate)

function loadQuiz() {
    deselectAnswers();

    const quizData = quizInput[presentData];

    questionsOr.innerText = quizData.question;
    a_option.innerText = quizData.a; 
    b_option.innerText = quizData.b;
    c_option.innerText = quizData.c;
    d_option.innerText = quizData.d;
}

function deselectAnswers() {
    answerOr.forEach((answerOr) => (answerOr.checked = false));
}

function getAnswer() {
    let answer;
    answerOr.forEach((answerOr) => {
        if (answerOr.checked) {
            answer = answerOr.id;
        }
    });
    return answer;
}

submitButn.addEventListener("click", () => {
    const answer = getAnswer();
    if (answer) {
        if (answer === quizInput[presentData].correct) {
            quizScore++;
        }

        presentData++;

        if (presentData < quizInput.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2> You answered ${quizScore}/${quizInput.length} questions right</h2>

            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});