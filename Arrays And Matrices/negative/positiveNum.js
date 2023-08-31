function solve(numbers){
    const result = [];

    for (const num of numbers) {
        num < 0 ? result.unshift(num) : result.push(num);
    }

   return result.join('\n')
}


console.log(solve([7,-2,8,9]));
