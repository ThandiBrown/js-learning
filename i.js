function displayOnPage(info, addBreak=true) {
    
    if (addBreak) {document.getElementById("e1").innerHTML += "<br />" + info;}
    else {document.getElementById("e1").innerHTML += info;}
}

function JavaScriptBasics() {
    // Everything Without a "Value" is False including things like undefined
    displayOnPage(Boolean(undefined));
    displayOnPage(Boolean(null));
    displayOnPage(Boolean(NaN));
}

/* JavaScript Output */
function intoElement() {
    /* 
    To access an HTML element, use 
    document.getElementById(id)
    The id attribute defines the HTML element. 
    The innerHTML property defines the HTML content */
    document.getElementById("e1").innerHTML += "Button Clicked";
    return 
}


function htmlOutput() {
    /* should be used for testing
    erases all HTML output */
    document.write("This is the new output");
    return 
}

function alertBox() {
    /* window.alert(), window is optional */
    alert("This is an alert!");
    return 
}

function toConsole() {
    console.log("Check me out in the console");
    return 
}

/* 
Variables!
var 	Declares a variable
let 	Declares a block variable
const 	Declares a block constant

only use var for older browsers
otherwise only use const or let 

Always use const if the value should not be changed
Always use const if the type should not be changed (Arrays and Objects)
Only use let if you can't use const

cannot re-declare variables with let (within the same block level). The below is not allowed:
let x = "John Doe";
let x = 0;

let as a block level keyword
* Redeclaring a variable inside a block will not redeclare the variable outside the block:
function empty() {
    let x = 10;         // Here x is 10
    

    if (true){
        let x = 2;      // Here x is 2
        let h = 5;      
    }

    // Here x is still 10 
    // Here h canNOT be used/does not exist outside of its block
}

var is entirely global. So if you were to change it inside of the block, it would also change it outside of the box


const does not define a constant value. It defines a constant reference to a value. Meaning you cannot reassign a constant value

you cannot reassign as such:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // ERROR
 
But you can change the elements as such:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");

You cannot reassign an object:
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};  // ERROR 

But you can change it:
const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = "Johnson"; 

Use const when you declare a new: array, object,function, regExp

neither let nor constant can be re-declared, but only const cannot be reassigned either
let flex = 2;   //redeclaring
flex = 22;      //reassigning
*/


const obj = {
    value : "4"
};

let fortyFour = obj.value + obj["value"];


const obj2 = {
    value : "4",
    doubleValue: function() {
        document.getElementById("e1").innerHTML += this.value + "4";
    }
};


/* 
Javascript Strings
Complete string reference:
https://www.w3schools.com/jsref/jsref_obj_string.asp
https://www.w3schools.com/js/js_string_methods.asp
*/

function stringLength() {
    /* obtain string length */
    let amount = "Dolly".length;
}

function breakCodeLine(item) {
    /* best way to split up a string across multiple lines*/
    let breakString = "Dolly" + 
    "Simpson";
}

function comparingObjects() {
    /* Comparing two JavaScript objects always returns false. */
    let x = new String("John");
    let y = new String("John");
    displayOnPage(x == y);
    displayOnPage(x === y);
}


function templateLiterals() {
    let word = `Hello World`;
    /* quotes inside strings */
    let word2 = `Hello "World"`;
    /* multiline strings */
    let word3 = 
    `Hello
    World
    Cap`;
    /* interpolation / in-line variables */
    let name = "Jennifer";
    let number = 4;
    let word4 = `Welcome ${name}-${number}`;
    /* expressions/direct JavaScript are allowed */
    let word5 = `Welcome ${name}-${(number*40)/2 - 1}`;
    
    /* in creating HTML elements */
    let word6 = "<ol>";
    for (let i = 0; i < 3; i++) {
        word6 += `<li>${name}</li>`;
    }
    word6 += "</ol>";
    
    displayOnPage(word);
    displayOnPage(word2);
    displayOnPage(word3);
    displayOnPage(word4);
    displayOnPage(word5);
    displayOnPage(word6);
}

