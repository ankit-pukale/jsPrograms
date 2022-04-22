/*Destruction of Array*/
let arr=[1,2,34,56,69,70]
let [a,b,c,d,e,f]=arr
console.log(a)//output 1
console.log(f)//output 70
//Destruct Obj
let obj={
    fullName:'Ankit Pukale',
    dept:"IT",
    empCode:"TP00497"
}
let {fullName,dept,empCode}=obj
console.log(dept)//IT
console.log(empCode)//TP00497
/*allies: if two or more properties are of same value then new name(alies)is assigned.after assigning alies old name can not
be used */
let{fullName:fn,dept:dep,empCode:ec}=obj
console.log(dep)//IT
console.log(fn)//Ankit Pukale
/*Destruct array of objects*/
let obj2=[{fname:"Ankit",dept:"QA"},{fname:"somanath",dept:"IT"},{fname:"Navin",dept:"PROD"}]
let[{fname:fn1,dept:dep1},{fname:fn2,dept:dep2},{fname:fn3,dept:dep3}]=obj2
console.log(fn2)//somanath
console.log(fn1)//Ankit


