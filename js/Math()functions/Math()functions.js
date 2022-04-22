//1.Math.Random()
console.log("********Math.random()********")
console.log(Math.random())//output is number between range 0 to 0.99
console.log(Math.random()*10)//output is number between 0 to 9.99 (10is not inclusive)
console.log(Math.random()*5)//o/p is number between range 0 to 4.99
console.log(Math.random()*6)//o/p is number between range 0 to 5.99

//Math.ceil() :This method return next largest number if decimal value exist else return same number
console.log("********Math.ceil()********")
console.log(Math.ceil(10.7)) //o/p 11
console.log(Math.ceil(11))// o/p is 11
console.log(Math.ceil(-11.2))
console.log(Math.ceil(-11))

/* Math.floor() : this method method rounds a number DOWNWARDS to the nearest integer, and returns the result
i.e it removes decimal part of giver number and return only integer part*/
console.log("********Math.floor()********")
console.log(Math.floor(99.6))//99
console.log(Math.floor(-5.1))
console.log(Math.floor(-7.2))
console.log(Math.floor(-7))

/*Math.round():The Math.round() method rounds a number to the nearest integer.
Note: 2.49 will be rounded down (2), and 2.5 will be rounded up (3). */
console.log("********Math.round()********")
console.log(Math.round(2.7))//3
console.log(Math.round(2.2))//2
console.log(Math.round(-2.1))//-2
console.log(Math.round(-2.6))//-3

