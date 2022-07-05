//calculate even numbers from array
let arr=[1,2,3,4,5,6,7,8,9,10]
let z= arr.filter(function(el){
    return el%2==0
})
console.log(`Even number from the array are ${z}`)
//
function createCheckDigit(membershipId) {
    // Write the code that goes here.
    let arr=membershipId.split("")
    let z=arr.filter(function(el){
      return Number(el)
    }).map(function(el){
      return Number(el)
    }).reduce(function(acc,el){
      return acc+el
    })
    let k=0
    if(z.length!=1){
      for(let i=0;i<z.length;i++){
        k=z[i]+k
      }
    }else{
      k=z
    }
    return k;
  }
  
  console.log(createCheckDigit("55555"));
  console.log('bye')