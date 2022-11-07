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
let currentQuiz = 0;
let quizScore = 0;

//Check Understanding: selecting all the elements from the html
// we use "const" due to the fact that we want the a non-editable variable.

const quiz = document.getElementById("quiz"); // actual quiz box
const answerOr = document.querySelectorAll(".answer"); // selecting radio input group
const questionsOr = document.getElementById("question"); // where questions prompt
const a_text = document.getElementById("a-text"); // a answer prompts
const b_text = document.getElementById("b-text"); // b answer prompts
const c_text = document.getElementById("c-text"); // c answer prompts
const d_text = document.getElementById("d-text"); // d answer prompts
const submitButn = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizInput[currentQuiz];

    questionsOr.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
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
        if (answer === quizInput[currentQuiz].correct) {
            quizScore++;
        }

        currentQuiz++;

        if (currentQuiz < quizInput.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2> You answered ${quizScore}/${quizInput.length} questions right</h2>

            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});