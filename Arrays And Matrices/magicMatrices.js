function solve(arr){
    let rowSums = [];
    let colSums = [];

   for (let i =0;i<arr.length;i++){
    let row = arr[i];
    let sum = row.reduce((result,curr) => result + curr,0);
    rowSums.push(sum);
    let newRow = [];    
    for(let j = 0;j<arr.length;j++){
        let index = arr.length - 1 -j
        newRow.push(arr[index][i]);
        }
        let sums = newRow.reduce((result,curr) => result + curr,0);
    colSums.push(sum);
   }
    return rowSums.concat(colSums).every((el,i,arr)=>el === arr[0]);
}

function secondSolve(arr){
    let rowSums = arr.map((el)=> el.reduce((a,b) => a+b),0);
    let colSums = arr.map((i)=> {
        arr[0].map((col,j) => arr[j][i]);
    })
    
    return rowSums.concat(colSums).every((el,i,arr)=>el === arr[0])
}
console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(secondSolve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));