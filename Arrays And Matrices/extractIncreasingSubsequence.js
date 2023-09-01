function solve(arr) {
    return arr.reduce(function (result, currentValue, index, initialArr) {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue)
        }
        return result;
    },[] )
}

function secSolve(arr){

    return arr.reduce(checkValue,[]);
    
    function checkValue(acc,c){
        if(c>=acc[acc.length-1]|| acc.length===0){
        acc.push(c)
        }
        return acc
    
    }
}

console.log(secSolve([1,

    3,

    8,

    4,

    10,

    12,

    3,

    2,

    24]));
    console.log(solve([1,

        3,
    
        8,
    
        4,
    
        10,
    
        12,
    
        3,
    
        2,
    
        24]));