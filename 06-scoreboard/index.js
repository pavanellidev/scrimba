const homeNumber = document.getElementById('home-number')
const guestNumber = document.getElementById('guest-number')
let countH = 0
let countG = 0

function plusOneH() {
  countH += 1
  homeNumber.innerText = countH
}

function plusTwoH() {
  countH += 2
  homeNumber.innerText = countH
}

function plusTreeH() {
  countH += 3
  homeNumber.innerText = countH
}

function plusOneG() {
  countG += 1
  guestNumber.innerText = countG
}

function plusTwoG() {
  countG += 2
  guestNumber.innerText = countG
}

function plusTreeG() {
  countG += 3
  guestNumber.innerText = countG
}

function newGame() {
  homeNumber.innerText = 0
  guestNumber.innerText = 0
  countH = 0
  countG = 0
}