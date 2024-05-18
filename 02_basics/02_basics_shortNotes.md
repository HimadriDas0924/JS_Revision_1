### 1. Basics of arrays

``` javascript 

// 2 ways to create array
let arr1 = [1,2,3,4,'himadri']
let arr2 = new Array(4,5,6,7)

let arr3 = arr2 // shallow copy i.e arr3 contains reference of arr2 
// bcz non primitive data types(array, object, functions) are shallow copy

arr3['0'] = 3; // keys and index is converted to strings and Both are treated as objects only

// array functions
arr3.push(4)
arr3.pop()

arr3.shift() // removes elem from 0th pos 
arr3.unshift('new 0th elem') // add elem to 0th pos

arr3.includes(4) // boolean : checks if 4 is present or not
arr3.indexOf(4) // finds the index of elem 4, if not present returns -1


// SLICE vs SPLICE : both returns a new array.

    // arr.slice(st,end) : COPIES elem from ind: st to end-1 and puts in a new array.
        // i.e original array remains same.

    // arr.splice(st, deleteCnt): CUTS/DELETES deleteCnt no of elem from ind: st and puts them in a new array.
        // i.e original array manipulated.
        // while deleting we can also insert any no of elems into the original array.

        // arr.splice(st, deleteCnt, item1, item2, item2, ...)

let arr1 = [1,2,3,4,5]
let slicedArr = arr1.slice(1,3) // copies from ind 1 to 2

arr1 -> same
slicedArray -> [2,3]


let arr2 = [1,2,3,4,5,6,7]
let splicedArr2 = arr2.splice(2,3,'himadri', 'das', 'babin', 'das')

arr2 -> [1,2,'himadri' ,'das', 'babin', 'das', 6, 7]
splicedArr2 -> [3,4,5]

/*-----------------------------------------------------------------------------------------*/

// Concat, Spread Opearator, Array.of() -> all returns a new array

arr1.concat(arr2)
[...arr1, ...arr2] // []: rep empty array and within that we're spreading all the elem of each of the array
Array.of(23, 24, 25) // [23, 24, 25]

// check if data is in form of array or not: if no: convert it to array
Array.isArray("himadri") // false
Array.from("himadri") // ['h', 'i', 'm', 'a', 'd', 'r', 'i'] : each char separated by ,

// NOTE:
Array.from({name: "himadri", age: 23}) // [] bcz we haven't mentioned what to convert to array

```

### 2. Basics of Object 

``` javascript

// 2 ways to create a object
    // in both the method: a singleton object is NOT created, bcz they don't follow the singleton pattern
const obj = {
    name: "himadri",
    age: 23
}

const obj2 = Object.create(prototype, propertyDescriptor) // this way we can create an Object having a specific prototype and a property descriptor(to define properties of object elements i.e (value, writable, emumerable, configurable) = true/false)

// NOTE: using Object.create() method: we can also implement inheritance

// by default: {key, values} both are converted to strings when stored in an Object
// so to access properties of an object
    // obj["name"] is correct, obj."name" is wrong, obj[name] is wrong (bcz name as a key is converted to a string)

// to make a Symbol act as a key
const mySymbol = Symbol('key 1')

const obj2 = {
    name: "himadri",
    age: 23,
    [mySymbol]: "my key 1" // mySymbol: "my key 1" would again convert both key, value to strings
}

console.log(obj2[mySymbol]) // correct
// obj2["mySymbol"] is wrong bcz mySymbol is converted to a String


// we can freeze an entire object
    // i.e all the properties of the Object have their writable, configurable: set to false

Object.freeze(obj2)

obj2.name = "trisha das" // NO ERROR, but changes will not be reflected

/*-----------------------------------------------------------------------------------------*/

// combining multiple objects into a single object

obj = {...obj1, ...obj2} // spread operator

let obj = Object.assign(obj1, obj2, obj3, ..) // syntax: Object.assign(target, source(s)) i.e target and sources are combined and put into target and modified target is returned.

obj === obj1 // true: since target is returned i.e reference of obj is returned

// since same object is returned: so even if you don't receive the modified object in a new variable, still it's fine
Object.assign(obj1, obj2, obj3) // so we can directly access obj1

// NOTE: if we want the combined object into a new object
let newObj = Object.assign({}, obj1, obj2, obj3) // obj1, obj2, obj3 combined and put into a new object. It has same result as above.

// SOME OBJECT METHODS: 

Object.keys(obj) // [k1, k2, k3, ..]
Object.values(obj) // [v1, v2, v3, ..]
Object.entries(obj) // [[k1, v1], [k2, v2], ..]
Object.hasOwnProperty('isLoggedIn') // boolean


// OBJECT DESTRUCTURING: 

// - concise syntax for extracting properties from object. It enhance code readability and reduces need to repeatitive property access.

// - SYNTAX: within {} mention the name of the property you want to extract from the object.

//     const {name, age} = obj
//     i.e name and age property of obj is extracted and by default stored in name, age.

// - after extracting you can also rename variable

//     const {name: myName, age: myAge} = obj

// Multiple Application of Object destructuring: 

    // renaming value, default value, function parameter, use with rest operator

const obj = {
    name: {
        firstname: "hiamdri",
        lastname: "das"
    },
    age: 23,
    city: "dhanbad",
    country: "india"
}

let {name: {firstname: fname, lastname: lname}, age, city, country, email = 'himadri@yahoo.com'} = obj; 

// obj destructuring in fn parameter
function greet({name: {firstname, lastname}}) {
    console.log(`my name is ${firstname} ${lastname}`)
}
greet(obj)

// obj destructuring with rest operator involved
let {name, age, ...rest} = obj
// rest: {city: "dhanbad", country: "india"}

/* 
1) NOTE: name, firstname, lastname is not defined: bcz name is further destructured and fistname, lastname are rename to fname, lname so they are defined.

2) age, city, country property of the obj is accessed and stored in these variables of the same name only.

3) email contains default value in case obj doesn't have an email property.
*/

```