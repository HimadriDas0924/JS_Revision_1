### Prototypes:

- Prototypes are features that allow objects to inherit properties and methods from other objects. 

- `Prototype Chaining`:  When we try to access property/method of an object. The JS engine 1st look in the object itself, if not found, then in it's prototype, if not found, it looks up in it's prototype chain.

- `__proto__`: every object has an internal `[[Prototype]]` property which is accessed via `__proto__`. But since it's depricated it's better to use: 

``` javascript
Object.getPrototypeOf(obj1), Object.setPrototypeOf(obj2, {}) 
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


### what does the 'new' keyword do ?

1. `new object is created`: 'new' keyword initiates the creation of a new object.

2. `prototype is linked`: The newly created object gets linked to the prototype property of the constructor function i.e it can access all the properties and methods of the ConstructorFn.prototype.

3. `Constructor fn is called`: The constructor fn is called with the specified arguments and `this` is bound to the newly created object i.e new properties like this.name, this.age, this.greetings is created in the newly created object and argument values are assigned.

4. `The New Object is returned`: if the constructor function `explicitely doesn't return a non-primitive value (eg: object, array, function, etc..)`, then newly created object is returned.

- **NOTE**: if we explicitely returns a primitive value(number, string, Boolean, etc), then constructor function not return that value, rather return the new object created.

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