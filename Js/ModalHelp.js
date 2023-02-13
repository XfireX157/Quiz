const modal = document.querySelector('.modal')
document.querySelector('.help').addEventListener('click', () => {
    modal.classList.toggle('active')
})

const cards = document.querySelectorAll('[data-card]')
for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.addEventListener('click', () => {
        if (element.dataset.card === "50%") {
            noneQuestion()
            element.classList.add('block')
        }else if(element.dataset.card === "Plateia") {
            console.log('Plateia')
            element.classList.add('block')
        }else {
            points += 10
            point.textContent = points
            
            if(nQuest >= 5) {   
                gameOver() 
            }else {
                nextQuestion()
            }
            element.classList.add('block')
        }
    })
}




