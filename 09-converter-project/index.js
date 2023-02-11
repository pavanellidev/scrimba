let meterFeetEl = document.querySelector('#meter-feet')
let litersGallonsEl = document.querySelector('#liters-gallons')
let kilogramsPoundsEl = document.querySelector('#kilograms-pounds')
let inputEl = document.querySelector('#input-value')
let btnEl = document.querySelector('#button')

function metersToFeet (value) {
  let metersToFeet = value * 3.281
  return metersToFeet.toFixed(2)
}

function feetToMeters (value) {
  let feetToMeters = value * 0.304
  return feetToMeters.toFixed(2)
}

function litersToGallons (value) {
  let litersToGallons = value * 0.264
  return litersToGallons.toFixed(2)
}

function gallonsToLiters (value) {
  let gallonsToLiters = value * 3.785
  return gallonsToLiters.toFixed(2)
}

function kilosToPounds (value) {
  let kilosToPounds = value * 2.204
  return kilosToPounds.toFixed(2)
}

function poundsToKilos (value) {
  let poundsToKilos = value * 0.453
  return poundsToKilos.toFixed(2)
}

btnEl.addEventListener('click', () => {
  meterFeetEl.textContent = `${inputEl.value} meters = ${metersToFeet(inputEl.value)} feet | ${inputEl.value} feet = ${feetToMeters(inputEl.value)} meters`
  litersGallonsEl.textContent = `${inputEl.value} liters = ${litersToGallons(inputEl.value)} gallons | ${inputEl.value} gallons = ${gallonsToLiters(inputEl.value)} liters`
  kilogramsPoundsEl.textContent = `${inputEl.value} kilos = ${kilosToPounds(inputEl.value)} pounds | ${inputEl.value} pounds = ${poundsToKilos(inputEl.value)} kilos`
})


