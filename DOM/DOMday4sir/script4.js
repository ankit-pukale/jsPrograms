

// <p class = "one" id = "two" name= "nm">para</p>

// selecting the element 

let ulList = document.querySelector('ul')
let buttonButton = document.querySelector('button')
let inputText = document.querySelector('input')



buttonButton.addEventListener('click',function(){
    let text = inputText.value //
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = text // <li>fruits</li>
    // newElement.textContent = "papaya"
    ulList.appendChild(newElement)

    let liList = document.querySelectorAll('li')
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].classList  = "green"
    }
   
})


// let person = {

//     age:12
// }

// console.log(person.age)

// person.lang = "Hindi"

// person.lang = "Marathi"