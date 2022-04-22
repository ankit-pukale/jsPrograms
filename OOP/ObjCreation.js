/*Normal Object =Object Literal*/
/*template ====> blue print  to create object ===> class */
class tmp{
    Fname=undefined
    age=undefined
    city=undefined
}
let ankit =new tmp
ankit.Fname="Ankit"
ankit.age=29
ankit.city="Vasco-Da-gama"
console.log(ankit)

//using constructor
class empdata {
    constructor(na,emp,dep){
        this.name=na
        this.empCode=emp
        this.dept=dep
    }
}
let emplist=[
    new empdata("ankit","adec529","IT"),
    new empdata("somanath","g201013","QA")
]
emplist.forEach(function(el){
    el["company"]="HFCL"
})
console.log(emplist)