let fullName = "I am learning javscript"
let str=fullName.toLowerCase()
let a=0
let e=0
let i=0
let o=0
let u=0
for (let j = 0;j<str.length  ; j++) {
    let v=str[j]
    if(v==='a'){
        a=a+1
    }
    else if(v==='e'){
        e=e+1
    }
     else if(v==='i'){
        i=i+1
    }
     else if(v==='o'){
        o=o+1
    }
     else if(v==='u'){
        u=u+1
    }
    }
console.log('occurence of a :'+a)
console.log('occurence of e :'+e)
console.log('occurence of i :'+i)
console.log('occurence of o :'+o)
console.log('occurence of u :'+u)