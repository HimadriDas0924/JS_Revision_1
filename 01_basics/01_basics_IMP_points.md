ONLY EXCEPTIONAL THINGS:

### 1. Conversion

```javascript
0.  Some conversions: number.toString(), number.toFixed(2) // to fix to 2 decimal places
    const number = 1000000, number.toLocaleString('en-US') // 1,000,000

1. Number("123asb") // NaN

2. typeof (null) // object

3.  Number(null) // 0
    Number({}) // NaN

4. typeof undefined // undefined

5. Number(undefined) // NaN

6.  Boolean(-123) // T
    Boolean(123) // T
    Boolean(0) // F
    Boolean("") // F
    Boolean(" ") // T
    Boolean("himadri") // T
    Boolean(undefined) // F
    Boolean(NaN) // F

7.  Number(false) // 0
    Number(true) // 1
    Number("") // 0
    Number(" ") // 0 v.v.imp

8. BigInt(integer) // only takes an integer 

9. // NOTE: how is value calculated in general:

        // case 1
        let value = op1 + op2

        if(either one of them is a string) {
            // then without making any changes to either of them: just concat them
            eg: (true + "12") == true12. 
                ("123" + 1 + false) == 1231false 
            // resultant value is always a String.
        }
        else {
            // either none of them are string i.e could be Number/ Boolean
            // then, perform addition operation between them
            eg: (true + 1) == 2. 
                (1 + false) == 1
            // resultant value is always a Number.
        }

        // case 2
        value = op1 - op2

        // whether both are not string OR either of them is a string
            // convert both the operands into Number then perform operation.
            // resultant value is a number
    
        eg: ("123" - true) == 122. 
            (200 - "12") == 188. 
            (200 - "123ab") == NaN (bcz Number("123ab") == NaN && Number - NaN == NaN).
            (12 - " ") == 12 (bcz Number(" ") == 0).
            (12 - Boolean(" ")) == 11.

        
    /*
    Operations:

    1. execution from left -> right. 

    2. op1 + op2 - op3 / op4 == op5 - op3 / op4 == op5 - op6.  (NOTE: even though there is no bracket: i.e BODMAS is followed i.e we 1st calculated op6)

    3. even if we skip the left operation in any operation: by default it's considered as NOTHING(not even null && it doesn't take place in calculation)
    eg: (+123) == 123 (& not 0123 or null123 or undefined123)

    - (Number / Boolean / String / null / undefined) + String = String (i.e concatination)

        // behind the scene the String is converted into a Number i.e Number(str) 
        // so 123 + "" = 123 (bcz Number("") is 0)

    - String + Number = String
    - Number (-/*) String = Number
    - String (-/*) Number = Number
    - String (-/*) String = Number
    - true = 1, false = 0 (in operation)
    */

```

### 2. Comparison

``` javascript


Rule 1. 
/*
    for (<=, =>, <, >, ==)

    <string /Number /Boolean , Number comparison: 

    1. Number/String/Boolean from both sides is converted to a Number and comparison of Number takes place.

    NOTE: exception might happen when there is  undefined / (null with ==)

    2. <string,string> comparison: based on char by char matching based on ASCII values.

*/
eg: (1 >= "1") // T
    (Boolean(-2) > 0) // T. Boolean(-2) is T && Number(true) is 1. 1 > 0 
    (undefined > -123) // F. Number(undefined) is NaN which itself is a number so any comparison with Nan is false
    (Boolean(-123) > null) // T. Boolean(-ve) is true and Number(true) is 1 && 1 > Number(null) i.e 0. 1 > 0
    ("123" > "2") // F. bcz Both string. so character by character comparison of ASCII
    ("AbCD" > "ABcd") // T. A,A same, b > B in terms of Ascii

Rule 2. 
/*
    strict equality check(===): checks based on both type + value i.e No conversion to Number before. 

*/
eg: (Boolean(-1) == 1); // T (bcz true == 1 i.e Number(true)i.e 1 == 1)
    (Boolean(1) === 1); // F (bcz true !== 1)
    (Number(true) === "1"); // F (1 !== "1")
    (Number(true) === 1); // T (1 === 1)

Rule 3. 
/*

with (==), null is treated as an object only.

*/
eg: (0 == null) // false
    (0 >= null) // true -> bcz(0 >= Number(null) i.e 0)
    (0 == Boolean(false)) // true -> bcz(0 == false) -> Number(false) is 0. 0 == 0
    (0 === Number(false)) // true -> Number(false) is 0(number)

Rule 4. (Exceptions) 

/* explore more about truthy and falsy values to understand below ones  */

eg: (undefined == {}); // F (bcz comparison between undefined and a Number)
    (undefined == NaN) // F (bcz undefined is nothing and NaN is a number)

    (undefined == null); // T bcz both means nothing
    (undefined == Number(null)); // F (NaN < 0)

    (undefined == 0); // F (NaN == 0)
    (undefined <= null); // F (NaN <= 0)
    (undefined == undefined) // T
    (undefined == Number(undefined)) // F
    (undefined <= undefined) // F
    (undefined == false); // false means something and UD doesn't 

```

