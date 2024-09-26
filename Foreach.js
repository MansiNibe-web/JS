
//for each method in js
//for each method iterate on each value of the array are return all the values as a output 

// const demo=[1,"mansi",2,"ram",3,"sham"];
// console.log(demo);

// demo.forEach((n)=>{
//     console.log(n);
// })

// console.log(demo.forEach((n)=>{
//     return n;
// }));


//for each method with the help of function

let d=[1,2,3,4,5,6,7]
function demo2(n)
{
    if(n%2==0)
    {
        console.log("even");
    }
    else{
        console.log("odd");
    }
}


d.forEach(demo2);