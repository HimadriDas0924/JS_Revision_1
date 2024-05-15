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

```