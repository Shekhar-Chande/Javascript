//Que:-  Explain the difference between the default export and named exports in JavaScript modules. Provide examples of when to use each.

//Ans:- In JavaScript, exports are used to share code from one module to another, allowing for modularity and better organization. There are two primary types of exports: default export and named export.

// 1. Default Export
// Default exports allow you to export a single value or a single entity (function, object, class, etc.) from a module.
// A module can only have one default export.
// When importing a default export, you don't need to use curly braces.

// Exporting a function as default



// export default function greet() {
//     console.log("Hello, World!");
//   }
  
//   // Or exporting a variable
//   const myVar = 42;
//   export default myVar;
                                                                                                                            



//   2. Named Export
// Named exports allow you to export multiple values or entities from a module, each with its own name.
// You can have multiple named exports in a single module.
// When importing, you must use curly braces and the exact name of the export.


// Exporting named entities

export const greeting = "Hello";
export function sayGoodbye() {
  console.log("Goodbye!");
}

// Or exporting in a grouped form
const message = "Hi there!";
function sayHello() {
  console.log(message);
}
export { message, sayHello };
