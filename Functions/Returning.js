function Outer(word){
    return function Inner(name){
        console.log(`${word} : ${name}`);
        
    }
}
const demo=Outer("hellooo");
demo("mahi")