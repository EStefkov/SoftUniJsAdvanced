function solve(numOne, numTwo) {
    let value;
    while (numTwo != 0) {
        value = numTwo;
        numTwo = numOne % numTwo
        numOne = value;
    }
    return value
}
console.log(solve(15, 5));
console.log(solve(2154, 458));