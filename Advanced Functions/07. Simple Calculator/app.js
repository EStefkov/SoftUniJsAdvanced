function calculator() {
        let firstElement 
        let secondElement
        let resultsElement
    return {
        init: (selector1,selector2,resultSelector) => {
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultsElement = document.querySelector(resultSelector);
        },
        add: () => {
            resultsElement.value = Number(firstElement.value) + Number(secondElement.value)

        },
        subtract: () =>{
            resultsElement.value = Number(firstElement.value) - Number(secondElement.value)
        }
    }
}

let obj = calculator();
obj.init('#num1','#num2','#result')
let add =obj.add;



