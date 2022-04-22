/*Object creation methods:
1.object literal
2.ES6
3.Function Constructer
4.object.create
 */

//Obect Literals=>Comma seperated Properties and values(Noraml Object)
console.log("**********Object Literal***********")
let OFC_fiber={
    Fiber_type:"G.652d",
    fiber_color:"Black",
    Fiber_grade:"a"
}
console.log(OFC_fiber.Fiber_type) //retrive
OFC_fiber.Fiber_type="G.652d ULL" //Update
OFC_fiber.fiber_length="25"//create
delete OFC_fiber.fiber_length //delete
//Es6
//1.Defining properties outside the class
console.log("**********Defining properties outside the class***********")
class ofc_fiber{
    fiber_type=undefined
    fiber_color=undefined
    fiber_grade=undefined
}
let corning=new ofc_fiber()
corning.fiber_type="G.652d"
corning.fiber_color="Orange"
corning.fiber_grade="B"
console.log(corning)
//ptototype
ofc_fiber.prototype.QAstatus=function(){
    console.log("Qa passed")
}
corning.QAstatus()
//2.defining properties while creating object
console.log("**********defining properties while creating object***********")
class empinfo{
    constructor(en,ec,dept){
        this.Empname=en
        this.EmpCode=ec
        this.Department=dept
    }
}

let emp1=new empinfo("Ankit","TP00497","IT")
console.log(emp1)
//prototype
empinfo.prototype.EmpDetails=function(){
    console.log(` Employee Name:${this.Empname},\n Epmloyee Code:${this.EmpCode}, \n Department:${this.Department}`)
}
emp1.EmpDetails()
//GET SET METHOD
console.log("**********GET SET METHOD***********")
class pen{
    color(cl){
        this.color=cl
    }
    type(t1){
        this.Type=t1
    }
}
let reynolds=new pen()
reynolds.color("Blue")
reynolds.type("Refill")
console.log(reynolds)
//Function Constructor
console.log("**********Function Constructor***********")
let PCconfig=function(rm,hdd,cpu){
    this.Ram=rm
    this.Storage_space=hdd
    this.CPU=cpu
}
let HP =new PCconfig("16GB","500GB","I7 3rd Gen")
console.log(HP instanceof PCconfig)
console.log(HP)
//proto type
PCconfig.prototype.PcDetails=function(){
    console.log(`Ram=${this.Ram},\nStorageSpace=${this.Storage_space},\nCPU=${this.cpu}`)
}
HP.PcDetails()
//Object.Create
console.log("**********Object.Create***********")
let laptop={
    msg:function(){
        console.log(`${this.ram}`)
    },
    config:function(rm,hdd,gc){
        this.Ram=rm
        this.Storage=hdd
        this.GraphicsCard=gc
    }
}
let Dell=Object.create(laptop)
Dell.Ram="32GB"
Dell.Storage="1TB"
Dell.GraphicsCard="2GB"
console.log(Dell)
console.log(Dell.hasOwnProperty("Ram"))
console.log(Dell.hasOwnProperty("msg"))

