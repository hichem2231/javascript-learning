/*
file : variables-and-tybes.js
Description : Simple examples to understand variables and data types in Javascript
*/

// Variables :
let name = "Hichem";
const age = 22;
let isStudent = true;

// Output values :
console.log("My name is : ", name);      
console.log("My age is : ", age);        
console.log("Is student : ", isStudent); 

// Data types :
console.log(typeof name);      // String
console.log(typeof age);       // Number
console.log(typeof isStudent); // Boolean

// Simple operation
let birthYear;
birthYear = 2025 - age;
console.log("My birth year is : ", birthYear);
