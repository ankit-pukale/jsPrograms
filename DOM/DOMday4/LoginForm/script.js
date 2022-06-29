let txtuname=document.querySelector('.uname')
let txtpass=document.querySelector('.pass')
let btn=document.querySelector('button')
let obj=[{
    username:"ankit",
    password:"adec529"
},{
    username:"navin",
    password:"g201013"
},{
    username:"somanath",
    password:"tp00497"
},
{
    username:"naaz",
    password:"naaz@123"
}]

btn.addEventListener('click',function(){
   let i=0
   while(i<obj.length){
       let un=obj[i].username
       let ps=obj[i].password
    if(un==txtuname.value && ps==txtpass.value){
        alert("User logged in")
        location.href="page2.html"
        break
    }else{
        
    }
    i++
}
})