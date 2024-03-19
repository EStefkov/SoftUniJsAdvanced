function createCounter(){
    let count = 0;

     return function (){
        count++;
        console.log(count);
     }
}
const myCounter = createCounter();

myCounter();
myCounter();
myCounter();
myCounter();

const myCounter2 = createCounter();
myCounter2();