function noneQuestion() {
    const correctAnswers = questionsObject[nQuest].correta
    let Answers = [];

    answers.forEach((item, index) => {
        if (item.textContent != correctAnswers) {
            Answers.push({ index, answers: item })
        }
    })

    const randomAnswers = Math.floor(Math.random() * Answers.length);
    Answers.splice(randomAnswers, 1)
    //3 removid 2 removid [1, 4]
    Answers.forEach(item => {
        answers[item.index].style.display = 'none'
    })
}

function resetAnswers() {
    answers.forEach(item => {
        item.style.display = "block"
    })
}

function correctQuestion() {
    const correctAnswers = questionsObject[nQuest].correta

    answers.forEach(item => {
        if (item.textContent != correctAnswers) {
            item.style.color = "red"
        } else {
            item.style.color = "green"
        }
    })
}

function resetCorrectQuestion() {
    answers.forEach(item => {
        item.style.color = "#FFF"
    })
}

const div = document.createElement('div')

function audience() {
    const correctQuestion = questionsObject[nQuest].correta

    for (let i = 0; i < answers.length; i++) {
        const element = answers[i];
        if(element.textContent !== correctQuestion){
            element.style.color = "red"
        }else {
            element.style.color = "green"
        }
        
    }

    div.innerHTML = `
        <div class="audience">
        <h2>Veja o que o público achou!</h2>
            <p> ${questionsObject[nQuest].altenativeA} - ${questionsObject[nQuest].altenativeA === correctQuestion ? 'correto' : 'errado' }</p>
            <p> ${questionsObject[nQuest].altenativeB} - ${questionsObject[nQuest].altenativeB === correctQuestion ? 'correto' : 'errado' }</p>
            <p> ${questionsObject[nQuest].altenativeC} - ${questionsObject[nQuest].altenativeC === correctQuestion ? 'correto' : 'errado' }</p>
            <p> ${questionsObject[nQuest].altenativeD} - ${questionsObject[nQuest].altenativeD === correctQuestion ? 'correto' : 'errado' }</p>
        </div>
    `

    article.append(div)
}

const audienceReset = () => div.innerHTML = ``