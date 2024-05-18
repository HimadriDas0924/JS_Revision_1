1. Object Destructuring: 
``` javascript
// - concise syntax for extracting properties from object. It enhance code readability and reduces need to repeatitive property access.

// - SYNTAX: within {} mention the name of the property you want to extract from the object.

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