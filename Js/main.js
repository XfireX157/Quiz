const article = document.querySelector('.questoes')
const answers = document.querySelectorAll('.respostas')
const numberQuestion = document.getElementById('numQuestao')
const Question = document.getElementById('pergunta')
const A = document.getElementById('a')
const B = document.getElementById('b')
const C = document.getElementById('c')
const D = document.getElementById('d')
const numero = document.getElementById('numero')
const totalQuestions = document.getElementById('total')
const point = document.getElementById('point')

let points = 0
let nQuest = 0

const total = totalQuestions.textContent = (questionsObject.length) - 1

function startGame() {
    renderQuestion()
}

function renderQuestion() {
    numero.textContent = nQuest
    numberQuestion.textContent = questionsObject[nQuest].numQuest
    Question.textContent = questionsObject[nQuest].question
    A.textContent = questionsObject[nQuest].altenativeA
    B.textContent = questionsObject[nQuest].altenativeB
    C.textContent = questionsObject[nQuest].altenativeC
    D.textContent = questionsObject[nQuest].altenativeD
    A.setAttribute('value', nQuest + 'A')
    B.setAttribute('value', nQuest + 'B')
    C.setAttribute('value', nQuest + 'C')
}

function nextQuestion() {
    nQuest++
    renderQuestion()
    resetAnswers()
    resetCorrectQuestion()
    audienceReset()
}

answers.forEach(item => {
    item.addEventListener('click', () => {
        checkAnswer(item.textContent)
    })
})

function gameOver() {
    article.innerHTML = `
        <div class="centro"> 
            <span>Você conseguiu <strong>${points}</strong> pontos</span>
            <p>Fim de jogo!</p>
            <button type="button" id="restart">Recomeçar</button>
        </div>
    `
    point.style.display = "none"
    document.getElementById('restart').addEventListener('click', () => {
        article.innerHTML = `
            <div class="centro"> 
                <span>Loading...</span>
            </div>  
        `
        setTimeout(() => {
            window.location.reload()
        }, 700)
    })
}

function checkAnswer(answers) {
    // console.log("Questão que está o jogador" + " " + numQuest)
    const littleAnswer = answers
    // console.log(littleAnswer)
    const correct = questionsObject[nQuest].correta
    //funçaõ de pular
    if (littleAnswer == correct) {
        console.log('Boa!')
        points += 10
        point.textContent = points
    } else {
        console.log('Errou')
    }
    if (nQuest + 1 > total) {
        console.log('Fim de Jogo')
        gameOver()
    } else {
        setTimeout(() => {
            nextQuestion()
        }, 900)
        correctQuestion()
    }
}

startGame()
