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

    <string /Number /Boolean /null /undefined, Number /null /undefined> comparison: 

    1. Number/String/Boolean/undefined/null from both sides is converted to number then comparison of both numbers. 

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
    strict equality check(===): checks based on both type + value i.e No conversion to Number before 

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
    (undefined == NaN) // F

    (undefined == null); // T bcz both means nothing
    (undefined == Number(null)); // F (NaN < 0)

    (undefined == 0); // F (NaN == 0)
    (undefined <= null); // F (NaN <= 0)
    (undefined == undefined) // T
    (undefined == Number(undefined)) // F
    (undefined <= undefined) // F
    (undefined == false); // false means something and UD doesn't 

```