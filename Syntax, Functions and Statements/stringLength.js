function solve(... params){
    let sum = params.reduce((a,c) => a+c.length, 0);
    let avg = Math.floor(sum /3);
    return `${sum}\n ${avg}`;
}

console.log(solve('pasta', '5', '22.3','dsadasd'))