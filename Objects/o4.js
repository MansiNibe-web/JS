let obj={
    name:"manu",
    age:23,
    mob:"9112990778",
    city:"kolhar",
    pincode:"413710",
    getname:function(){
        return this.name;
    }
}
console.log(obj);

Object.defineProperty(obj,'dob',{
    value:'03/05/2001',
    writable:false,
    enumerable:true,
    configurable:false
    

})
console.log(obj);
