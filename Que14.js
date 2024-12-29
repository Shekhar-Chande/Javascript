//Que:- Write a JavaScript function that returns a Promise to simulate a delayed asynchronous operation (e.g.,a setTimeout) and resolves with a specific value after a set time and also rejects if a negative time value is provided.

function delayedOperation(time) {
    return new Promise((resolve, reject) => {
      // Reject the promise if a negative time value is provided
      if (time < 0) {
        reject("Time value cannot be negative");
        return;
      }
  
      // Use setTimeout to simulate the delay
      setTimeout(() => {
        resolve(`Operation completed after ${time} milliseconds`);
      }, time);
    });
  }

  
  // Example usage:
  delayedOperation(2000)  // resolves after 2 seconds
    .then(result => {
      console.log(result);  // Output: Operation completed after 2000 milliseconds
    })
    .catch(error => {
      console.error(error);  // If time is negative, this will be logged
    });


  
  delayedOperation(-1000)  // rejects immediately with an error
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);  // Output: Time value cannot be negative
    });
  