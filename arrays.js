// Example 1: Creating an array and accessing elements

let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue

// Example 2: Array length

let numbers = [5, 10, 15, 20];

console.log("Array length : ", numbers.length);

// Example 3: Modifying array elements

let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";
console.log(fruits);

// Example 4: Adding elements using push

let tasks = ["Study", "Workout"];

tasks.push("Read");
console.log(tasks);

// Example 5: Removing last element using pop

let cities = ["Algiers", "Oran", "Constantine"];

cities.pop();
console.log(cities);

// Example 6: Loop through an array

let students = ["Hichem", "Ahmed", "Yasmine"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
