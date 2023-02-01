let num1 = parseFloat(prompt("Digite um número: "))
let num2 = parseFloat(prompt("Digite outro número:"))
let printResult = document.getElementById('sum-el')
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
  if(printResult.textContent != "") {
      printResult.textContent = "Sum: " 
  }
  let result = num1 + num2
  return printResult.textContent += result
}

function substract(){
  if(printResult.textContent != "") {
      printResult.textContent = "Sum: " 
  }
  let result = num1 - num2
  return printResult.textContent += result
}

function multiply(){
   if(printResult.textContent != "") {
      printResult.textContent = "Sum: " 
  }
  let result = num1 * num2
  return printResult.textContent += result
}

function divide(){
  if(printResult.textContent != "") {
      printResult.textContent = "Sum: " 
  }
  let result = num1 / num2
  return printResult.textContent += result
}
