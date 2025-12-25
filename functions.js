// Example 1: Simple function without parameters

function sayHello() {
  console.log("Hello, welcome to JavaScript!");
}
sayHello();

// Example 2: Function with parameters

function greetUser(name) {
  console.log("Hello "+ name);
}
greetUser("Hichem");
greetUser("Jessica");

// Example 3: Function that returns a value

function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log("The result is : "+result);

// Example 4: Function with condition

function isEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isEven(10));
console.log(isEven(7));

// Example 5: Function working with arrays

function printArray(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}
printArray(["JS", "Python", "Java"]);

// Example 6: Function that sums the elements of a table

function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

let myScores = [80, 90, 70];
console.log("Total Scores: " + sumArray(myScores));
