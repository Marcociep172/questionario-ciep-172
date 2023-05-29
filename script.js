const quizData = [
    {
        question: "Questão 1. No Html As tags <head> e <body> representam respectivamente?",
        a: "estrutura e layot",
        b: "estrutura e título",
        c: "cabeça e corpo",
        d: "layout e corpo",
        correct: "c",
    },
    {
        question: "Questão 2. Qual das tags indicam que o CONTEÚDO É UM CABEÇALHO?",
        a: "<h1>...</h1>",
        b: "<p>...</p>",
        c: "<u>",
        d: "<i>...</i>",
        correct: "a",
    },
    {
        question: "Questão 3. O conjunto de tags responsáveis pela marcação do CONTEÚDO E ESTRUTURA de uma página da web recebe o nome de:",
        a: "HTML",
        b: "CSS",
        c: "JAVASCRIPT",
        d: "Código",
        correct: "a",
    },
    {
        question: "Questão 4. Qual arquivo tem como objetivo único de cuidar da ESTILIZAÇÃO E DO LAYOUT  da página na web?",
        a: "HTML",
        b: "CSS",
        c: "JAVASCRIPT",
        d: "PHYTHON",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} questões corretamente</h2>
           <button onclick="location.reload()">Novamente</button>
           `
       }
    }
})
