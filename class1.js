class Car {
    constructor(brand, model) { // we can pass as many needed parameter here
        this.brand = brand; 
        this.model = model;
    }

    displayInfo() { /* You can define methods inside a class by directly using a name only here.
        These methods can be called on instances of the class. */
        console.log(`This is a ${this.brand} ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Corolla"); /* To create an instance of a class, 
you use the new keyword followed
 by the class name and any required parameters for the constructor.  */
myCar.displayInfo(); // Output: This is a Toyota Corolla



// another example

class Calculator {
    constructor() {
        // No need for any properties in this simple example
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
}

// Example usage
const calc = new Calculator();
console.log(calc.add(5, 3));       // Output: 8
console.log(calc.subtract(5, 3));  // Output: 2
console.log(calc.multiply(5, 3));  // Output: 15
console.log(calc.divide(6, 2));     // Output: 3
console.log(calc.divide(5, 0));     // Output: Cannot divide by zero


// another example 
class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log (Animal)
