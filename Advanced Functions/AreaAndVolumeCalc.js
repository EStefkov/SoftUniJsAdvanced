function area() {

    return Math.abs(this.x * this.y);
    
};

function vol() {

    return Math.abs(this.x * this.y * this.z);
        
};

function solve(area, vol, input) {

    const figures = JSON.parse(input);
    
    const result2 = figures.map(figure => ({
            area: area.call(figure),
            volume: vol.call(figure)
    }))
    return result2
    /*
    const result = [];
    for (const figure of figures) {
        const output= {
            area: area.call(figure),
            volume: vol.call(figure)
        };
        result.push(output)
    }
    return result
    */
    

}

const expample1 =  `[
    {"x":"1","y":"2","z":"10"}, 
    {"x":"7","y":"7","z":"10"}, 
    {"x":"5","y":"2","z":"10"}
]`
console.log(solve(area, vol,expample1));
