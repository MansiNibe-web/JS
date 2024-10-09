let profile={
    "name":"mansi",
    "id":"3",
    "salary":"900000000",
    "email":"mansi123@gmail.com",
    
    "mobile":"9112990778",
    "city":"kolhar",
    getemail:function()
    {
        return this.email;
    }
}
let profile2=Object.create(profile); //create method copy keys of profile into profile2
profile2.name="mahesh";
profile2.id="4";



if(profile.getemail().includes("@gmail.com"))
{
    console.log("valid email");
    
}
else{
    console.log("Invalid Email");
    
}
console.log(profile2);