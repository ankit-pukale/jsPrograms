let fullName = "I am learning javscript"
let a=0
let str=fullName.toLowerCase()
for (let i = 0;i<str.length  ; i++) {
    let v=fullName[i]
    if(v==='a'||v==='e'||v==='i'||v==='o'||v==='u'){
        a=a+1
    }
}
console.log('number of vowels in string:'+a)