let emp1={
    empCode:"tp00497",
    dept:"it",
    designation:"Engineer"
}
let emp2={
    empCode:"tp00998",
    dept:"production",
    designation:"Operator"
}
let emp3={
    empCode:"tp00997",
    dept:"QA",
    designation:"Sr.Engineer"
}

let getDetails=function(){
    console.log('\x1b[32m'+'*'.repeat(50)+`\n Employee Code='${this.empCode}'\n Dept='${this.dept}' \n designation='${this.designation}\n'`+'*'.repeat(50))
}
//bind() --> To bind get Details method to object and to set value of this keyword bind method used
getDetails.bind(emp1)() //bind method return function so instead of storing in variable and calling function we can directly call here by()

console.log('call Method')

//call--> here call method does not return any function we can directly call object to se value of this keyword
getDetails.call(emp2)

//apply-->for  accessing method with parameter in it apply method used
let getDetails2=function(Unid){
    console.log('\x1b[32m'+'*'.repeat(50)+`\n Unique ID=${Unid} \n Employee Code='${this.empCode}'\n Dept='${this.dept}' \n designation='${this.designation}\n'`+'*'.repeat(50))
}
getDetails2.apply(emp3,[`45545454`]) //parameter should be passed in array