//1.push()
let a=['Ankit','Amit','Akshay']
let z=a.push('Shridul')
console.log(z)
console.log(a)
//2.Unshift()
let b=['Ankit','Amit','Akshay']
let y=b.unshift('Shridul')
console.log(y)
console.log(b)
//3.pop()
let c=['Ankit','Amit','Akshay']
let d=c.pop()
console.log(d)
console.log(c)
//4.shift()
let e=['Ankit','Amit','Akshay']
let f=e.shift()
console.log(f)
console.log(e)
//5.includes()
let g=['Ankit','Amit','Akshay']
let h=g.includes('Ankit')
console.log(h)
//6.indexOf()
let i=['Ankit','Amit','Akshay']
let j=i.indexOf('Ankit')
let k=i.indexOf('Shridul')
console.log(j)
console.log(k)
//7.sort()
let r=['Shridul','Ankit','Amit','Akshay']
let s=r.sort()
console.log(s)
//8.reverse()
let m=['Shridul','Ankit','Amit','Akshay']
let l=m.reverse()
console.log(l)
//9.flat
let aa =[[1,2,3],[4,5,6]]
let bb=aa.flat()
console.log(bb)
console.log('*********************')
//10.slice
     //  0 1 2 3 4 5
let cc=[ 1,2,3,4,5,6 ]
      //-6-5-4-3-2-1
      let ab=cc.slice(1,5)
      let ba=cc.slice(3)
      let cb=cc.slice(3,-1)
      let db=cc.slice(-5,-1)
      let eb=cc.slice(-1,3)
console.log(ab)
console.log(ba)
console.log(cb)
console.log(db)
console.log(eb)
// 11.Splice
jkl = [11,22,33,44,55,66]
// jkl.splice(1,2)
// console.log(jkl)
jkl.splice(1,2,88,99)
console.log(jkl)
// 12.Map
let names=['ankit','akshay','amit','shridul']
let al=names.map(function(el,index,arr){
      return 'welcome '+el 
})
console.log(al)
// 13.Filter
let num=[1,2,3,4,5,6]
let ak=num.filter(function(el){
      return el>2
})
console.log(ak)
// 14.reduce()
let bt=[1,2,3,4,5,6]
let tb=bt.reduce(function(acc,el,index,arr){
      return acc+el 
},2)
console.log(tb)
// 15.forEach()
console.log('********************')
let numbers=[1,2,3,4,5,6]
numbers.forEach(function(el){
      console.log(el+10)
})
// 16.some
let so=[1,2,3,4,5,6]
let os=so.some(function(el){
      return el>2
})
console.log(os)
// 17.every
let eve=[1,2,3,4,5,6]
let vee=so.every(function(el){
      return el>2
})
console.log(vee)
// 18.find
let fin=[1,2,3,4,5,6]
let nif=fin.find(function(el){
      return el>9
})
console.log(nif)
// 19.findIndex
let finI=[1,2,3,4,5,6]
let nifI=fin.findIndex(function(el){
      return el>5     
})
console.log(nifI)
// 20.concat
let arra = [11,2,44]
let aaa = [33,44,5]
let gggg = arra.concat(aaa)
console.log(gggg)
//21.join()
let info = ["chinmay","deshpade",77019192441]
let infoA = info.join("-")
console.log(infoA)
// 22.fill()
let bba=[11,21,31,41,51,61]
let mba=bba.fill('#',1,4)
console.log(mba)