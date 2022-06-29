// class
class Person {

    constructor(firstName, lastName, city, marks) {
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.marks = marks
    }

    calPercentage() {
        return (this.marks.reduce(function (acc, el) {
            return acc + el
        }, 0) / 500) * 100
    }

    static greeting() {

    }


}

let marks = [[100, 100, 100, 100, 90], [70, 70, 70, 70, 70], [11, 12, 13, 14, 15], [33, 44, 55, 66, 77], [55, 22, 33, 44, 55]]

let students = []
for (let i = 0; i < 5; i++) {
    //console.log(i+1)
    let obj = new Person(`amol-${i + 1}`, `rao-${i + 1}`, `city${i + 1}`, marks[i])
    students.push(obj)
}
console.log(students)
// [12,14,14,51,44]
//  marks / totalMarks * 100
let percentArray = []
for (let i = 0; i < students.length; i++) {
    percentArray.push(students[i].calPercentage())
}

console.log(percentArray)

console.log(percentArray.reduce(function (acc, el) {
    return acc + el
}, 0) / students.length)

// print name of every student 

students.forEach(function (el) {
    console.log(el.firstName)
})

// lastName of every student 
students.forEach(function (el) {
    console.log(el.lastName)
})

students.forEach(function (el) {
    console.log(el.firstName + " " + el.calPercentage())
})

// highet mark --- amol 
console.log(percentArray)
let h = percentArray
let min = h[0]
let max = h[0]

for (let i = 0; i < h.length; i++) {

    if (h[i] < min) {
        min = h[i]
    }
    else if (h[i] > max) {
        max = h[i]
    }
}

console.log(min)
console.log(max)

console.log(students.find(function(el){
    return el.calPercentage() == max
}).firstName)


console.log(students.find(function(el){
    return el.calPercentage() == min
}).firstName)

console.log(students.every(function(el){
    return el.calPercentage() > 15
}))

// lang = "Hindi"
students.forEach(function(el){
    el.lang = "Hindi"
})
console.log(students)

// Vehicle 

class Vehicle {

    constructor(type,color,reg){
        this.type = type
        this.color= color
        this.reg = reg
    }

}

let cars = [
    new Vehicle("sedane","blue","123"),
    new Vehicle("SUV","red","123"),
    new Vehicle("jeep","red2","123"),
    new Vehicle("SUV2","red3","123"),
    new Vehicle("sedance","red4","123"),
]

console.log(cars)

//  Nagpur -- SVSS ====> 6 years
// Pune -- IT prenuer ===>  25 k ---  10 k 
// 2018 ===
// 2022 ----->18 (python ---- excel , api)  // datascience ===> python

// 90