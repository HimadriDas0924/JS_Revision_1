// 2 ways to create objects
    // using object literals, using constructor fun

// object literal
const obj = {
    name: "himadri",
    age: 23,
    email: "abc@gmail.com",

    greetings: function() {
        console.log(`hello ${this.name}`);
        console.log(this);
    }
}

// console.log(obj.name);
// obj.greetings()

// console.log(this); // {}, but in browser env: it returns an object having a lot of funs like setTimeout, setInterval etc.

// console.log(globalThis);

// using constructor function
function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;

    this.greetings = function() {
        console.log(`greetings ${this.name}`);
        console.log(this);
    }

    return this; // returning the new object created is done implicitely. However we can do it explicitely.
}

const user1 = new User('himadri das', 24, 'def@gmail.com')
const user2 = new User('trisha das', 18, 'trisha@gmail.com')

// console.log(user1);
// console.log(user2);

// object created using constructor fn: has a property called .constructor which constains the constructor fun used to create the obj.
console.log(user1.constructor);

console.log(user1.constructor === user2.constructor); // true

const user3 = new user1.constructor('ram', 24, 'ram@gmail.com')

console.log(user3);