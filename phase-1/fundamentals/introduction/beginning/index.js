/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify

// ~ Arrays
// -> definition, access, modification

// ~ Conditionals
// if, if-else, if-else-if-else, ternary

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

// ~ Scope
// -> global, local, closures, function hoisting

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)

// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

const numbers = [1,2,3];

function sum(numbers) {
    let total = 0; // I initialize a variable that will store the sum of the array
    for (let i = 0; i < numbers.length; i++) { // for *loop* (initialization; condition; iteration)
        total += numbers[i]; // we add the corresponding array number in the 'Total' variable. // '+=' short for total = total + numbers[i]
    }
    return total;
}

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

// Creates a new array inside the function
const number = [2,5,10]; 

function double(number) {
    let doubledNumbers = []; // Initialize a variable with that contains an array that will store(localy) and return the result(line 61). 
    number.forEach(function(num) { //using forEach we create a function that .push (num * 2) into doubleNumbers.
        doubledNumbers.push(num * 2); 
    });
    return doubledNumbers; // doubleNUmbers is returned localy inside double(numbers).
}
console.log(double(number));

// Modifies the array
const numberz = [2,5,10];

function double(numberz) {
    numberz.forEach((num, index, arr) => { // here I 
        arr[index] = num * 2;
    });
    return numberz;
}

console.log(double(numberz));


// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

const words = ['ONE', 'TWO','THREE']
function lowercase(words){
    let copyWords = [] // I initialize this variable localy to later return the value as a copy and *not* modify the original 'words' variable.
    words.forEach((num, index)=> { // I used forEach with the parameters, 'num' focused on the elemnents and 'index' focused on the index# of the array.
       copyWords[index] = num.toLowerCase(); // I 
    })
    return copyWords
}

console.log(lowercase(words));
console.log(words);


