const myObj = {
  name: "Peter",
  myMethod() {
    console.log("My name is " + this.name);
  },
};
document.querySelector("button").addEventListener("click", myObj.myMethod.bind(myObj));
/*
function myFunc(a, b) {
  console.log(this);
  console.log(a, b);
}

myFunc(5, 6);

console.log("------");

myFunc.apply(myObj, [4, 2]);

console.log("------");

myFunc.call(myObj, 6, 11);

console.log("------");

const boundFunc = myFunc.bind(myObj);

boundFunc(9,9);

const funcRef = myObj.myMethod;

const boundRef = myObj.myMethod.bind(myObj)

funcRef();
boundRef();
*/
