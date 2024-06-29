### Prototypes:

- Prototypes are features that allow objects to inherit properties and methods from other objects. 

- `Prototype Chaining`:  When we try to access property/method of an object. The JS engine 1st look in the object itself, if not found, then in it's prototype, if not found, it looks up in it's prototype chain.

- `__proto__`: every object has an internal `[[Prototype]]` property which is accessed via `__proto__`. But since it's depricated it's better to use: 

``` javascript
Object.getPrototypeOf(obj1);
Object.setPrototypeOf(obj2, prototype); // prototype of obj2 is set to 'prototype'
```

- `prototype` propety: we can set the prototype of constructor functions using myConstFn.prototype = {}. The newly created object's `[[Prototype]]` property will be the set to the function's `.prototype` property. 

- `.prototype` can be used to set the prototype of normal fns also. But then there would be no concept of inheritance.

```javascript
// constructor fn
function User(name, age) {
    this.name = name;
    this.age = age;
}

// Const fun's prototype will be bind to the newly created object as it's prototype.
User.prototype = {
    getName: function() {
        return this.name;
    },
    setName: function(name) {
        this.name = name;
    }
}

const user1 = new User('himadri', 12);
user1.setName('trisha');

```

- Array, Function, Number, etc -----> their Prototype is `Object`. and Prototype of Object is `null`. So we declare some property in Object.prototype, then all data types will be able to access it, bcz up in their prototype chain, there exists `Object` data type.
- i.e basically children can access parent properties. So we declare properties in parent's prototype.


### what does the 'new' keyword do ?

1. `new object is created`: 'new' keyword initiates the creation of a new object.

2. `prototype is linked`: The newly created object gets linked to the prototype property of the constructor function i.e it can access all the properties and methods of the ConstructorFn.prototype.

3. `Constructor fn is called`: The constructor fn is called with the specified arguments and `this` is bound to the newly created object i.e new properties like this.name, this.age, this.greetings is created in the newly created object and argument values are assigned.

4. `The New Object is returned`: if the constructor function `explicitely doesn't return a non-primitive value (eg: object, array, function, etc..)`, then newly created object is returned.

- **NOTE 1**: if we explicitely returns a primitive value(number, string, Boolean, etc), then constructor function not return that value, rather return the new object created.

- **NOTE 2**: newly created object is only returned by default, if we're calling the constructor function using 'new' keyword. If we call the constructor function without 'new' keyword, then 'this' rep global object and value of this is not returned by default.

```javascript

function User(name, age) {
    this.name = name;
    this.age = age;

    return 'return this value ??'
}

function Account(name, amt) {
    this.name = name;
    this.amt = amt;


    return function() {
        console.log('dummy fn')
    }
}

const user1 = new User('himadri' 23);
const account1 = new Account('trisha', 34000);

console.log(user1); // new object created is returned.
console.log(account1) // dummy fn is returned rather than the newly created obj.

```


### Call, Apply, Bind

1. `call`: call is used for substitution of `this`. Suppose a function uses a value of 'this' implicitely (say constructor function (this: new object created) / normal function (implicitely: value of this is set to global object only unless you change it inside a context)) && you want to explicitely set it to a different object.

2. `apply`: apply is basically `call` only, But 1 difference is we pass the arguments (except value of 'this') inside an array.

3. `bind`: is basically we might need to do fun_call.call(obj, args) multiple times for the same 'this' and arguments. So rather we save it, We'd bind the value of 'this' to the function call. This returns a new function which we can call multiple times.

``` javascript 
// syntax: fun_name.call(explicit value of this, fn parameters)

function setUsername(username) {
    this.username = username
}

function setAllDetails(username, marks, age) {

    // m1) setUsername(username) : by default value of this is global object : so username is created and set in global object.

    // m2) new setUsername(username) : a new object is created and username is created in that object: but we want to create it in current object.

    setUsername.call(this, username) /*
    since object creation using 'new' keyword, in this problem before calling the constructor function, 'this' is set to represent the newly created object. And we pass 'this' so username is created in obj rep by 'this'.
    */

    this.age = age;
    this.marks = marks
}

const user = new setAllDetails('abc', 23, 32);

// similary we can do

setUsername.call(user, 'himadri') // in the object created: now username: 'himadri'

// using apply

setAllDetails.apply({}, ['def', 43, 23]); // value of 'this' is explicity set to {}. Now {} will contain {username: 'def', marks: 43, age: 23}


// using bind:
const myfn = someFunCall.bind(some object, args);
myfn();

```
