function solve(fruit,weight,price ){
    const weightKg = (weight / 1000).toFixed(2);
    const priceF= weightKg*price;
    return `I need $${priceF} to buy ${weightKg} kilograms ${fruit}`

}
console.log(solve('orange',2500,1.80));