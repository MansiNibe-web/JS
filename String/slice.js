let str="I am the best !";
console.log(str.slice(2,-5));
//in java script if we loot at the index of the character 
//if we go forward then the index will start from 0,1,2,3,4,5,like this
//but if we go backward direction the the index starts from -1,-2,-3,-4,-5

//so slice method gives the part of the string according the range of the indexes provided
//it gives the output from index 2 to -5 but not include -5 
//the o/p = am the b




//substring method
//similar as slice
//but in this method if we provide negative index then this method convert the negative index to positive 0

let str2="MansiNibe";
console.log(str2.substring(2,-4)); //output wiil be Ma
// so it conver -4 to 0 and then it prints the vales from 0 to 2 but not include the 2

