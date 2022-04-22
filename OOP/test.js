let PCconfig=function(rm,hdd,cpu){
    this.Ram=rm
    this.Storage_space=hdd
    this.CPU=cpu
}
let HP =new PCconfig("16GB","500GB","I7 3rd Gen")
console.log(HP instanceof PCconfig)
console.log(HP)
//proto type
PCconfig.prototype.PcDetails=function(){
    console.log(`Ram=${this.Ram},\nStorageSpace=${this.Storage_space},\nCPU=${this.cpu}`)
}
HP.PcDetails()