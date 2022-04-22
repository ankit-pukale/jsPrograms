let person={
    fullName:'Ankit',
    age:29,
    city:'Vasco',
    state:'Goa'
}
// retrive
for(let key in person){
    console.log(key)
}

// delete
for (let key in person){
    delete person[key]
}
console.log(person)
//update
person.name='ankit pukale'
person['country']='india'
person.city='Pune'
person['city']='Panjim'
console.log(person)
