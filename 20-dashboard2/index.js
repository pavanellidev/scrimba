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

  fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/brl.json")
    .then(res => res.json())
    .then(data => {
      document.querySelector('#currency1').textContent = `Euro: R$ ${data.brl.toFixed(2)}`.replace('.', ',')
      console.log(data)
    })
    .catch(err => console.log(err))

    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json")
    .then(res => res.json())
    .then(data => {
      document.querySelector('#currency2').textContent = `Dolar: R$ ${data.brl.toFixed(2)}`.replace('.', ',')
      console.log(data)
    })
    .catch(err => console.log(err))

    function getTime() {
      document.querySelector('.time').textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
    
    setInterval(getTime, 5000)

    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => res.json())
        .then(data => {
          document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
          <div class="temp"><p class="temp-n">${Math.floor(data.main.temp)}c°</p><p class="temp-c">${data.name}</p></div>`
        })
        .catch(err => console.error(err))
    }) 

    
    