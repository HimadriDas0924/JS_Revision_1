// FOREACH

    // HOF, present in the prototype of the array. 
    // for every elem of the array, a callback fn is called.
    // doesn't return anything.

const arr = ["abc", "def", "ghijk", "mnopq", "rst"]

arr.forEach((elem) => {
    // console.log(elem.length);
})


// FILTER

    // filter elem based on a condition.
    // returns a new array of filtered elem.
    // returns shallow copy i.e array of references

let arr2 = [1,2,3,4,5,6,7,8,9,10]

let newArr = arr2.filter((elem) => {
    return elem % 2 == 0// return a condition for 'elem' to be returned
})

// console.log(newArr);
// console.log(arr2); // BUT changes not reflected in original array


// MAP
    // perform some operation on all the elem of the array && return all the modifies elems.
    // it returns a shallow copy i.e (changes in original array).

let arr3 = arr2.map((elem) => elem*10)

console.log(arr3);
console.log(arr2); // BUT changes not reflected in original array


// Reduce

    // calls reducer fun on each of the elem of the array && stores of the ans of the i-1th itern back into the accumulator to be used in the ith itern.

    // ans: value in accumulator in the last itern

    // usecase: when ans of the ith itern depend on the ans generated till the i-1th itern

        // eg: in a shopping cart: find the sum of money generated till the ith item

    /* syntax: 

    const finalValue = arr.reduce(function(accumulator, item){
        return (accumulator + item)
    }, 0) // 0: initial value of accumulator 
    */

const totalValue = arr2.reduce(function(accumulator, item) {
    return accumulator + item
}, 0)

console.log(totalValue); // 55


