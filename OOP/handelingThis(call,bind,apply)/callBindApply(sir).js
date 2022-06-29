// // call bind and apply (methods)

// // program One 



// let person = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// person.displayName()
// console.log(person.displayName)

// // function(){
// //     console.log(this.firstName + this.lastName)
// // }

// let displayNameTwo = person.displayName



// // let displayNameTwo = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// displayNameTwo()



// bind() , call() and apply()



let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:31
}
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23
}
let poorva = {
    firstName:"poorva",
    lastName:"vyas",
    age:28
}

let displayName = function(){
    console.log(this.firstName +" "+this.lastName)
}

let displayName2 = function(greet){
    console.log(`${greet} ${this.firstName} ${this.lastName}`)
}

displayName.bind(poorva)()
displayName.bind(amol)()
displayName.bind(chinmay)()


// call()

displayName.call(poorva)
displayName.call(amol)
displayName.call(chinmay)


// apply()

displayName2.apply(poorva,["good morning!"])
displayName2.apply(amol,["goodevening"])
displayName2.apply(chinmay,["good night"])


// arrow function 




let info = {

    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this)
        console.log(this.firstName + this.lastName)
    }

} 

info.displayName()


// this.info2

// window.info2

//

// let info2 = {

//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:()=>{
//         console.log(this)
//         console.log(this.firstName , this.lastName)
//     }

// } 

info2.displayName()
