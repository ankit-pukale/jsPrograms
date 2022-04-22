let btn=document.querySelector('#idBtn')
let liList=document.querySelectorAll("li")
let ul=document.querySelector("ul")
let txtin=document.querySelector("input")
for(let i=0;i<liList.length;i++){
    createButton(liList[i])
}
btn.addEventListener('click',function(){
    if(txtin.value===""){}
    else{
    let txt=txtin.value
    let a=document.createElement('li')
    a.textContent=txt  
    createButton(a)  
    ul.appendChild(a)    
    txtin.value=""}
})
ul.addEventListener('click',function(e){
   
    if(e.target.tagName==="BUTTON"){
        if(e.target.className ==="remove"){
            
            let li=e.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }
    
   
        if(e.target.className ==="up"){
            let li=e.target.parentElement
            let ul=li.parentElement
          let prevli= li.previousElementSibling
          ul.insertBefore(li,prevli)

        }
    
   
        if(e.target.className==="down"){
            let li=e.target.parentElement
            let ul=li.parentElement
          let prevli= li.nextElementSibling
          ul.insertBefore(prevli,li)
        }
    
    }
})
function createButton(li){
    let addbtn=document.createElement("button")
    addbtn.textContent="Remove Element"
    addbtn.className="remove"
    li.appendChild(addbtn)

    let upbtn=document.createElement("button")
    upbtn.textContent="UP"
    upbtn.className="up"
    li.appendChild(upbtn)

    let downBtn=document.createElement("button")
    downBtn.textContent="Down"
    downBtn.className="down"
    li.appendChild(downBtn)
}
