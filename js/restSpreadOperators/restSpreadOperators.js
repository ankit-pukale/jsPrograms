//reset operator :Coverts Comma Separated values to array
function opRest(...a){
    console.log(a)//[ 1, 2, 3, 4, 5, 'Ankit' ]
}
opRest(1,2,3,4,5,'Ankit')
function opRest1(a,...b){
    console.log(a) //1
    console.log(b)//[2, 3, 4, 5, 'Ankit' ]
}
opRest1(1,2,3,4,5,'Ankit')


//Spread Operator   
let arr=[1,2,3,4,5]
function sum(a,b,c,d){
    console.log(a+b+c) //6
    console.log(a+d)//5
}
sum(...arr)