function numberBasics() {
    /* 
    All JavaScript numbers are floats!

    Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

    JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard. 
    
    */
   
    /* converting string to number using + */
    displayOnPage("Convert string to number using + ");
    displayOnPage(typeof(+"5"));
    displayOnPage("Number imprecision");
    /* Floating point arithmetic is not always 100% accurate: */
    let x1 = 0.2 + 0.1;
    /* To solve the problem above, it helps to multiply and divide (into whole numbers first):
    OR even better round it using toFixed()*/
    let x2 = (0.2 * 10 + 0.1 * 10) / 10;
    displayOnPage(x1);
    displayOnPage(x2);
    displayOnPage(x1.toFixed(1));
    /* 
    The JavaScript interpreter works from left to right.
    10 + 20 is added because they're both numbers
    Then 30 + "30" is concatenated because z is a string.
    if numbers and strings are added it will result in string concatenation!
    */
    let x = 10;
    let y = 20;
    let z = "30";
    let result = x + y + z;
    displayOnPage("Number and string concatenation");
    displayOnPage(result);
    
    
    /* JavaScript tries to interpret numeric content in strings
    this works for everything except the + because that will represent concatenation */
    displayOnPage("5"*"5");
    displayOnPage("5"/"5");
    displayOnPage("5" - "5");
    displayOnPage("5" + "5");
    
    displayOnPage("Infinity Numeric Type");
    displayOnPage(2<Infinity);
    displayOnPage(2<-Infinity);
    
    displayOnPage("Hexadecimal");
    let color = 0xFF;
    displayOnPage("0xFF automatically converted to -> " + color);
    displayOnPage("Base Decimal Conversion");
    /* numbers are normally based in decimals but you can convert this using toString method */
    let myNumber = 32;
    let numberList = [
    myNumber.toString(32),
    myNumber.toString(16),  // hexadecimal is basic 16
    myNumber.toString(12),
    myNumber.toString(10),
    myNumber.toString(8),
    myNumber.toString(2)    // binary is base 2
    ];
    displayOnPage(numberList);
    
    /* 
    More ways to write a number
    let billion = 1000000000;
    let billion = 1_000_000_000;
    let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
    let billion = 7.3e9;     // 7.3 billions
    let mсs = 0.000001;
    let mcs = 1e-6; // five zeroes to the left from 1
    */
}


function rounding() {
    /* 
    Math.floor (down/lower)
    Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
    Math.ceil   (up)
    Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
    Math.round  (go to closest whole number)
    Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
    Math.trunc (not supported by Internet Explorer)
    Removes anything after the decimal point without rounding: 3.1 becomes 3.
    */
   
    /* Rounding to n-th decimal */
    // 1.23456 -> 123.456 -> 123 -> 1.23
    let num = 1.23456;
    displayOnPage( Math.round(num * 100) / 100 ); 
    
    // turns it into a string
    let num2 = 12.34;
    displayOnPage( num2.toFixed(1) ); // "12.3"
    
    let num3 = 12.36;
    displayOnPage( num3.toFixed(1) ); // "12.4"
    
    // "12.34000", added zeroes to make exactly 5 digits
    let num4 = 12.34;
    displayOnPage( num4.toFixed(5) ); 
    displayOnPage(  +num4.toFixed(5) ); // converted to num with  + 
}


/* 
Array Reference
https://www.w3schools.com/jsref/jsref_obj_array.asp
*/
function arrays() {
    
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    displayOnPage(fruits.toString());
    displayOnPage(fruits);
    /* accessing last array element */
    displayOnPage(fruits[fruits.length - 1]);
    displayOnPage("");
    /* standard for loop */
    for (let i = 0; i < fruits.length; i++) {
        displayOnPage(fruits[i]);
    }
    
    /* takes a function as its input */
    fruits.forEach((fruit) => displayOnPage(fruit));
    
    /* Appending elements */
    fruits.push("Pineapple");
    fruits[fruits.length] = "Guava";
    // multiple elements are allowed
    // fruits.push("Nectarine", "Plum", "Cherry");
    
    /* 
    In JavaScript, arrays use numbered indexes.  
    In JavaScript, objects use named indexes.
    
    If you use named indexes, JavaScript will redefine the array to an object. (does not support associative arrays)
    */
    
    /* type check an array because they're recognizes objects */
    displayOnPage("");
    displayOnPage("type check");
    displayOnPage(typeof(fruits));
    displayOnPage(Array.isArray(fruits));
    displayOnPage(fruits instanceof Array);
    
    
    displayOnPage(fruits.toString());
    // like too string but with specified separator
    displayOnPage(fruits.join(" * "));
    // returns popped element
    displayOnPage(fruits.pop());
    // removes and returns first element
    displayOnPage(fruits.shift());
    // adds to front of list and returns new length
    displayOnPage(fruits.unshift("Kiwi"));
    displayOnPage(fruits);
    
    /* returns new array. 
    any number of arrays allowed as parameters
    you can also use individual values as parameters */
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);
    const arr4 = ["Emil", "Tobias", "Linus"];
    const myChildren2 = arr4.concat("Peter");  
    const arr5 = [1, 2];
    displayOnPage(arr5.concat(3));
    displayOnPage(arr5.concat(3,4,5));
    
    /* 
    The splice() method adds new items to an array.
    The slice() method slices out a piece of an array.
    */
    
    /* 
    The first parameter (2) defines the position where new elements should be added (spliced in).

    The second parameter (0) defines how many elements should be removed.

    The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

    The splice() method returns an array of the removed items
    */
    displayOnPage("Splicing");
    displayOnPage(fruits);
    fruits.splice(2, 0, "Lemon", "Kiwi");
    displayOnPage(fruits);    
    fruits.splice(1, 5, "Mandarin", "Banana");
    displayOnPage(fruits);
    
    // using just to remove
    fruits.splice(1, 1);
    displayOnPage(fruits);
    
    
    fruits.push("Nectarine", "Plum", "Cherry");
    /* 
    slice: starting from given index, return remainder of array
    */
    displayOnPage(fruits + "-->" + fruits.slice(0)); // returns complete array
    displayOnPage(fruits + "-->" + fruits.slice(1));
    displayOnPage(fruits + "-->" + fruits.slice(2));
    displayOnPage(fruits + "-->" + fruits.slice(2, 5)); // exclusive
    
}


