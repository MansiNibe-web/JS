

//takes two (2) parameter compulsory
//1 - starting index
//2- ending index

let fruits=['banana','mango','orange','watermelon','gava'];
console.log(fruits.slice(2,5));

//starting index in slice methgod is 0
//it return the value according to the index values which we provide but 
//it includes the starting index but excludes the ending index
//means if we provide 0,3
//then it gives the value of the 0, 1,2 index value
//but not gives the 3 index value .