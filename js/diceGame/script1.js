// let roll=Math.ceil(Math.random()*6+1)
// console.log(roll)
// for(i=0;i<6;i++){
//     let ui=prompt("Enter number between 1 to 6:")
//     if(ui==roll){
//         alert("You Won The game")
//         break
//     }
// }

let roll=Math.ceil(Math.random()*6+1)
let ui=prompt("Enter number between 1 to 6:")
console.log(roll)
while(ui!=roll){
    ui=prompt("Enter number between 1 to 6:")
}
console.log("You won the game")