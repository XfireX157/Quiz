const modal = document.querySelector('.modal')
document.querySelector('.help').addEventListener('click', () => {
    modal.classList.toggle('active')
})

const cards = document.querySelectorAll('.card')

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.addEventListener('click', () => {
        console.log('ola')
    })
}

