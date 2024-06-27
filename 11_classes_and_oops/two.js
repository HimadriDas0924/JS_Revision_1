function fn(num) {
    return num*5;
}

// console.log(fn(12));

fn.power = 2; // a function can have a property i.e behaving like an object

// console.log(fn.power);

// console.log(fn.prototype); // {}


// const fn
function User(name, score) {
    this.name = name;
    this.score = score;

    // return fn; 
    // return 'babin';
}

// prototype of the fn: (here) newly created object from the const fn will inherit properties from this prototype.
User.prototype = {
    increment: function() {
        this.score++;
    },
    decrement: function() {
        this.score--;
    },
    printScore: function() {
        console.log(this.score);
    }
}

const user1 = new User('tea', 23);

console.log(user1);

// user1.increment()
// user1.increment()
// user1.increment()
// user1.decrement()
// user1.printScore()
