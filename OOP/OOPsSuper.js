//Encapsulation :Process of wrapping properties and methods in single unit.Class is BEst Example of Encasulation
//Inheritance :Using Properties and methods of one obect to other object.

class car{
 constructor(brand){
     this.brand=brand
 }
 Cardisp(){
    return(`this is my Car: ${this.brand}`)
 }
}
class Model extends car{
    constructor(brand,mod){
        super(brand)
        this.model=mod
    }
    
    dismsg(){
        super.Cardisp()
        console.log(this.Cardisp() ,'it is a ',this.model)
      
    }
}
let Cardisp=new Model("Nexa","Baleno")
console.log(Cardisp)
Cardisp.dismsg()
//
class div1{
    constructor(dn){
        this.divName=dn
    }
    divdetails(){
        return('div :',this.divName)
    }
}
class ul extends div1{
    constructor(dn,ulc){
        super(dn)
        this.ulClass=ulc
    }
    uldetails(){
        return('ul class name:',this.ulClass)
    }
}
class li extends ul{
    constructor(dn,ulc,lic){
        super(dn,ulc)
        this.liClassName=lic
    }
    display(){
        super.uldetails()
        super.divdetails()
        console.log(this.divdetails(),this.uldetails(),this.liClassName)
        
    }
}
let elDetails=new li("Div1","UlClass","LiClass1")
console.log(elDetails)
elDetails.display()
