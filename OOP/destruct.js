let x=[1,2,3,4]
let [a,b,c,d]=x
console.log(a)
console.log(d)
let obj={
    fullName:"Ankit",
    EmpCOde:"TP00497",
    skills:["js","Vb.net","html"]
}
let {fullName:fn,EmpCOde:ec,skills:[e,f,g]}=obj
console.log(g)
console.log(fn)

