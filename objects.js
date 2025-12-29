// Example 1: Simple object

let user = {
  name: "Hichem",
  age: 22,
  isStudent: true
};
console.log(user);

// Example 2: Accessing object properties

console.log(user.name);
console.log(user["age"]);

// Example 3: Update and add properties

user.age = 23;
user.country = "Algeria";
console.log(user);

// Example 4: Object with array

let student = {
  name: "Ahmed",
  courses: ["Math", "Physics", "Informatics"]
};
console.log(student.courses[0]);

// Example 5: Array of objects

let users = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Lina", role: "user" },
  { id: 3, name: "Yacine", role: "user" }
];
console.log(users[0].name);

// Example 6: Function that works with objects

function getUserRole(user) {
  return user.role;
}
console.log(getUserRole(users[0]));

// Example 7: Destructuring object

let product = {
  title: "Laptop",
  price: 1200,
  inStock: true
};
let { title, price } = product;
console.log(title);
console.log(price);

// Example 8: JSON-like object (API style)

let apiResponse = {
  status: "success",
  data: {
    id: 10,
    name: "Mohamed"
  }
};
console.log(apiResponse.data.name);
