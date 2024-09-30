let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.every((n)=>{
    if(n<10)
    {
        return n;
    }
}));


console.log(arr.every((n)=>{
  //  n>5;
    return n>5;
}));


console.log(arr.some((n)=>{
    return n>5;
}));
