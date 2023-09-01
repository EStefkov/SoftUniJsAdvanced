

let myArr = [1,2,3,4,5,6,7];
let second = ['d','a','c',4,5,2,3,1,13];
let names = ['George', 'John', 'Marry', 'Alice','george']

myArr.splice(2,2,19,555,62345,'sadas')
console.log(myArr);
// purvoto e nachalniq index 
// vtoroto e kolko elementa da iztrie
// i stoinosta koqto iskame da dobavim mojem da dobavqme poveche ot 1 
console.log(myArr.fill(0,2,6))
// zapulvane purviq parametur e s kakvo da zapulnim massiva
// vtorite dva sa  range  ako propusnem tretiq element do kraq na masiva zamenq elementite i ako ne mu dadem drugi elementi zapulva vsichko s 0 v toq sluchai
console.log(myArr.reverse());

//sort() po default shte sravni po  asci tablica
second.sort()
//variant 1  function compare(a,b){ return b-a }
// suzdavam function koqto da compareva numbers  second.sort(function)
//function compare(a,b){ return a-b }
//second.sort(compare);
//variant 2
second.sort((a,b) => a-b);

console.log(second);
names.sort((a,b)=>a.localeCompare(b));

console.log(names);

console.log(names.join(' '));
//concat suzdava masiv ot drugi masivi 
console.log(names.concat(myArr,second).join(' '));

//slice() kopira  kato mu kajem ot kude, kolko elementa da vzeme [)

console.log(myArr);
console.log(myArr.slice(1,3));
console.log(myArr.slice(-3));
// indexOf() vrushta rezultata na koi index se namira 
// includes dali dadena stoinost q ima v masiva
//forEach iteraciq  s funkciq primer
myArr.forEach(x => console.log(x))
myArr.forEach((x,i) => console.log(`${i}-> ${x}`));
//some() primer
let array = [1,2,3,4,5,6,7];
let isEven = function(element){
    return element% 2 === 0
}
console.log(array.some(x=>x==8));

console.log(array.some(isEven));
//find shte vurne i stoinosta ot some

console.log(names.find(x => x[0]=='G'));
//filter shte vurne massiv sus vsichki koito otgovarqt 
console.log(array.filter(x=> x%2==0));

//map  suzdava nov array suotvetsvasht na funckciqta 
let numbersAsStrings =['1','2','3']
console.log(numbersAsStrings.map(x => Number(x)).map(x=> x+1))
//arr.reduce (function, accumulator) =   fn(acc, curr, i,arr)
let matrix = [
    [20, 40],
    [10, 60]
];
// redusvame matrixa  
let result = matrix.reduce(matrixReducer )
console.log(result);
function matrixReducer(acc, c){
    return acc.concat(c);
}