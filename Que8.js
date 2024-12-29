//Que:- Define the Pure function in JavaScript, which provided a suitable example of comparing pure and
//impure functions.

//Ans:- Pure functions are the foundation of functional programming, but they can also be useful outside of it. They're predictable and reliable, and they can be shared many times inside a class. 


//Example :- 

function sumTwoNumbers(num1, num2) {
    return num1 + num2
  };

//The function sumTwoNumbers receives two arguments. We’re simply adding the two numbers and returning them as the function result.
//This function is a pure function because the result of the function relies entirely on the arguments passed to the function. Our function is not modifying any //state or value outside its scope. No matter what we have in our application, if we’re dealing with heavy state management, data mutations, etc.




// Impure Function :- An impure function in JavaScript is a function that may have side effects or depend on external state. This means that when the same input is given to an impure function, it may produce different outputs at different times. 

//Example:- 

function randomInt() { 
    return Math.floor(Math.random() * 10); 
} 
console.log(randomInt());



//Example:- Functions that read input from the console

function promptUser() { 
    const name = prompt("What is your name?"); 
    return `Hello, ${name}!`; 
}