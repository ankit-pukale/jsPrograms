let td=document.querySelectorAll('td')
let table=document.querySelector('table')
let tr=document.querySelector('tr')
let btn=document.querySelector('button')
let el1=document.querySelector('#el1')
let el2=document.querySelector('#el2')
let el3=document.querySelector('#el3')
btn.addEventListener('click',function(){
    let txt1=el1.value
    let txt2=el2.value
    let txt3=el3.value
    console.log(txt1,txt2,txt3)
    let addrow=document.createElement('tr')
    let addtxt1=document.createElement('td')
    addtxt1.textContent=txt1    
    let addtxt2=document.createElement('td')
    addtxt2.textContent=txt2
    let addtxt3=document.createElement('td')
    addtxt3.textContent=txt3
    addtxt1.style.border="1px solid black"
    addtxt2.style.border="1px solid black"
    addtxt3.style.border="1px solid black"
    addrow.appendChild(addtxt1)
    addrow.appendChild(addtxt2)
    addrow.appendChild(addtxt3)
    table.appendChild(addrow)
})


