const solve = (arr, delim) =>{
    let result = "";
    
    for(let i=0;i<arr.length;i++){
        result+= i == arr.length-1 ? arr[i] : arr[i]+delim;
    }

    return result
}

const secondSolve = (arr,delim) =>{
    return arr.join(delim);
}

console.log(secondSolve(['One',

'Twooo',

'Three',

'Four',

'Five'],

'-'))
console.log(solve(['One',

'Two',

'Three',

'Four',

'Five'],

'-'))