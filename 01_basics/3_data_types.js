// functions in JS are Objects bcz they take properties from Object, but functions are 'callable objects'. so typeof function === 'function' so we can distinguish if this is callable or not.

/* What are symbols ? 

- when Symbol() constructor is called, it returns a Symbol value which is always unique.

- Symbols are often used to add unique property keys to an object which would never collide with another key added to the same object.

- Thus, it helps to create a weak form of encapsulation or weak information hiding.

*/

let sym1 = Symbol('abc')

let sym2 = Symbol('abc')

console.log(sym1, sym2);

console.log(sym1 === sym2); // false

function fn() {
    console.log('fn called');
}

console.log(typeof fn); // function


// memory : 2 types: stack(for primitive type i.e new copy created), HEAP(for non primitive type: new copy is not created i.e works on reference)

let fs = "himadri"
let ls = fs // new variable ls is created with 'value of fs'
ls = "das" 

console.log(fs);
console.log(ls);


let obj1 = {
    name: 'himadri das',
    age: 23
}

let obj2 = obj1 // new object obj2 is create with reference of obj1
// then how do I create a new object => 'use CONSTRUCTOR FN' i.e 'new' keyword

obj2.age = 24

console.log(obj1);
console.log(obj2);