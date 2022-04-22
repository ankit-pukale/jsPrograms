
let headingOne = document.querySelector('h1')
let para = document.querySelector('p')
console.log(headingOne)

headingOne.addEventListener('click',function(){
    headingOne.style.color = "green"
})

para.addEventListener('mouseover',function(){
    para.style.backgroundColor = "yellow"
    para.style.color = "red"
})