function solve(arr){
    return arr.sort((a,b) => a-b).slice(arr.length /2);
}
console.log(solve([1,7,4,10]))