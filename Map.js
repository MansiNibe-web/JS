//Map function in js

//map using function
let demo=[1,2,3,4,5,6,7,8,9];

function multiply(n)
{
    return n*2;
}
console.log(demo.map(multiply));


//without function

let c=[1,2,4,5,6,7];
const dem=c.map((n)=>{
    if(n%2==0){
        return "even";
    }
    else{
        return "odd";
        
    }
})
console.log(dem);

let d=[12,2,3,4,5,6,7,8,5,56,6,];
function a(n)
{
    if(n>5)
    {
        return n;
    }
}
console.log(d.map(a));



let f=[1,2,3,4,5];
let fm=f.map((n)=>{
    if(n>4)
    {
        return "greater" + " "+ n;
    }
})
console.log(fm);







