//Que :- What distinguishes a recursive function in JavaScript? Write a program to solve the Fibonacci series of a
//given n number.


//Ans:- A recursive function is a function that calls itself until it doesn’t. This technique is called recursion.
//Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:

//Example:-

// function recurse()
// {     
//     // recurse()
// }

// A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. 



//Example to solve fibonacci series

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Printing n fibonacci sequence
n = 10
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
};

