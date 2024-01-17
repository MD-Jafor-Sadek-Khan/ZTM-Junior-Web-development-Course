//Evaluate these:
//#1
// [2] === [2] 
// false

// {} === {}

// false

//#2 what is the value of property "a", for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

console.log(object1.a, object2.a, object3.a, object4.a);
//#3 create two classes: an Animal class and a Mamal class. 
class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }

    sound() {
        console.log(`moo name is ${this.name}. moo type is ${this.type} and moo color is ${this.color}`);
    }
}

class Mamal extends Animal{
    constructor(name, type, color){
        super(name,type,color)
    }

}


const cow = new Mamal("kali", "Mamal", "Black and White")

cow.sound()

// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
