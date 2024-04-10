
// alert(2+2) // won't work: bcz it is a functionality of browser, not nodejs

/* 

primitive data types:

already present in js: number, string, boolean, Bigint(> 2**53 - 1), Symbol(rep Objects which are always unique, created by Symbol constructor), Null(no value), undefined(value has not been assigned yet).

Non primitive data type: 

Array, Objects

*/
/********************************************************************************* */
/*

// 3. conversion

let no = 123
console.log(typeof no);

no = "123asf"
console.log(Number(no))
console.log(typeof Number(no)); // bcz Number(no) is NaN and typeof(NaN) is number

console.log(typeof null); // object
console.log(Number(null)); // 0

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Boolean(-123)) 
console.log(Boolean(123))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean("himadri"))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

console.log("------------------------");

let valueInNumber = Number(false) // 0

console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(String(123));

console.log(BigInt(9007199254740991)); // 9007199254740991n 

*/

/*

/************************************************************************************ */

/*

// operations:

console.log("1" + 2); // 12 (string)
console.log(1 + 3 + "2"); // 12 (string)

console.log("12" - 2); // 10 (number)

console.log("12" / 2) // 6 (number)

console.log(12 / "24"); // 0.5 (number)
console.log(12 / "0"); // Infinity (number)

console.log("12" * 2); // 24 number

console.log(3 * "3"); // 9 number

console.log(2 + 4 / 2 * 3 + "7" - 5 + "123"); // 82123

console.log(+2); // we can skip putting the left operand: which is always by default 0
// console.log(2+); // BUT cannot skip the right operand else ERROR

console.log(+true);

console.log(2 + "2" - "3" / false); // -Infinity (bcz 22 - Infinity (bcz String/Number(bcz false == 0)))

console.log("123" - "122"); // 1

console.log(null+"123");  // null123

console.log(Number("")); // 0
console.log(+""); // 0

console.log(Number(" ")) // 0
console.log(12 + " "); // 12
console.log(12 + Boolean(" ")) // 13

console.log(1 + true); // 1 + 1
console.log(1 + "2" + true) // 12true
console.log(1 + "2" - true) // 11 (number)

console.log(true + "12"); // true12
console.log("123" + 1 + false);

console.log("123ab" - true); // NaN

console.log(12 - " ");


console.log("----------------------------------");

let counter = 100
console.log(++counter);
console.log(counter++);
console.log(counter);

*/

/************************************************************************************** */

/*

// comparison

console.log(2 > "1");
console.log(2 >= "12");
console.log("2" >= 1);
console.log(2 == "1");
console.log(Boolean(true) == "1");
console.log(Boolean(true) < Boolean(false)) // 1 < 0

console.log("23" > "123123");// <string/Number/Boolean, Number> comparison: operans from both sides are converted to a same primitive before comparison then comparison of both values takes place. <string,string> comparison: based on char by char matching based on ASCII values.

console.log("AbCD" > "ABcd") // (A,A -> same, b > B so true)

console.log(23 > null) // Number(23) > Number(null) i.e 0

// NOTE: with (>,<,<=, >=) if we use null it's converted to a number i.e 0
// But with (==), null is treated as an object only


console.log({} > null); // NaN > 0 && NaN < 0. Both doesn't make sense so false
// so with undefined. Number(undefined) is NaN. so it doesn't make sense. so false.
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 23);
console.log(undefined < "34");


// strict equality check: checks both the type and value of both the operands i.e no conversion to Number before comparing.

console.log(Boolean(-1) == 1); // T (bcz true == 1 i.e Number(true)i.e 1 == 1)
console.log(Boolean(1) === 1); // F (bcz true !== 1)
console.log(Number(true) === "1"); // F (1 !== "1")
console.log(Number(true) === 1); // T (1 === 1)

console.log("0" == null); // with (==), null is always treated as an object
console.log("0" >= null); // both converted to number: 0 >= 0 true

console.log(Number({}));

console.log(0 == null) // false
console.log(0 >= null) // true -> bcz(0 >= Number(null) i.e 0)
console.log(0 == Boolean(false)) // true -> bcz(0 == false) -> Number(false) is 0. 0 == 0
console.log(0 === Number(false)) // true -> Number(false) is 0(number)


console.log("-----------------------------");

console.log(1 >= "1") // T
console.log(Boolean(-2) > 0) // T. Boolean(-2) is T && Number(true) is 1. 1 > 0 
console.log(undefined > -123) // F. Number(undefined) is NaN which itself is a number so any comparison with Nan is false
console.log(Boolean(-123) > null) // T. Boolean(-ve) is true and Number(true) is 1 && 1 > Number(null) i.e 0. 1 > 0
console.log("123" > "2") // F. bcz Both string. so character by character comparison of ASCII
console.log("AbCD" > "ABcd") // T. A,A same, b > B in terms of Ascii

console.log("---------------------------------");

console.log(undefined == {}); // F (bcz comparison between undefined and a Number)
console.log(undefined == NaN) // F

console.log(undefined == null); // T bcz both means nothing
console.log(undefined == Number(null)); // F (NaN < 0)

console.log(undefined == 0); // F (NaN == 0)
console.log(undefined <= null); // F (NaN <= 0)
console.log(undefined == undefined) // T
console.log(undefined == Number(undefined)) // F
console.log(undefined <= undefined) // F
console.log(undefined == false); // false means something and UD doesn't 

console.log('---------------------------------------');

console.log(undefined === null); // F. type: undefined and object
console.log(Number(true) === Boolean(1)); // F. 1 !== true

*/

