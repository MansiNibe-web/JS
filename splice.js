//splice method takes three element 
//Starting_index,nmber_of_element_to_add_or_delete, Add_new_numbers


let arr=[1,2,3,4,5,6,7];
console.log(arr.splice(1,0,-1,-2,-3,-4));
console.log(arr);

//if we provide 2 after starting element then it removes the 2 element after the starting index value 
//so it removes the 4, 5 value and add 44 and 55 after starting index that is 3
console.log(arr.splice(3,2,44,55));
console.log(arr);
