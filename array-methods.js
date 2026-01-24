// Sample data 1
const numbers = [10, 20, 30, 40, 50];

// 1-map()
// Example: Doubling the numbers
const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

// 2-filter()
// Example: Getting only the numbers greater than 25
const filtered = numbers.filter(num => num > 25);
console.log("Filtered (Greater than 25):", filtered);

// 3-find()
// Example: Finding the number 30
const found = numbers.find(num => num === 30);
console.log("Found Item:", found);

// 4-reduce()
// Example: Calculating the sum of all numbers
const totalSum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Total Sum using Reduce:", totalSum);

// Sample data 2
const users = [
  { id: 1, name: "Ahmed", age: 25, role: "admin", active: true },
  { id: 2, name: "Sara", age: 30, role: "user", active: false },
  { id: 3, name: "Youcef", age: 22, role: "user", active: true },
  { id: 4, name: "Fatima", age: 28, role: "manager", active: true }
];

// 1-map()
// Example: Get only user names
const userNames = users.map(user => user.name);
console.log("User Names:", userNames);

// 2-filter()
// Example: Get only active users
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);

// 3-find()
// Example: Find a user by id
const userWithId2 = users.find(user => user.id === 2);
console.log("User with ID 2:", userWithId2);

// 4-some()
// Example: Check if there is any admin
const hasAdmin = users.some(user => user.role === "admin");
console.log("Has Admin:", hasAdmin);

// 5-every()
// Example: Are all users active?
const allActive = users.every(user => user.active);
console.log("All users active:", allActive);

// 6-reduce()
// Example: Calculate average age
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;
console.log("Average Age:", averageAge);

// 7-sort()
const usersSortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", usersSortedByAge);

// 8-includes()
const roles = ["admin", "user", "manager"];
const hasManagerRole = roles.includes("manager");
console.log("Has manager role:", hasManagerRole);
