// merge 2 arrays into a single array
    // arr1.concat(arr2)
    // spread operator -> ...arr1 -> spread all the elem
    // both concat, spread returns a new array

const arr1 = [1,2,3]
const arr2 = [4,5,6]

console.log(arr1.concat(arr2));

console.log([...arr2, ...arr1]);

// concatinating multiple values to form a new array -> Array.of

console.log(Array.of(23, 24, 25));

// nested array can be converted to single array by flatning

const arr3 = [1,2,3, [4,5,6, [7,8,9]], [10, 11, [12, 13]]]

console.log(arr3.flat(Infinity)); // arr.flat(depth)

// check if a data is in the form of an array or not and convert it into an array.

console.log(Array.isArray("himadri"));
console.log(Array.from("himadri")); // [each char separated by ,]

// NOTE: what is invalid is : Array.from({name: "himadri", age: 23})

const obj = {name: "himadri", age: 23}
console.log(Array.from(obj)); // returns []: bcz we haven't mentioned what to convert into array
