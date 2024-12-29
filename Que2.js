//Que:- Explain how explicit type conversion differs from implicit type conversion in JavaScript. Also, provide a
//supporting example

// Ans:- Implicit type conversion is when JavaScript automatically converts a value to a different datatype based on the context in which it is used aslo known as type coercion

let num = 42 + true
console.log(num)

// Javascript will automatically convert the boolean to number before performing the operation. Answer would be 43.


// Explicit type conversion is when we explicitly tells javascript to convert a value to a specific data type using built-in methods

let nums = parseInt("42")
let nums1 = parseFloat("83.23")

console.log(nums)
console.log(nums1)