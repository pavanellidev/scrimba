fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.querySelector('.author').textContent = `By: ${data.user.name}`
  })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1506260408121-e353d10b87c7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzkxMjY1MzY&ixlib=rb-4.0.3&q=80)`
    document.querySelector('.author').textContent = `By: Claudio Testa`
  })

  fetch("https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=b681747092d84ca9be055c2463baf75c")
    .then(res => res.json())
    .then(data => {
      const num1 = Math.floor(Math.random() * 3)
      const num2 = Math.floor(Math.random() * 3) + 3
      const num3 = Math.floor(Math.random() * 3) + 6
      document.querySelector('.noticias').innerHTML = `${data.articles[num1].title} <a href="${data.articles[num1].url}" target="_blank">+</a>`
      document.querySelector('.noticias2').innerHTML = `${data.articles[num2].title} <a href="${data.articles[num2].url}" target="_blank"">+</a>`
      document.querySelector('.noticias3').innerHTML = `${data.articles[num3].title} <a href="${data.articles[num3].url}" target="_blank"">+</a>`
    })
    .catch(err => console.log(err))

    function getTime() {
      document.querySelector('.time').textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
    
    setInterval(getTime, 5000)
    
    