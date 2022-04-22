//Reverse String
//Method1
let city="Pune"
let rev=""
for (let i=0;i<city.length;i++){
    rev=city[i]+rev
   //p+""=P
    //u+p=up
    //n+up=nup
    //e+nup=enup
}
console.log(rev)
//method 2
let city2="pune"
let rev2=""
for(i=city.length-1;i>=0;i--){
    rev2=rev2+city2[i]
        //""+e
        //e+n=en
        //en+u=enu
        //enu+p=enup
}
console.log(rev2)
//method 3
let city3="mumbai"
let rev3=city3.split('')
city3=rev3.reverse()
rev3=city3.join('')
console.log(rev3)

