function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result[result.length]=arr[i]
    }
    return result.join(', ');
}
console.log(solve([40, 50, 60, 80, 70, 90]))