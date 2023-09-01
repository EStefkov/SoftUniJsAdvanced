// izpolzvame v slucheite kudeto iskame da reducirame masiv do 1 stoinost  suma na arr primer 
let myArr = [1,2,3,4,5,6,7];
let arr =[4,6,2,3,7,1,8];
let res = myArr.reduce(sumReducer,0);
let res1 = myArr.reduce((acc,c)=> acc+c);

let avrg = myArr.reduce((acc,c,i, a)=> acc+c / a.length ,0);
let max = myArr.reduce((acc,c) => acc>c ? acc : c);

// slucheq acc e kofa koqto pulnim s current element koito e c  s funkciqta mu kazvame kak da  pulnim kofata
function sumReducer(acc,c){
    return acc+c;
}
console.log(res,res1);
console.log(avrg);
console.log(max);

