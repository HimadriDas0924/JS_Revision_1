// call: is basically used for substitution of 'this'.

// suppose: we define a function and call it. It's called by the global object i.e {}. so value of 'this' would be {}. 
// Now we want to call it, but we want to explicitely specify the value of 'this', which we can do via function_name.call(value of this, fn parameters).

// NOTE: if we don't pass any object, then by default the 'global object' is passed.

// only difference between call and apply: is in apply : all the arguments are passed in form of an array.


// bind: bind is basically binding the value of 'this' to function call and calling the new function returned whenever possible. (bind returns a new function to which value of 'this' is binded).

    // syntax: same as call.


// eg: 1

// normal fn
function setUserName(username) {
    // console.log(this);
}

setUserName('himadri') // gloabl object

setUserName.call({}, 'himadri') // {}


// eg: 2

// constructor fn
function setUserName2(username) {

    // suppose: 1st we do some complex DB calculation to check if username exists or not && if it doesn't exists then we set the username.
    
    this.username = username;

    // console.log(this);
}

// setting up prototype of the constructor fn.
setUserName2.prototype.greetings = function() {
    // console.log(`hello ${this.username}`);
}

const user1 = new setUserName2('abc') // used to set the username

function setOtherDetails(username, age, marks) {

    // suppose we want to use setUserName2() to set the username. 
    
    // M1) setUserName2(username); // directly calling it, the value of 'this' is initally global object.
    // M2) Rather if we use: new keyword, a new object will be created and username will be created in that.
    // But we want to create 'username' in this current object.

    // so we'll use M1) only, but substitute the value of 'this' to currently created object

    setUserName2.call(this, username);

    this.age = age;
    this.marks = marks;

}

const user2 = new setOtherDetails('def', 23, 100); 

// console.log(user2);

// we can also provide an object in place of 'this'.

setUserName2.call(user2, 'himadri das')


// eg: 3

const userDetails = {
    name: 'himadri',
    greetings: function() {
        // console.log(this);
        // console.log(`greetings ${this.name}`);
    }
}

const userDetails2 = {
    name: 'trisha das'
}

// now I want to use greetings function of userDetails for userDetails2
userDetails.greetings.call(userDetails2)
// userDetails.greetings.call(); // global object is passed by default

// Primitive values are boxed to it's corresponding objects.

// userDetails.greetings.call(10)
// userDetails.greetings.call('hello')
// userDetails.greetings.call(true)

// eg: apply

// newObj contains reference to the obj i.e location: which is constant thus obj can be modified.
const newObj = {
    name: 'newObj'
}

function setUserDetails3(username, marks, age) {
    this.username = username;
    this.age = age;
    this.marks = marks;

    // console.log(this);

}


setUserDetails3.apply(newObj, ['himadri', 43, 23])


/************************************ BIND ************************ */


const obj2 = {
}

function useOfBind(username, age) {
    this.username = username;
    this.age = age;

    console.log(this);
}

const myfn = useOfBind.bind(obj2, 'himadri bind', 45)

myfn()
console.log(obj2);
