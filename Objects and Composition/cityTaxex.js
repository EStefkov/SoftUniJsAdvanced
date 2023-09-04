function solve(nameCity, populationCity, tresuryCity) {
    const city = {
        name: nameCity,
        population: populationCity,
        tresury: tresuryCity,
        taxRate: 10,
        collectTaxes() {
            this.tresury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * (percent / 100));
        },
        applyRecession(percent) {
            this.tresury -= Math.ceil(this.tresury * (percent / 100));
        },
    }
    return city
}
const result = solve('Tortuga', 7000, 15000)
console.log(result);
result.collectTaxes();
console.log(result.tresury);
result.applyGrowth(10);
result.applyRecession(50);

console.log(result);
