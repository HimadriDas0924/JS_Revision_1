// // in object, by default both {key, value} are converted to string and then stored.

// // we can also make a symbol act as a key

// const mySymbol = Symbol('key 1')

// let obj = {
//     name: "himadri",
//     age: 23,
//     [mySymbol] : "my key 1", // if would've written mySymbol : "my key 1" -> then mySymbol would've been converted to string
//     email: "himadridas@gmail.com",
//     greetings: function() {
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// // console.log(obj[age]); // error
// console.log(obj["age"]); // 23
// // console.log(obj."age"); // error
// console.log(obj.age); // 23

// console.log(obj[mySymbol]); // my key 1 : bcz internally key: mySymbol is not stored as a string but as Symbol


// // prototype object
// const parent = {
//     greetings: function() {
//         console.log(`hello my name is ${this.name}. Am I a human ? ${this.isHuman}`);
//     }
// }

// // property descriptor object
// const propertyDesc = {
//     name: {
//         value: "himadri",
//         writable: false,
//         emumerable: false,
//         configurable: false
//     },
//     age: {
//         value: 23,
//         writable: true,
//         emumerable: false,
//         configurable: false
//     }
// }

// const obj2 = Object.create(parent, propertyDesc)

// obj2.name = "babin" // NOTE: name is not writable: so new value is not updated BUT NO ERRORS
// console.log(obj2.name, obj2.age);


// // we can also freeze a Object. so that it cannot be changed
//     // in that case also: trying to change it won't give errors but changes will not be reflected.

// console.log(obj);

// Object.freeze(obj)

// obj.name = "trisha das" // changes not reflected

// console.log(obj);

// obj.greetings()


/* --------------------------------------------------------------------- */
// 2 ways to combine multiple obj into a single object

let obj1 = {a: 1, b: 2}
let obj2 = {c: 3, d: 4}

let obj3 = {...obj1, ...obj2} // spread operator: i.e inside an object, spreaded each of the elems of the object

console.log(obj3);
// obj1, obj2 remains same
console.log(obj1);
console.log(obj2);

// m2) const newObj = Object.assign(targetObj, sourceObj(s)) -> all of target, souce(s) are combined and put into the target. also the target obj is returned i.e same object

    // it's task is to modify the target object. Therefore, it doesn't throw any error even if we don't receive the target object into a new variable.


let obj4 = {name: "himadri", age: 23}

Object.assign(obj4, obj1, obj2) // result is stored in obj4 only


// if you want the result to be stored in a new object:

let obj6 = Object.assign({}, obj1, obj2) // in this case: we're combining all of them into an anonymous object, so we need to receive the returned object into a variable. Bcz we cannot access the anonymous changed object without any name.

console.log(obj4);
console.log(obj6);
// console.log(obj5);
// console.log(obj4 === obj5); // true


// Object destructuring

let obj = {
    name: {
        firstname: "himadri",
        lastname: "das"
    },
    age: 23,
    email: "himadri@gmail.com"
}

const {name: {firstname, lastname}, age, email} = obj

// console.log(name); // NOTE: name is now not defined
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(email);

function greet({name: {firstname, lastname}}) {
    console.log(`my name is ${firstname} ${lastname}`)
}
greet(obj)