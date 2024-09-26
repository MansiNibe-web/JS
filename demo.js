
console.log("first demo !");


// array in js

let numbers=[1,2,3,4,5,6,7,8,9];

//find method in js 
//it takes a function 

numbers.find((n)=>{
    if(n%2==0)
        console.log("even");
    else{
        console.log("odd");
        
    }
        
})

//without console.log

console.log(numbers.find((n)=>{
    if (n>5)
    {
    return n;
    }
}));

console.log(numbers.find((n)=>
{
    if(n>5)
    {
        return n;   // return gives only single value as a output
    }
}));


