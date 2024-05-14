const mydate = new Date(); // returns date and time in a weird format
// contains a new date object

// console.log(typeof mydate); // object
// console.log(mydate);

// console.log(Object.getPrototypeOf(mydate)); // prototype of the date object contains all these functions.
// console.log(mydate.__proto__); // contains prototype of the object 

// all the below fns returns a STRING

// console.log(mydate.toDateString());
// console.log(mydate.toJSON());

// console.log(mydate.toLocaleString()); // 5/15/2024, 3:59:25 AM
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());

// console.log(`time: ${mydate.getHours()} : ${mydate.getMinutes()} : ${mydate.getSeconds()} `);


// can create a date of your own choice

const d1 = new Date(2024, 5, 23, 13, 12, 12) // args:  yr, month(0 based), date, hr(1..24 -> based on this am/pm is automatically set), min, sec

// console.log(d1.toLocaleString());


// how can we create timestamps: get no of secs from a particular time i.e 1st jan 1970 
    // ans: Date.now() 

console.log(Date.now()); // number i.e ms

// based on this we can create a polling game

let no1 = Date.now() 
let no2 = Date.now()

function msToSec(ms) {
    console.log(Math.floor(ms/1000));

    return Math.floor(ms/1000)
}

if(msToSec(no1) > msToSec(no2)) {
    console.log('no1 is greater');
}
else {
    console.log('no2 is greater');
}

// more fns

const d2 = new Date()

// console.log(d2.getDate());
// console.log(d2.getDay());
// console.log(d2.getMonth()); // 0 based
// console.log(d2.getTime());
// console.log(d2.getHours());
// console.log(d2.getSeconds());


// more on date.toLocaleString 
const newDate = new Date()

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));