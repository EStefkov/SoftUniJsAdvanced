

let myArr = [1,2,3,4,5,6,7];



myArr.splice(2,2,19,555,62345,'sadas')
console.log(myArr);
// purvoto e nachalniq index 
// vtoroto e kolko elementa da iztrie
// i stoinosta koqto iskame da dobavim mojem da dobavqme poveche ot 1 
console.log(myArr.fill(0,2,6))
// zapulvane purviq parametur e s kakvo da zapulnim massiva
// vtorite dva sa  range  ako propusnem tretiq element do kraq na masiva zamenq elementite i ako ne mu dadem drugi elementi zapulva vsichko s 0 v toq sluchai
console.log(myArr.reverse());