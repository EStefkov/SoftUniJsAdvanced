class Circle {
    constructor(r){
        this.r=r;
        
    }

    get diameter(){
        return this.r * 2;
    }
    set diameter(value){
        this.r = value /2 ;
    }
}

const myCircle = new Circle(5);
console.log(myCircle);