### 3. String 

``` javascript

1. string methods:
    - str.length, .toUpperCase(), .charAt(ind) // can't find then '' 
    - .indexOf(character) // can't find then -1
    - .substring(start, end) // from ind = start to ind = end-1

    - .slice // same as .substring(start, end) && no changes to org string made

    - .trim // remove whitespaces ONLY from beginning and end
        eg: str = "    himadri     das  ". && str.trim() -> "himadri    das"

    - .replace  // str.replace(substring to find, substring to replace it with) .
                // no change to original string is made.

    - .includes // str.includes(substring) -> returns bool 

    - .split // str.split(separator, limit(optional))
        eg: str = "himadri-das-learning-js"
            str.split('-', 2) // separated substrings based on the separator and put them in an array, limit: is not of extracted substrings it returns in an array.

```

### 4. Numbers and Maths

``` javascript 

// whenever applying methods to Numbers: after application always check the type

1. no.toString() // converts to string
2. decimal.toFixed(2) // (returns a string) : no till 2 decimal places 
3. decimal.toPrecision(3) // (string) : total 3 significant figures and round off the last digit
4. hundreds.toLocaleString('en-US') // 1000000 -> 1,000,000
    
5. (Number.MAX_SAFE_INTEGER) // max value without 'e'
6. (Number.MIN_SAFE_INTEGER) // -ve of Max safe value

7. Math.floor(3.123) // just smaller val
8. Math.round(3.523) // round off
9. Math.ceil(3.123)  // just greater val

// math.random() no between 0 and 1
    // how do I use it to find random no between a range i.e a,b

    const a = 23, b = 34;

    Math.floor(Math.random() * 10) // integers between 0 and < 10 
    Math.floor(Math.random() * (b - a + 1)) // integers between 1 and < b-a+1 
10. Math.floor(Math.random() * (b - a + 1)) + a // integers between 1 + a and < b - a + 1 + a i.e nos between a and b


```

### 5. Dates in JS

``` javascript
    // create a Date Object of current date
    const mydate = new Date() 
    mydate // is an object

    // we can create Date Object of a specific date
    const mydate = new Date(23, 6, 23, 23, 12, 12) // yr, month(0 based), date, hr, min, sec  (based on hr, am/pm is automatically set)

    mydate // 23/7/23, 23:12:12 pm

    // functions in prototype of Date object: so all date objects inherits these prop

    mydate.toLocaleString() // date + time
    mydate.toLocaleDateString() // date
    mydate.toLocaleTimeString() // time


    // based on below we can create a polling game
    Date.now() // returns no of ms from 1st jan 1970

    let user1 = Date.now()
    let user2 = Date.now()

    if(Math.floor(user1/1000) > Math.floor(user2/1000)) {
        // user1 registered 1st
    }
    else {
        // user2 registered 1st
    }

    // returns week days in fullform
    const newDate = new Date()

    newDate.toLocaleString('default', {
        weekday: 'long'
    }) // output: wednesday

```

### 6. Data types in JS

``` javascript 

1. Primitve data types : (String, Number, Boolean, Symbol, null, undefined).
    : (pass by value) i.e separate copy is always created.

2. Non Primitive data types : Objects : (objects, functions, arrays)
    : (pass by reference) i.e separate copy is not created.

3. typeof function === 'function'
    functions in JS are Objects bcz they take properties from Object, but functions are 'callable objects'. so typeof function === 'function' so we can distinguish if this is callable or not.

4. What are symbols ? 

- when Symbol() constructor is called, it returns a Symbol value which is always unique.

- Symbols are often used to add unique property keys to an object which would never collide with another key added to the same object.

- Thus, it helps to create a weak form of encapsulation or weak information hiding.
 
    i.e console.log(Symbol('abc') === Symbol('abc')) //false


5. memory : 2 types: stack(for primitive type i.e new copy created), HEAP(for non primitive type: new copy is not created i.e works on reference)
```