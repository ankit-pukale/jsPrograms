// let headOne = document.querySelector('h1')
// console.log(headOne)

// headOne.addEventListener('click',function(){
//     headOne.style.color = "green"
//     headOne.textContent = "Chinmay"
//     console.log(headOne['textContent'])
//     console.log(headOne.textContent)
// })

// obj

// let person = {

//         firstName:"chinmay",
//         age:12,
//         parent:{
//             mother:"kanchan",
//             father:"shirish"
//         }
// }

// person.parent.mother  = "kanchan s"
// console.log(person)
// <h2 id = "one" class="two" name= "nm" > HeadingOne<h2>



//<h2 id = "one" class="two" name= "nm" > HeadingOne</h2>

// select by tagName
let headTwo = document.querySelector('h2')
console.log(headTwo)

// select by id
let headTwoByid = document.querySelector('#one')
console.log(headTwoByid)

// select by class 

let headClass = document.querySelector('.two')
console.log(headClass)

// general formula 
// tagName[attribute="value"]

let genF = document.querySelector('h2[id="one"]')
console.log(genF)

//<p id = "para" class = "classPara" name="namePara">para</p>


console.log(document.querySelector('#para'))
console.log(document.querySelector('.classPara'))
console.log(document.querySelector('p'))
console.log(document.querySelector('p[name="namePara"]'))

//-------------- selecting multiple elements 


let paraNodeList = document.querySelectorAll('.purple')
let buttonOne = document.querySelector('button')
console.log(paraNodeList)
console.log(buttonOne)


// for(let i = 0 ; i < paraNodeList.length ; i++){
//     paraNodeList[i].style.color = "yellow"
// }

buttonOne.addEventListener('click',function(){

    for(let i = 0 ; i < paraNodeList.length ; i++){
        paraNodeList[i].style.color = "green"
    }

})