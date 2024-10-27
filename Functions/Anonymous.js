//1) assigning to a variable
const names=function()
{
    return "mansi";
}

console.log(names());

//second function 
const demo=function(){
    return "saurabh";
}
console.log(demo());

//passing as an argument 

let numbers=[1,2,3,4,5,6];
console.log(numbers.map((n)=>{
    return n*2;
}));


//filter method iterate on each element and gives the array of elements 
//filter work on a specific conditions
console.log(numbers.filter((n)=>{
    if(n>2){
        return n;
    }
}));


//gives the array of the elements instead of single elements
//map does not work on a specific conditions 
console.log((numbers.map((n1)=>{
    if(n1>20){
        return n1;
    }

})));


//for each iterate on a single element 
//gives the single sing element as a outpur not array 
numbers.forEach((n)=>{

    console.log(n*2);
    
})



//normal  anonymous function

console.log(numbers.map(function(n){
    return n*2;
}));

