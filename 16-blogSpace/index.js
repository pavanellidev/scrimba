fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(response => response.json())
  .then((data) => {
    const dataArray = data.slice(0,5)
    dataArray.forEach((post) => {
      document.querySelector('.content').innerHTML += `
      <div class="post container">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr>
      </div>
      `
    })
  })