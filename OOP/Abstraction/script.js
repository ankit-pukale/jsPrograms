let fibType=document.querySelector('#fiberType')
let fibCol=document.querySelector('#fiberColor')
let fibsupp=document.querySelector('#supplier')
let qty=document.querySelector('#quantity')
let btnaddTxt=document.querySelector('#addTxt')
let addQty=document.querySelector('#addQty')
let remQty=document.querySelector('#remQty')
let qtyAdded=document.querySelector('#qtyAdded')
let qtyConsumed=document.querySelector('#qtyConsumed')
let availQtu=document.querySelector('#availQtu')
//create columns in database

class fiberdetails{
    constructor(ft,fc,q){
        this.fiberType=ft
        this.fiberColour=fc
        this.Quantity=q
        this.ConsumptionDetail=[]
    }
    addfibqty(qty){
        this.Quantity=this.Quantity+qty
        console.log(`available QTy of Fiber type:${this.fiberType},color:${this.fiberColour} is:${this.Quantity}`)
        this.ConsumptionDetail.push(qty)
    }
    consumeFiber(qty){
        if(this.Quantity>qty){
            this.Quantity=this.Quantity-qty
            console.log(`Updated QTy of Fiber type:${this.fiberType},color:${this.fiberColour} is:${this.Quantity}`)
            this.ConsumptionDetail.push(-qty)
        }
        else{
            console.log(`sufficient quantity not available to consume,Available Qty is:${this.qty}`)
        }
    }
    totalfiberaddedtoday(){
        let a=this.ConsumptionDetail.filter(function(el){
            return el>0
        }).reduce(function(acc,el){
            return acc+el
        },0)
        console.log(`Extra ${a} km Qty added Today`)
    }
    totalfiberConstoday(){
        let a=this.ConsumptionDetail.filter(function(el){
            return el<0
        }).reduce(function(acc,el){
            return acc+Math.abs(el)
        },0)
        console.log(`Extra ${a} km Qty Consumed Today`)
    }
}
btnaddTxt.addEventListener('click',function(){
    let supp=fibsupp.value.value
    let fibertype=fibType.value
    let fibColor=fibCol.value
    let fibQty=qty.value
    supp=new fiberdetails(fibertype,fibColor,fibQty)
    console.log(supp,fibertype,fibColor,fibQty)
})

Corning.consumeFiber(51.2)
Corning.addfibqty(50.2)
console.log(Corning.ConsumptionDetail)
Corning.totalfiberConstoday()
Corning.totalfiberaddedtoday()