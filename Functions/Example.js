function factor(num1){
    return function actual_num(num2){
        console.log(num1*num2);
        
    }
}
const demo=factor(10);
demo(2)