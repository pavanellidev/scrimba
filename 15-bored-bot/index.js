document.getElementById('btn').addEventListener('click', () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then((data) => {
    document.getElementById('response').textContent = data.activity
    document.getElementById('title').textContent = `Happy Bot 🦾`
    document.querySelector('.container').classList.add('container-happy')
    document.getElementById('btn').classList.add('button-happy')
  })
})
