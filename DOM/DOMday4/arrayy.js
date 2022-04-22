//4 push pop shift unshift
let a=[1,2,3,4,5,6,7]
console.log(a.push("c"))
console.log(a.unshift("a"))
console.log(a)
console.log(a.pop())
console.log(a.shift())
console.log(a)
console.log("***************")
//5 indexOF reverse sort slice splice
console.log(a.indexOf(4))
console.log("*****************")
console.log(a.reverse())
console.log("*****************")
console.log(a.sort())
console.log("*****************")
console.log(a.slice(1,3))
console.log("*****************")
console.log(a.splice(1,3,"A"))//change original array
console.log("*****************")
console.log(a)
a=[[1,2,3],[4,5,6,7]]
//flat concat fill includes join
console.log(a.flat())
a=[1,2,3]
let b=[4,5,6]
console.log(a.concat(b))
console.log(a)
a=[1,2,3,4,5,6]
a.fill("@",1,3)
console.log(a)
console.log(a.includes("@"))
console.log(a)
console.log(a.join("-"))
//

let arr=[1994,1993,1983,1999]
b=arr.map(function(el){
    return 2022-el
})
console.log(b)
arr=[1,2,3]
b=arr.reduce(function(acc,el){
    return el+acc
})
console.log(b)
arr=[1,2,3,300,40,30]
b=arr.filter(function(el){
    return el>10
})
console.log(b)


