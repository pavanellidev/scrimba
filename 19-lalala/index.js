const btn = document.getElementById('btn')
const h1 = document.getElementById('titulo')
const texto = document.getElementById('texto')

btn.addEventListener('click', () => {
  h1.innerText = texto.value
})
