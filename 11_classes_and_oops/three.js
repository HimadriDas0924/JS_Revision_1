const heros = ['ironman', 'thor']

const heroPower = {
    ironman: "suit", 
    thor: "hammer",
    spiderman: "web"
}

// now we want to declare some property which should be accessible to both.
// Array, Object: both can look up to access properties of Object prototype.

Object.prototype.greetings = function() {
    console.log(`greetings: ${this}`);
}


const father = {
    name: 'father_name',
    address: 'father_address',
    greetings: function() {
        console.log(`hello from ${this.name}`);
    }
}

const son = {
    name: 'son_name',
    age: 23
    // __proto__: father // inherting the properties of father. __proto__ is used to access the prototype of an object.
}

// m2) to get and set the prototype of object.

console.log(Object.setPrototypeOf(son, father)); // prototype of son is set to father object 
// syntax: Object.setPrototypeOf(obj, prototype)

console.log(Object.getPrototypeOf(son));


son.greetings()// son_name: inheritance