function sorting() {
    /* 
    javascript sorting is alphabetical
    this is good for strings, but for numbers, 25 will come before 5 because "2" is less than "5"
    */
    const numbers = [40, 100, 1, 5, 25, 10];
    displayOnPage(numbers.sort());
    displayOnPage(numbers.reverse());
    
    /* also changes actual array */
    displayOnPage(numbers);
    /* compare function to sort numbers
    expects return of a positive, zero or negative value 
    if a negative value is returned n1 is sorted/placed before n2*/
    numbers.sort(function(n1, n2) {
        return n1 - n2
    })
    
    displayOnPage(numbers);
    
    
    /* sorting objects */
    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
    ]; 
    cars.sort(function(a, b){return a.year - b.year}); 
}


function arrayLooping() {
    const numbers = [1, 2, 3];
    
    // Finding Items
    // array.indexOf(item, start); returns -1 if the item is not found
    let index = numbers.indexOf(2);
    let index2 = numbers.indexOf(3, 1);
    let index3 = numbers.lastIndexOf(3);
    // checks if an element is present in the array
    let found = numbers.includes(3);
    
    
    // Looping thru arrays using callback functions
    // forEach
    let total = 0;
    function prodSum(number) {
        total += number;
    }
    
    numbers.forEach(prodSum);
    displayOnPage("forEach: " + total);
        
    // forEach 2
    function duplicate(number, index, entireArray) {
        entireArray[index] = number * 2;
    }
    numbers.forEach(duplicate);
    displayOnPage("forEach, change itself: " + numbers);
    
    // mapping; produces new array
    function duplicateValue(item) {
        return item * 2;
    }
    const numbers2 = numbers.map(duplicateValue);
    displayOnPage(numbers2);
    
    // filtering
    // returns new array that passes conditional
    const numbers3 = [45, 4, 9, 16, 25];
    function greaterThan18(item) {return item > 18;}
    const over18 = numbers3.filter(greaterThan18);

    // find
    // returns the first number to pass conditional
    let firstAgeFound = numbers3.find(greaterThan18);
    
    // (callback, thisValue)
    // second parameter in these array iteration functions
    // is a value passed to the function as its this value 
    // returns undefined if no elements found
    function isEqualTo(item) {return this == item;}
    let firstAgeFound2 = numbers3.find(isEqualTo, 9);
    
    // find first index that passes conditional
    let firstAgeFound3 = numbers3.findIndex(isEqualTo, 9);
    
    
    // reduce
    // reduce array into one value, the method by which you define in the callback function
    // the first parameter in the callback function is the initial value / previously returned value
    function sum(finalNum, item) {
        return finalNum + item
    }
    
    displayOnPage(numbers3.reduce(sum));
    // reduce can accept an initial number
    displayOnPage(numbers3.reduce(sum, 100));
    
    // every
    // every returns true or false value regarding if every value in an array passes a conditional
    function checkAge(value) {
        return value > 18;
    }
    let allOver18 = numbers3.every(checkAge);
    displayOnPage(allOver18);
    
    // some
    // similar to every but only checks to see if some pass
    let someOver18 = numbers3.some(checkAge);
    displayOnPage(someOver18);
    
    // keys
    // Create an Array Iterator object, containing the keys of the array */
    const listOfKeys = numbers3.keys();
    
    // entries
    /* 
    returns an Array Iterator object with key/value pairs:
    (creates the key values)
    [0, "Banana"]
    [1, "Orange"]
    [2, "Apple"]
    [3, "Mango"]
    */
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const listOfEntries = fruits.entries();
    let result;
    for (let value of listOfEntries) {
        result = value + "; " + value[0];
        break;
    }
    displayOnPage(result);
    
   
}

function spreadOperator() {
    // The "spread" operator spreads elements of iterable objects
    // The ... operator expands an iterable (like an array) into more elements
    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];

    const year = [...q1, ...q2, ...q3, ...q4];
    
}


















































































