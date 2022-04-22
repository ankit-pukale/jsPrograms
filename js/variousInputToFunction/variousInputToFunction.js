//string as parameter to function
function greet(word){
    console.log(`hello ${word}`) 
}
greet("ANKIT")
//hello ANKIT
console.log("***************************")
//number as parameter to function
function sum(a,b){
    console.log(a+b)
}
sum(1,2)
//3
console.log("***************************")
//object as parameter to function
let inform={fullName:"ankit",
empCode:"TP00497",
dept:"IT"}
function getval(obj){
    for(let key in obj){
        console.log(key,obj[key])
    }
}
getval(inform)
/*fullName ankit
empCode TP00497
dept IT*/
console.log("***************************")
//boolean as parameter to function
let a=false
function age(c){
 if(c==true){
     console.log("eligible")
 }
 else{
     console.log("not eligible")
 }
}
age(a)
//not eligible
console.log("***************************")
/*array as parameter to funtion*/
let arr=[1,2,3,4,5]
function addarr(g){
    let sum1=g.reduce(function(acc,el){
        return acc+el
    },0)
    return sum1
}
let total=addarr(arr)
console.log(total)
//15
console.log("***************************")

/*function as parameter to another function */
function greet(){
    return 'hello'
}
function Mname(user,fname){
    let fn=fname()
    console.log(`${fn} ${user}`)
}
Mname('ankit',greet)

// function add(x,y){
//     return x+y
// }
// function sum(x,y,m){
//     let fn=m(x,y)
//     console.log(x+y+fn)
// }
// sum(1,2,add)
function val(x,y){
    return x+y    
    }    
   let cc= function (x,y,m2){
        //let fn=m2(x,y)   
        console.log(x+y+m2(x,y))    
    }    
    cc(1,2,val)


