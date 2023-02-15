const likeBtnEl = document.getElementById('like-btn')
const likesEl = document.getElementById('likes')

likeBtnEl.addEventListener('click', () => {
  likesEl.textContent = parseFloat(likesEl.textContent) + 1
})