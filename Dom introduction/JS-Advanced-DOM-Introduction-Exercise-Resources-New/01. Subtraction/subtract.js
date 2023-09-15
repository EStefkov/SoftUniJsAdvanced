function subtract() {

    const firstEl=Number(document.getElementById('firstNumber').value);
    const secondEl=Number(document.getElementById('secondNumber').value);
    const result = firstEl - secondEl;
     document.getElementById('result').textContent = result
    
    console.log(result);
}