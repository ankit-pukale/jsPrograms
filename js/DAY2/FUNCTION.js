function arith(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
arith(10,2)

console.log("Type of functions")
// 1 without parameter and without return type
function add()
{
    console.log(10+2)
}
add()
//2 with parameter and without return type
function add2(x,y){
    console.log(x+y)
}
add2(8,2)
//3 With parameter and with return type
function add4(x,y){
    return x+y
} let z= add4(10,1)
console.log(z)
