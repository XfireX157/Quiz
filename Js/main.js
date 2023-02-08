import questionsObject from './mock.js'

const article = document.querySelector('.questoes')
const answers = document.querySelectorAll('.respostas')
const numberQuestion = document.getElementById('numQuestao')
const Question = document.getElementById('pergunta')
const A = document.getElementById('a')
const B = document.getElementById('b')
const C = document.getElementById('c')
const numero = document.getElementById('numero')
const totalQuestions = document.getElementById('total')

numero.textContent = questionsObject[0].numQuest
const total = totalQuestions.textContent = (questionsObject.length) -1

numberQuestion.textContent = questionsObject[0].numQuest
Question.textContent = questionsObject[0].question
A.textContent = questionsObject[0].altenativeA
B.textContent = questionsObject[0].altenativeB
C.textContent = questionsObject[0].altenativeC

function nextQuestion(nQuest) {
    numero.textContent = nQuest
    numberQuestion.textContent = questionsObject[nQuest].numQuest
    Question.textContent = questionsObject[nQuest].question
    A.textContent = questionsObject[nQuest].altenativeA
    B.textContent = questionsObject[nQuest].altenativeB
    C.textContent = questionsObject[nQuest].altenativeC
    A.setAttribute('value', nQuest + 'A')
    B.setAttribute('value', nQuest + 'B')
    C.setAttribute('value', nQuest + 'C')
}

function gameOver() {
    article.innerHTML = `
        <div> 
            <p>Você é brabo</p>
        </div>
    `
}

function checkAnswer(nQuest, answers) {
    const numQuest = nQuest
    // console.log("Questão que está o jogador" + " " + numQuest)
    const littleAnswer = answers
    // console.log(littleAnswer)
    const correct = questionsObject[numQuest].correta

    if(littleAnswer == correct) {
        console.log('Boa!')
    }else {
        console.log('baubau')
    }

    setTimeout(() => {
        const next = numQuest + 1

        if(next > total) {
            console.log('Fim de Jogo')
            gameOver()
        }else {
            nextQuestion(next)
        }
    }, 250)
}

answers.forEach(item => {
    item.addEventListener('click', () => checkAnswer(item.value, item.textContent))
})

