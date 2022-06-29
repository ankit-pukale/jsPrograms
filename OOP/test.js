let str='this 12 is 22 my 21 car'
let arr=str.split(' ')
console.log(arr.filter(function(el){
    return (Number(el))
}).map(function(el){
        return Number(el)
}).reduce(function(acc,el){
    return acc+el
}))

