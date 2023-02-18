function noneQuestion() {
    const correctAnswers = questionsObject[nQuest].correta
    let Answers = [];
   
    answers.forEach((item, index) => {
        if(item.textContent != correctAnswers){
            Answers.push({index, answers: item})
        }
    })

    const randomAnswers =  Math.floor(Math.random() * Answers.length);
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

function audience() {
    const correctAnswers = questionsObject[nQuest].correta

    answers.forEach((item, index) => {
        
    })
}