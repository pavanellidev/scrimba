const buttonEl = document.querySelector('button')
const bodyEl = document.querySelector('body')

buttonEl.addEventListener('click', () => {
  bodyEl.classList.toggle('dark')
})
