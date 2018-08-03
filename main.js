const btn = document.querySelector('#btn-bar')
const nav = document.querySelector('.nav')

btn.addEventListener('click', () => {
    nav.classList.toggle('nav')
})