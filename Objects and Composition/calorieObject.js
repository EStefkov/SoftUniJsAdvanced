function solve(arr) {
    let result = {};

   arr.forEach((el,i) => {
    i %2 ===0 ? result[el] = undefined : result[arr[i-1]] = el;  
   })
    return result;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']));