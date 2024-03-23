/*Write a JS function that when called, returns the next Fibonacci number, starting at 0, 
1. Use a closure to keep the current number.*/

function solve(){

    let num1 =0;
    let num2= 1;
    return function fibb(){
        let result = num1+num2;
        num1 = num2;
        num2 = result;
        return num1;
    }
    
}

let fib = solve();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13
let fib2 = solve();

fib2();
fib2();
fib2();
fib2();
fib2();
console.log(fib2());