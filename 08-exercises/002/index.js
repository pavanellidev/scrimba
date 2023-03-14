const people = [
  { name: "Jack", hasPet: true, age: 12 },
  { name: "Jill", hasPet: false, age: 18 },
  { name: "Alice", hasPet: true, age: 22 },
  { name: "Bob", hasPet: false, age: 32 },
]

const peopleWithPets = people.filter((people) => {
  return people.hasPet === true
})

const overEighteen = people.filter((person) => {
  return person.age > 17
})

console.log(overEighteen)
console.log(peopleWithPets)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => {
  return word.length > 6
})

console.log(result)

