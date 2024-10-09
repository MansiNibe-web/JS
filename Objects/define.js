let profile={
    "name":"mahesh",
    "age":"45",
    "mobile":"7774834341",
    "city":"kolhapur"
}

//define propery() gives us better access at writing the properties and managing their behaviour

//a simple property creation with the dot operator would give us the addition of property but 
//not the dedsired behaviour and better control over the property behaviour
//so always use the define property if yuo want a better access to property 

//we pass 3 parameters for defineproperty

Object.defineProperty(profile,'dob',{
    value:"01/08/1999",
    writable:false,     // checks can we overrite or not
    enumerable:true,    //for in access
    configurable:false  //can we delete or not 
})
profile.dob="23/2/32";
delete profile.dob;
console.log(profile);


console.log(profile);


Object.defineProperties(profile,{'pincode':{
    value:"443544",
    writable:false,
    enumerable:true,
    configurable:false
},'isMarried':{
    value:false,
    writable:false,
    configurable:false,
    enumerable:true
}})

console.log(profile);
