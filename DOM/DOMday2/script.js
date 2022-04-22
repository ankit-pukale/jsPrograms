let heading=document.querySelector("h1")
heading.addEventListener("click",function(){
    heading.textContent="I am Ankit"
    heading.style.color="magenta"
})
//select element by class
let selbyclass=document.querySelector(".class1")
console.log(selbyclass.textContent)
//select element by id
let selbyid=document.querySelector("#id1")
console.log(selbyid.textContent)
//select by General formula
let selbyFormula=document.querySelector("p[name=f1]")
console.log(selbyid.textContent)
/* selecting all elements
queryselectorAll()is used to select all same type or same class element 
querySelectorAll()return nodelist as output which is similar to array
*/
let selall=document.querySelectorAll('p')
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    for (let i=0;i<selall.length;i++){
        selall[i].style.color="yellow"
    }
})

{/* <h2 id="hey" class="what" name="ria"></h2> */}
//by tag
let topic=document.querySelector("h2")
console.log(topic)
//by id
let topicbyid=document.querySelector("#hey")
console.log(topicbyid)
//by class
let topicbyclass=document.querySelector(".what")
console.log(topicbyclass)

let selall1=document.querySelectorAll('p')
let btn1=document.querySelector("button")

    btn1.addEventListener("dblclick",function(){
      selall1.forEach(function(el){
            el.style.color="Green"
            
    })
   
})



