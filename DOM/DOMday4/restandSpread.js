function makearr(...a){
console.log(a)
}
makearr(1,2,3,4,5,6,7,8)

let arr=[ 1, 2, 3, 4,5, 6, 7, 8]
function spreadop(a,b,c,...z){
    console.log(a,b,c)
    console.log(z)
}
spreadop(...arr)