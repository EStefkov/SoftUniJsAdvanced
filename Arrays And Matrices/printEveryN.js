const solve = (arr, step) =>{
    return arr.filter((el, i)=> i % step === 0)
}



const secondSolve = (arr,step) => {
   let predicate = (el,i) => {
    return i % step === 0
   }
   let result = arr.filter(predicate);
   return result;
}


console.log(solve(['5',

'20',

'31',

'4',

'20'],

2));

console.log(secondSolve(['5',

'20',

'31',

'4',

'20'],

2));