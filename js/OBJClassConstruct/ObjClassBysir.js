// object literal

let amol = {
    fullName:"amol rao",
    age:23,
    skills:["python","javascript"]
}

let chinmay = {
    fullName:"chinmay deshapande",
    age:31,
    skills:["python","javascript","css"]
}
// // add 
// amol.city = "pune"
// // update 
// amol.age = 34
// // retrive
// console.log(amol.fullName )
// // delete
// delete amol.age

// template ====> blue print  to create object ===> class


// function constructor 

// ES6 class 

// Object.create()


// setting the property outside  the class 

class  Person {
    fullName = undefined
    age =  undefined
    skills = undefined
}

let amol2 = new Person()
console.log(amol2)

amol2.fullName = "amol rao"
amol2.age = 23
amol2.skills = ["python","java"]
console.log(amol2)

// Setting the property at the time of object creation


class Person3 {

    constructor(fn ,ag , sk){

        this.fullName = fn
        this.age = ag
        this.skills = sk

    }

}

// let amol4 = new Person3("amol rao",23,["python","java"])
// let chinmay2 = new Person3("chinmay",25,["python2","javascript"])
// console.log(amol4)
// console.log(chinmay2)

// chinmay2.city = "pune"
// console.log(chinmay2)

let students = [
    new Person3("amol",23,['python','javscript']),
    new Person3("chinmay",25,['python','javscript']),
    new Person3("sarika",25,['python3','javscript'])
]

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])

// students[2].age = 34
// console.log(students[2])

console.log('--------*---------')
students.forEach(function(el){
    //console.log(el) 
    for(let key in el){
        console.log(key, el[key])
    }
})

students.forEach(function(el){
  el.lang = "marathi"
})

students.forEach(function(el){
    //console.log(el) 
    for(let key in el){
        console.log(key, el[key])
    }
})