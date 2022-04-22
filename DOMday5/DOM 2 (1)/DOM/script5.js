
// selecting 
let ulList = document.querySelector('#uol')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addButton')
let liList = document.querySelectorAll('li') //[li,li,li,li]

for (let i = 0; i < liList.length; i++) {
    createButton(liList[i])
}

//document.getElementById('uol')

console.log(ulList)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click', function () {
    let text = inputText.value
    let liList = document.createElement('li')
    liList.textContent = text
    createButton(liList)
    ulList.appendChild(liList)
})


ulList.addEventListener('click', function (e) {
   
   
    if (e.target.tagName === "BUTTON") {
      
        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
            
        }
        // up 

        if (e.target.className === "up") {



        }


        // down

        if (e.target.className === "dowm") {



        }


    }




})

function createButton(li) {
    let remove = document.createElement('button') 
    remove.textContent = "Remove" 
    remove.className = "remove" 
    li.appendChild(remove)

    let up = document.createElement('button') 
    up.textContent = "Up" 
    up.className = "up" 
    li.appendChild(up)

    let down = document.createElement('button') 
    down.textContent = "Down" 
    down.className = "down" 
    li.appendChild(down)

}