let header=document.querySelector("h1")
let para=document.querySelector("p")
header.addEventListener("mouseenter",function(){
    header.style.color="yellow"
})
let getid=document.querySelector("#test")
getid.addEventListener("click",function(){
    alert("done")
})
let imghandler=document.querySelector("img")
imghandler.addEventListener("mouseenter",function(){
    imghandler.src="2.png"
})
imghandler.addEventListener("mouseleave",function(){
    imghandler.src="1.png"
})