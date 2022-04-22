let shead=document.querySelector('h1')
shead.addEventListener("mouseenter",function(){
    shead.style.color='yellow'
})
shead.addEventListener("mouseleave",function(){
    shead.style.color='red'
})
let para=document.querySelector("p")
para.addEventListener("mouseover",function(){
    para.style.color="blue"
})