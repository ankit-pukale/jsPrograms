let person = ["chinmay","deshpande",23,44]

console.log(person[0])
// add
person.push("marathi")
console.log(person)
person.unshift("Mr")
console.log(person)
person.splice(1,1,"Ninad","Mohan","Dani")
console.log(person)
console.log('************************')
//(unshift(),splice(),push())
// del 

// pop()
// shift()
// splice()

person.pop()
person.shift()
person.splice(1,2)
console.log(person)