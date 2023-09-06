function rectangle(width, height, color) {

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    function calcArea(){
        return this.width*this.height;
    }

    return {
        width,
        height,
        color: capitalize(color),
        calcArea
    }
}
let rect = rectangle(4, 5, 'red');
let rect2 = rectangle(44, 52, 'red');

console.log(rect2.width);

console.log(rect2.height);

console.log(rect2.color);

console.log(rect2.calcArea());