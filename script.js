const popup = document.querySelector('.popup-overlay')
const openBtn = document.querySelector('#show-popup')
const closeBtn = document.querySelector('#popup-close')
const form = document.querySelector("#popup-form")

openBtn.addEventListener('click', () => {
    popup.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Ваша заявка отправлена!')
    popup.classList.remove('show')
})