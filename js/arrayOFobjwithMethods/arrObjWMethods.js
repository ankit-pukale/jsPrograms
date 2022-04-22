let  students = [
    {
        fullName:"chinmay deshpande",
        age:31,
        skills:["python","javascript"],
        city:"pune"

    },
    {
        fullName:"sarika pansare",
        age:27,
        skills:["python","javascript","css","html","java"],
        city:"mumbai"

    },
    {
        fullName:"sanchita dhole",
        age:26,
        skills:["javascript","css","html","jquery"],
        city:"nagpur"

    },
    {
        fullName:"rasika kulkarni",
        age:29,
        skills:["python","javascript","css3","html5","jquery"],
        city:"pune"

    }

]
// update name at index 0
// students[0]['fullName'] = "Tanmay Deshpande"
// console.log(students)

// program to retrive people belong to pune city 

console.log('program2')
let rrr = students.filter(function(el){
    //console.log(el)
    return  el.city === "pune"
})
console.log(rrr)

rrr.forEach(function(el){
    console.log(el.fullName)
})

// progrm3
// print user name along with number of skills 

console.log('program 3')
students.forEach(function(el){
    console.log(el.fullName,":",el.skills.length)
})

console.log('program 4')
// search user with python skills 
students.forEach(function(el){
    if(el.skills.includes('python')){
        console.log(el.fullName)
    }
})

// program 5
// state:"Maharastra"
// add state MH to all users 
students.forEach(function(el){
    el.state = "Maharashtra"
})
console.log(students)

// program 6
// average age of all students 
let totalAge = students.reduce(function(acc,el){
    return acc + el.age //31

},0)
console.log(totalAge/students.length)
console.log(students[1].skills[0])