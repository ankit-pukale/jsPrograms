let ulList=document.querySelector('ul')
let btn=document.querySelector('button')
//let liList=document.querySelectorAll('li')
let txtinput=document.querySelector('input')
btn.addEventListener('click',function(){
    let text=txtinput.value
    let newText=document.createElement('li')
    newText.textContent=text    
    ulList.appendChild(newText)
    let newlist=document.querySelectorAll('li')
   for(let i=0;i<newlist.length;i++){
       newlist[i].classList="class_new"
       console.log(newlist[i].className)
       if(i%2==0){
    newlist[i].style.color="magenta"
   }else{
    newlist[i].style.color="silver" 
   }
}
})
//changing class name

