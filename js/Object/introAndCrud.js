let person2 = {

    fullName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNumber:44,
    language:"Marathi"

}
//person2[0] incorrect syntax
// Object does not stores the value by index

// retrive (Dot notation and bracket)

// Retrive
let aa = person2.fullName
let bb = person2['fullName']
console.log(aa)
console.log(bb)
//Update
person2.fullName='Ankit'
console.log(person2)
person2['lastName']='Pukale'
console.log(person2)
// add (dot notation and bracket)
person2.city = "Pune"
person2['country'] = "India"
console.log(person2)
// delete (dot notation and bracket notation)

delete person2.city
delete  person2['country']
console.log(person2)