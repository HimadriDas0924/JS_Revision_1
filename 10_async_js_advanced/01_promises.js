// promise is an object: representing the eventual completion or failure of an asynchornous operation

// syntax: create a new promise i.e new Promise(cb fn)
/*

const promiseOne = new Promise(function (resolve, reject) {
    // async task

    setTimeout(function () {
        console.log('async task done')

        resolve('himadri das') // using resolve: once the async task is completed then cb fn of promiseOne.then() is executed
        // with resolve, we can also pass some data as argument

    }, 2000)
})

promiseOne.then(function (data) {
    console.log(`promise consumed ${data}`)
})

// type 2: resolving errors + doing promise chaining(for gracefully handling everything)

const promiseTwo = new Promise(function (resolve, reject) {
    // async task

    setTimeout(function () {
        let error = false;
        if (!error) {
            console.log('promise resolved')
            resolve(
                {
                    username: {
                        firstname: 'himadri',
                        lastname: 'das'
                    }, email: 'himadridas@gmail.com',
                    marks: [100, 87, 34, 56]
                })
        }
        else {
            reject('Error! something went wrong')
        }
    }, 3000)
})

promiseTwo
.then(function(superman){
    console.log(superman)

    // pass the data along the promise chain using 'return'
    return superman.username
})
.then(function(batman){
    console.log(batman);
    console.log(batman.firstname , batman.lastname);
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log('either of the cb fns of .then or .catch has been executed');
})


// handling promises using async await  && we'll have to call the async fn
    // blocks the flow of the program

async function handlePromiseThree() {
    // try and catch block for error handling
    try {
        const response = await promiseTwo;

        console.log(response);
    }
    catch(err) {
        console.log(err);
    }
}

handlePromiseThree()

*/

// using fetch to handle promises
    // fetch(url): returns a promise which when resolved will be handled by the .then(cb)
    
setTimeout(function(){
    console.log('task 1 (setTimeout 1)')
},0)

// this is very operation heavy.
    // so even though this is written first. But resolved after promiseFour. bcz handling promises this ways is not blocking the main thread so other operations do get executed.

fetch('https://api.github.com/users/HimadriDas0924')
.then(function(user) {
    // data sent may not be always in JSON format : so convert it
    console.log('.then() 1');
    console.log(user);

    return user.json() // convert the data into JSON: which is time heavy. .json() is an async task which returns a promise: which we'll handle using promise chaining

})
.then(function(data){
    console.log('.then() 2');
    console.log(data);
})
.catch(function(err) {
    console.log(err);
})

// control enters the cb of the promise && do stuffs like console.log() and registering a setTimeout i.e async op

const promiseFour = new Promise(function(resolve, reject) {
    // async task 4 
    console.log('control enter promise four') 

    setTimeout(function() {
        console.log('async task 4 (setTimeout 2)')
        resolve()
    }, 1000)

})


promiseFour.then(function(){
    console.log('promise resolved');
})
.catch(function(err) {
    console.log(err);
})


console.log('last line of the code');

