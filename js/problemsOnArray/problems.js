console.log("****PROBLEM 1*********")
//1.What is the output of the following code?
let a=[1,2,3]
a[100]="100"
console.log(a.length)
console.log(a)

console.log("****PROBLEM 2*********")
//2.What is the output of the following code?
let ar=['a','b','c','d','e','f'];
const b=ar;
ar=[];
console.log(b);

console.log("****PROBLEM 3*********")
//3 How could you print unique values from an array?
const ab = [1, 2, 2, 4, 5, 6, 6]
function getUniqueValues(ab) {
    const set = new Set(ab)
    return [...set]
  }
  console.log(getUniqueValues(ab))

  