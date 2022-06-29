//function declaration
function add(x,y){
    return x+y
}
a=add(10,6)
console.log(a)
//function expression
let add2=function(x,u){
   return (x+2)
}
console.log(add2(6,2))

//arrow function
let sub=(x,y)=>{
    return x-y
}
console.log(3,2)

//window function ->display output on browser
let x=10
console.log(window.x) //this will gives undefined because let is not global declaration use var instead

var y=20
console.log(window.y)  //20 bause var is global
/*Window is property of browser if we dont set window in js it automatically set to window by default
some method for window property are listed below
1. window.alert()
2.window.promt('Enter your Name:')
3.window.confirm('Do you really wanna quit?')  -->opens alert with yes and no option
4.window.location() //provides current url
*/
//Program one
let empName="Ankit"
let emp_details={
    empName:"Somanath",
    empCode:"ADEC529",
    display:function(){
        console.log(empName)  
    }
}
console.log(emp_details.empName)
console.log(emp_details.empCode)
emp_details.display()//This will gives output =>Ankit instead of somanath becuase accessed without this keyword.

/*This refers to current calling object */
var firstName = "Ankit"
let person2 = {
    firstName:"Somanath",
    lastName:"Mishra",
    display:function(){
        console.log(this.firstName)//Somanath
        // console.log(person2.fname)
        function person3(){
            console.log(this.firstName) //
            // console.log(window.fname) //Ankit
        }
        person3()
    }

}
person2.display()

//To get rid of above problem arrow function is used ,arrow function is having global scope
let emp2 = {
    firstName:"Somanath",
    lastName:"Mishra",
    display:function(){
        console.log(this.firstName) //Somanath because parent of display is emp2 and emp2.fullName=Somanath
        // console.log(emp2.fname)
        let person4 = ()=>{
            console.log(this.firstName) //
            // console.log(emp2.fname)
        }
        person4()
    }

}
emp2.display()

//if we use arrow function for display then output changes 
let emp3 = {
    firstName:"Somanath",
    lastName:"Mishra",
    display:()=>{
        console.log(this.firstName) //Ankit because parent of display is emp2 and parent of emp2 is window 
        // console.log(emp2.fname)
        let person4 = ()=>{
            console.log(this.firstName) //Ankit because parent of display is emp2 and parent of emp2 is window 
        }
        person4()
    }

}
emp3.display()

//lexical scope  =>values defined in function can be accessed in child function
function additionE(){
    //console.log(i)
    let x = 10 
    let y = 20 
    console.log(x+y) // 30

    function additionF(){
        let r = 100
        let u = 40
        console.log(x+y)
        console.log(r+u)

        function additionG(){
            let i = 89
            let l = 90
            console.log(x+y+r+u) 
            console.log(i+l)
        }

        additionG()

        
    }
    additionF()

}

additionE()


