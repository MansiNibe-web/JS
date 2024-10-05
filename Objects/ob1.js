let employee={
    name:"mansi",
    "city":"pune",
    getname:function(){
        return this.name;
        
    }

}
console.log(employee.getname());
console.log(employee.city);

for(let i in employee)
{
    console.log(employee[i]);
    console.log(i);
    
}
employee.mobile="7774834341";
console.log(employee);
delete employee.city;
console.log(employee);

