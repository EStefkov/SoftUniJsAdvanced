function solve() {
    const myObj = {
        firstName: 'Peter',
        lastName: ' Johnson',
        fullname(){
            return`${this.firstName} ${this.lastName}`
        },
        sayHi(){ return 'Hi!'}
    }
    console.log(myObj.fullname());
    // undifined
    const fullname = myObj.fullname;
    console.log(fullname());
    
    console.log(myObj.sayHi());
    const person = {
        firstName: 'Peterrrr',
        lastName: ' Johnsonnnn',
    } 
    person.sayHi = sayHi();
    console.log(person.sayHi);
}
console.log(solve());