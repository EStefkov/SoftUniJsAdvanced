function solve(arr, startIndex,endIndex){
    if(startIndex<0){
        startIndex =0;
    }
    if(Array.isArray(arr) == false){
        return NaN;
    }
    if (endIndex > arr.length -1){
        endIndex = arr.length -1;
    }
    return arr.slice(startIndex,endIndex + 1).reduce((a,c)=>a + Number(c), 0);
}

console.log(
    solve([12312,321321,312312,312,312,3,123,12,312,312],3,6));
    console.log('Case 2');
    console.log(
    solve([12312,321321,312312,312,312,3,123,12,312,312],-3,1));
    console.log("Case 3");
    console.log(
    solve([12312,'asdqsadas',312312,312,312,3,123,12,312,312],1,6));

    console.log("Case 4");
    console.log(
    solve([],3,6));
    console.log("Case 5");
    console.log(
    solve('test',3,6));