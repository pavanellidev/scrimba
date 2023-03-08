let carros = []

// function Car(marca, modelo, ano) {
//   this.marca = marca
//   this.modelo = modelo
//   this.ano = ano
//   this.andar = function() {
//     console.log(`${this.marca} ${this.modelo} andou`)
//   }
// } 

class Car {
  constructor(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
  }
  andar() {
    console.log(`${this.marca} ${this.modelo} andou`)
  }
}

const carro1 = new Car('ford', 'ka', 2007)
carros.push(carro1)

const carro2 = new Car('fiat', 'palio', 2005)
carros.push(carro2)