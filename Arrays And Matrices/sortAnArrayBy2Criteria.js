function solve(arr){
    
    return arr.sort((a,b)=> {
        if (a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length-b.length;
    })
}
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));