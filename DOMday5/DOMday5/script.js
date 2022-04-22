let liList=document.querySelectorAll("li")
let btn=document.querySelector("#btnadd")
let ulList=document.querySelector('#ulList')
let textin=document.querySelector("input")
liList.forEach(function(el){
    createButton(el)
})

btn.addEventListener('click',function(){
    let text=textin.value
    let addtext=document.createElement("li")
    addtext.textContent=text
    createButton(addtext)
    ulList.appendChild(addtext)
})
ulList.addEventListener('click',function(e){
    console.log(e.target.className)
    if(e.target.tagName==="BUTTON"){
        if(e.target.className==="remove"){
            let l=e.target.parentElement
            let u=l.parentElement
            u.removeChild(l)
        }
        
    }
})
function createButton(li){
    let remove=document.createElement("button")
    remove.textContent="remove"
    remove.className="remove"
    remove.style.backgroundColor="red"
    li.appendChild(remove)

    let up=document.createElement("button")
    up.textContent="up"
    up.className="up"
    li.appendChild(up)

    let down=document.createElement("button")
    down.textContent="down"
    down.className="down"
    li.appendChild(down)
}