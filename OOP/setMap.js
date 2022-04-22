/*Set ->collection of unique values*/
let arr=[11,22,33,11,22,33,32]
//new Set
let a= new Set(arr)
console.log(a) //{ 11, 22, 33, 32 }
//add
a.add('b')          
console.log(a)//{ 11, 22, 33, 32, 'b' }
//delete
a.delete('b')
console.log(a)//{ 11, 22, 33, 32 }
//has
console.log(a.has(11)) //true
//forEach
a.forEach(function(el){
    console.log(el+2) //13  24  35  34
})
console.log(a.values())//[Set Iterator] { 11, 22, 33, 32 }
a.clear()
console.log(a)//{}
console.log("*****************************************************************")
/*Map --> Map holds key-value pairs where the keys can be Any Datatypes*/
//new  MAp
let b =new Map()
//set
b.set(1,"first Element")
b.set("Second","second Element")
b.set(["first","second"],"first element")
b.set({ 'ankit':"name", 27:"age","skills":['js','html','css']},"ankit")
b.set(false,"false value")
console.log(b) /*  1 => 'first Element',
'Second' => 'second Element',
[ 'first', 'second' ] => 'first element',
{ '27': 'age', ankit: 'name', skills: [ 'js', 'html', 'css' ] } => undefined,
false => 'false value'
} */

//get
console.log(b.get(false)) //false value
console.log(b.get(1)) //first Element
//has
console.log(b.has(1)) //true
//for Each
b.forEach(function(a,b){
 console.log(a,b)
})
/* first Element 1
second Element Second
first element [ 'first', 'second' ]
ankit { '27': 'age', ankit: 'name', skills: [ 'js', 'html', 'css' ] }
false value false */
console.log("**********")
//key
for(let key of b.keys()){
    console.log(key)
}
/*1
Second
[ 'first', 'second' ]
{ '27': 'age', ankit: 'name', skills: [ 'js', 'html', 'css' ] }
false */
//values
console.log("**********")
for(let key of b.values()){
    console.log(key)
}
/*first Element
second Element
first element
ankit
false value */

//entries
for(let [key,values] of b.entries()){
    console.log(key,values)
}
/*1 first Element
Second second Element
[ 'first', 'second' ] first element
{ '27': 'age', ankit: 'name', skills: [ 'js', 'html', 'css' ] } ankit
false false value */
