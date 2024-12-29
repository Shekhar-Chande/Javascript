//Que:- Explain what an execution context is in JavaScript and how it relates to the call stack.



//Ans:- 
// An execution context in JavaScript refers to the environment in which code is executed. It contains information about variables, functions, and the value of this for the code currently being executed. There are three main types of execution contexts:

// Global Execution Context: The default context where the JavaScript code starts running.
// Function Execution Context: Created every time a function is invoked.
// Eval Execution Context: Created when code is executed inside an eval() function.
// Relation to the Call Stack:
// The call stack is a data structure that tracks the execution contexts. It follows the Last In, First Out (LIFO) principle. Here's how it works:

// When the JavaScript engine starts running, the global execution context is pushed onto the call stack.
// Every time a function is called, a new function execution context is pushed onto the stack.
// When a function finishes, its context is popped off the stack, and the execution continues from the next context on the stack.
// In summary, execution contexts are created for each block of code or function, and the call stack manages the order in which these contexts are executed.




