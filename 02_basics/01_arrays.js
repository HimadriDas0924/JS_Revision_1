// let arr1 = [1,2,3,4, "himadri", "das"]
// let arr3 = new Array(4,5,6,7) // m2 to create array

// let arr2 = arr1; // copying arr1 into arr2 i.e shallow copy i.e arr2 contains reference of arr1

// arr1['0'] = 0 // by default obj[key1] or arr[index], both key1,index is converted to string and then stored. so 0 is converted to '0' only.

// console.log(arr2);

// some array functions

// console.log(arr2);
// arr2.shift() // removes elem from 0th pos
// console.log(arr2);
// arr2.unshift("new 0th elem") // add new elem to 0th pos
// console.log(arr2);

// console.log(arr3.includes(5));
// console.log(arr3.indexOf(5));

// console.log(arr3.join()) // converts the array into string separated by ,


// slice, splice: both returns a new array

let arr1 = [1,2,3,4,5]
let slicedArr = arr1.slice(1,3) // (st,end): returns a new array from ind: st to end-1
slicedArr.push('himadri')

console.log(arr1); // original array not manipulated
console.log(slicedArr); 


let arr2 = [1,2,3,4,5,6,7]
// let splicedArr = arr2.splice(2,3) // (st,deleteCnt): returns a new array taken out from originalArray. It takes out deleteCnt no of elem from arr2 from ind: st i.e original array manipulated

// console.log(arr2); // original array manipulated
// console.log(splicedArr);

// we can also insert elements while deleting them : optional parameters

let splicedArr2 = arr2.splice(2,3,'himadri', 'das', 'babin', 'das') // so we can insert more/less than the no of items we're deleting

console.log(splicedArr2);
console.log(arr2);