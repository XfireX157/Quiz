const article = document.querySelector('.questoes')
const answers = document.querySelectorAll('.respostas')
const numberQuestion = document.getElementById('numQuestao')
const Question = document.getElementById('pergunta')
const A = document.getElementById('a')
const B = document.getElementById('b')
const C = document.getElementById('c')
const numero = document.getElementById('numero')
const totalQuestions = document.getElementById('total')
const point = document.getElementById('point')

let points = 0

const total = totalQuestions.textContent = (questionsObject.length) -1
numero.textContent = questionsObject[1].numQuest
numberQuestion.textContent = questionsObject[1].numQuest
Question.textContent = questionsObject[1].question
A.textContent = questionsObject[1].altenativeA
B.textContent = questionsObject[1].altenativeB
C.textContent = questionsObject[1].altenativeC

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

function checkAnswer(nQuest, answers) {
    const numQuest = nQuest
    // console.log("Questão que está o jogador" + " " + numQuest)
    const littleAnswer = answers
    // console.log(littleAnswer)
    const correct = questionsObject[numQuest].correta
    //funçaõ de pular

    if(littleAnswer == correct) {
        console.log('Boa!')
        points += 10
        point.textContent = points
    }else {
        console.log('Errou')
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

