class Person {
    constructor(firstName,lastName,age,email){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }
    //overwriting toString
    toString(){
        return 'overriden method';
       // return `${this.firstname} ${this.lastName}`
    }

}

const myPerson = new Person("Emil",'Device',30,'sadassd@abv.bg')


console.log(''+myPerson);

console.log(myPerson instanceof Person);