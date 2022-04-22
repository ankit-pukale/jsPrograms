

// 1 to 10 
console.log(1)
console.log(2)



// for(intialization;conditionCheck;increment/decrement){

//     // statement

// }

for(let i = 0 ; i < 11; i++){    //i -- 1 // i -- 2  i --- 3
    console.log(i) // 0 , 1  , 2
}

console.log('------------------')


for(let i = 10 ; i >= 0 ; i--){
    console.log(i)
}

 
// print the table of 2
for(let i = 2 ; i <= 20 ; i = i + 2){
    console.log(i)
}

for(let i = 5 ; i <= 50 ; i = i + 5){
    console.log(i)
}

// print even and odd number 
//78 % 2 == 0

count = 0 
for(let i = 2 ; i < 1000 ; i++){

    if(i % 2 == 0){
        count = count +1 
        console.log(i)
    }
    if(count == 50){
        break
    }


}


for(let i = 0 ; i < 10 ; i++){ //1 // 2 // 3
    console.log(i) // 0 , 1 , 2 , 3
    if(i == 3){
        break
    }
}

for(let i = 0 ; i < 10 ; i++){  // 0 // 1 // 2 // 3
    if(i == 3){ 
        break
    }
    console.log(i) // 0 // 1 // 2
}

// continue
for(let i = 0 ; i < 10 ; i++){   // 1 // 2 // 3 // 4
    if(i == 3){ 
        continue
    }
    console.log(i)   // 0 // 1 // 2 // 4 // 5// 6// 7// 8// 9//

}
//  break

for(let i = 5 ; i <= 50 ; i = i + 5){  //10 // 15 // 20
    if(i == 15){
        continue
    }
    console.log(i) // 5 // 10  // 20 ,25,30,35,40,45,50
}

// program (syntax)
let c = 50
for(;c >= 5;){
    console.log(c)
    c = c - 5
}


// while loop

// for loop and while loop


// intialilization

// while(condition){

//     // statment

//     // increment / decrement


// }


let k = 0 

while(k <= 10){
    console.log(k) // 0 // 1 --- 10
    k = k + 1 // 1 // 2 // 10 // 11

}


// 5 table 

let o = 5

while(o <= 50){
    console.log(o)
    o = o + 5
}


// break 


let oi = 5

while(oi <= 50){
    console.log(oi)
    if(oi == 15){
        break
    }
    oi = oi + 5
}


// continue




let kl = 0 

while(kl <=5){
  
    if(kl == 3){
        
        kl = kl + 1
        continue
    }

    console.log(kl) // 0 // 1 // 2
    kl = kl + 1  // 1 // 2 // 3

}

//WAP TO REVERSE STRING USING HWILE LOOP
let z="STRING"
let i=0
let rev=""
while(i<z.length){   
    rev=z[i]+rev
    i++    
}
console.log(rev)
/*OUTPUT: GNIRTS*/