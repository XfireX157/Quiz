const modal = document.querySelector('.modal')
document.querySelector('.help').addEventListener('click', () => {
    modal.classList.toggle('active')
})

const cards = document.querySelectorAll('[data-card]')

function help(nQuest) {
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.addEventListener('click', () => {
            if (element.dataset.card === "50%") {
                console.log('50% das respostas')
                element.classList.add('block')
            } else if (element.dataset.card === "Plateia") {
                console.log('plateia')
                element.classList.add('block')
            } else {
                nextQuestion(nQuest + 1)
                element.classList.add('block')
            }
        })
    }

}




