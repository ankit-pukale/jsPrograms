// Es6

// Object --- js 

// object ---> method and property 

// 

//1) object literal 

//2) function constructor 

//3) Es6 class

//4) Object.create() // method 

// function constructor 

// Es6 


let  WorldBank =  class {


    constructor(accName,accNumber,city){
        this.accName = accName
        this.accNumber = accNumber
        this.city = city

    }

    depoist(){
        console.log(' depoist world bank')
        
    }

    withdrawl(){
        console.log('withdrawl world bank')
    }


}

class SBI extends WorldBank{

    constructor(accName,accNumber,city,IFSC){
        super(accName,accNumber,city)
        this.IFSC = IFSC
    }
    depoist(){
        console.log(' depoist SBI')
        super.depoist()
        
    }

    withdrawl(){
        console.log('withdrawl SBI')
        super.depoist()
    }

}


class PNB extends WorldBank{
    constructor(accName,accNumber,city,IFSC){
        super(accName,accNumber,city)
        this.IFSC = IFSC
    }
    depoist(){
        console.log(' depoist PNB')
        super.depoist()
        
    }

    withdrawl(){
        console.log('withdrawl PNB')
        super.depoist()
    }
}

let mahal = new SBI("chinmay",123,"Nagpur",0001)
let mahalpnb = new PNB("sarika",123,"Pune",9000)

console.log(mahal)
console.log(mahalpnb)


mahal.depoist()
mahalpnb.depoist()

mahal.withdrawl()
mahalpnb.withdrawl()


console.log(mahal.IFSC)
console.log(mahal.accName)
console.log(mahal.accNumber)

console.log(mahalpnb.IFSC)
console.log(mahalpnb.accName)
console.log(mahalpnb.accNumber)

// polymorphism 


// overloading 

// same class , same method , different signature


// overloading
// class Calculator {

//     addtion(x,y){
//         console.log(x+y)
//     }


//     addtion(x,y,z){
//         console.log(x+y+z)
//     }


//     addtion(x,y,z,a){
//         console.log(x+y+z+a)
//     }

// }


// let c = new Calculator()

// c.addtion(1,2,3)
// c.addtion(2,3)
// c.addtion(1,23,4,5)




// java --- class 

// python 
function additionA(x,y,z,a){
    // console.log(x)
    // console.log(y)
    // console.log(z)
    if(x != undefined && y !== undefined && z !== undefined && a !== undefined){
        console.log(x+y+z+a)
    }
    else if(x != undefined && y !== undefined && z !== undefined){
        console.log(x+y+z)
    }
    else if(x != undefined && y !== undefined){
        console.log(x+y)
    }

}

additionA(1,2,3,4)  // 6
additionA(1,2,3)
additionA(11,22)

/*Example of overloading in js is as below */
class calC {

    additionA(x,y,z,a){
        // console.log(x)
        // console.log(y)
        // console.log(z)
        if(x !== undefined && y !== undefined && z !== undefined && a !== undefined){
            console.log(x+y+z+a)
        }
        else if(x !== undefined && y !== undefined && z !== undefined){
            console.log(x+y+z)
        }
        else if(x !==  undefined && y !== undefined){
            console.log(x+y)
        }
    
    }

}


let  n = new calC()
n.additionA(1,4)
n.additionA(1,4,3)
n.additionA(1,4,3,3)
// overloading   ==> same class , same method name , different signature

// parent ===> oops inheritance 


// different class , same method , same 

/*Example of over riding in js is as below */
class WorldBankA {

    depoist(greet){
        console.log(' welcome to '+ greet)
    }

}

class SBIB extends WorldBankA{

    depoist(greet){
        console.log(' welcome to '+ greet + "SBI")
    }


}

let vb = new SBIB()
vb.depoist('worldBank ny')


// world --  5 %  

// sbi - 6 %

// overloading --- same method name , same class ,differnt signature
// overiding - same method , different class , same signature


console.log(7 !== '7')
console.log(7 === '7')