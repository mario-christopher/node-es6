export class Person{

    _name;

    constructor(name){
        this._name = name;
    }

    sayHello = () => {
        console.log(`Hello ${this._name} !`);    
    }
}