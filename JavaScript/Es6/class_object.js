class person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    introduce(){
        return`Hi, I am ${this.name} and ${this.age} years old`;
    }
}

let identity = new person('Sabbir',22);
// identity.introduce()
// console.log(identity.introduce())


class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height
    }
}

let area = new rectangle(12,5);
console.log(area.area())