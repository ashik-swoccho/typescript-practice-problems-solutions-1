# Type  Narrowing in TypeScript

## Introduction

When working with union types in typescript m, a variable can hold more than one data type, such a string | number. because typescript is not sure which specific type i have at a given moment . it blocks me from calling type-specific methods like .toUpperCase() directly . now there comes type narrowing......


## What is Type Narrowing ? 
Type Narrowing is a Typescript feature that allows to determine a variable's more specific type by a particular block of code based on conditions...

## Techniques in Type Narrowing

### typeof Operator
The typeof guard is used when dealing with values like strings , numbers or booleans.We check the type with the conditions . Like the Example : 

const print = (value : string | number) => {
    if(typeof value === 'string') {
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2))
    }
}

In the example after using the type guard , now no error shows.

### instanceof Operator
when working with classes and objects we use instanceof of check whether the object is instance of a particular class,Example:
class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

### in Operator
we use in operator to check whether a specific property name exists on the object.
Example:
type Bird = {fly : () => void}
type Fish = {swim : () => void}


const move = (animal : Bird | Fish) => {
    if('fly' in animal){
        animal.fly()
        return
    }

    animal.swim()
}


## Conclusion
Type narrowing keeps our applications safe from type related bugs without relying on any . By combining typeof for primitives,instanceof for classes and in for Objects properties, we can handle union types cleanly and safely..