/********************************************************************************* */


/*

// Strings

let str = "himadri das"
let str2 = new String('Hitesh-chaudhary') 
// string is an object: (key, value) == (index, char)

// below methods are present in the prototype of str object 
console.log(str.length);
console.log(str.toUpperCase()); // doesn't change the original string
console.log(str2.charAt(20)); // can't find then ''
console.log(str2.indexOf('A')); // 1st ind at which this char appears, if can't find -1
console.log(str2.substring(-1, 7)); // st < 0: start from 0th ind and go to ind = ei-1

console.log(str);

console.log('------------------------------------------------');

// slice
let newString = "himadri das"
console.log(`length of string: ${newString.length}`);
console.log(newString.slice(2,5)); // print from si, ei = 5-1

console.log(newString);
// if we don't mention either of si or ei: then then they are considered as (0,length)
// si = -ve, then new si = str.length + si
console.log(newString.slice(-3)); // si = 11 - 3 i.e 8
// si > ei : no part is printed
console.log(newString.slice(-3, 7)); // si = 8, ei = 7-1
console.log(newString.slice()); // himadri das

// 2nd parameter > length of string, then 2nd para = length
console.log(newString.slice(2,100)); // himadri das


// TRIM
    // used to remove white spaces from FRONT and BACK only.

const sentence = `
   himadri   das    hello    
   
   
   `
console.log(sentence.trim());

// REPLACE
    // string.replace('what to search', 'what to replace it with (once)')
    // to replace all occurence: use replaceAll()

const words = "   hello hellno hellIsAGreatPlace  abchellO  "

console.log(words.trim().replace('hell', 'das'))
console.log(words.trim().replaceAll('hell', 'das'));


// Includes: to check if the keyword in present in the string or not

console.log(words.includes('hell')); // true

// SPLIT: 2 args: (separator, limit): based on the separator, split string into substrings and put them in a array. Limit is optional => no of substring to put in [].

console.log(words.trim().split(' '));


let myString = "trisha das"
console.log(myString.replace('trisha', 'himadri'));
console.log(myString);

str = "himadri-das-learning-js"
console.log(str.split('-', 2))

*/

/******************************************************************************* */

/*

// 6. Numbers and Maths


let no = 123

console.log(no.toString())

let decimal = 123.435345345

// fix decimal places
console.log(decimal.toFixed(2));

decimal = 342.68698
// .toPrecision(n): round off the nth digit && return the 1st n significant figures
// n < #figures before decimal: 'e' is present
// n >= #figures before decimal: 'e' not present
console.log(decimal.toPrecision(3)); // 343

// Usecase: want to put ',' in a number to make it easier to understand number values for people of different countries
    // number.toLocaleString(ISO country codes)
const million = 1000000

console.log(million.toLocaleString('en-US')); // op: 1,000,000


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


console.log(Math.PI);
console.log(Math.sqrt(37).toFixed(2)); 

console.log(Math.round(3.523)); // round off
console.log(Math.floor(3.123)); // just smaller val
console.log(Math.ceil(3.123));  // just greater val

// math.random() no between 0 and 1
    // how do I use it to find random no between a range i.e a,b

const a = 23, b = 34;

console.log(Math.floor(Math.random() * 10)); // integers between 0 and < 10 
console.log(Math.floor(Math.random() * (b - a + 1))); // integers between 1 and < b-a+1 
console.log(Math.floor(Math.random() * (b - a + 1)) + a); // integers between 1 + a and < b - a + 1 + a i.e nos between a and b

*/

