class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        return `${this.name} barks`
    }
}

class dog extends Animal{
    constructor(name){
        super(name)
    }
}

let dog1 = new dog('Dog');
// console.log(dog1.speak())


class Vehicle{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    detail(){
        return ` ${this.brand} ${this.model}`
    }
}

class car extends Vehicle{
    constructor(brand,model){
        super(brand,model)
    }
}
let car1 = new car('Toyota','Corolla');
console.log(car1.detail());