let dataArray = []

function renderPosts() {
  let html = ""
  for (let post of dataArray) { 
    html += `
    <div class="post container">
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <hr>
    </div>
    `
  }
  document.querySelector('.content').innerHTML = html
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(response => response.json())
  .then((data) => {
    dataArray = data.slice(0,6)  
    renderPosts()
  })

  const formEl = document.querySelector('.form')
  let newPostTitle = document.querySelector('#title')
  let newPostBody = document.querySelector('#post')

  document.querySelector('#btn').addEventListener('click', (e) => {
    const newBlogPost = {title: newPostTitle.value, body: newPostBody.value}
    e.preventDefault()

  const options = {
    method: "POST",
    body: JSON.stringify(newBlogPost),
    headers: {"Content-Type": "application/json"}
  }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
      .then(res => res.json())
      .then(post => {
        dataArray.unshift(post)
        renderPosts()
        newPostTitle.value = ""
        newPostBody.value = ""
      })
  })