
let userinp=prompt("Enter Number:")
let random=Math.random(Math.ceil)*6+1
console.log(userinp)
while(userinp!=random){
console.log("You lost Enter number again")
}
console.log("You won This time")