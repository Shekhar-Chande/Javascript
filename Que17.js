const Calculator = {
    // Initialize the result property
    result: 0,
  
    // Method to add a number to the result
    add: function(value) {
      this.result += value; // Update the result
      return this; // Return the Calculator object to allow chaining
    },
  
    // Method to subtract a number from the result
    subtract: function(value) {
      this.result -= value; // Update the result
      return this; // Return the Calculator object to allow chaining
    },
  
    // Method to multiply the result by a number
    multiply: function(value) {
      this.result *= value; // Update the result
      return this; // Return the Calculator object to allow chaining
    },
  
    // Method to divide the result by a number
    divide: function(value) {
      if (value !== 0) {
        this.result /= value; // Update the result
      } else {
        console.log("Error: Division by zero is not allowed.");
      }
      return this; // Return the Calculator object to allow chaining
    },
  
    // Method to get the current result
    getResult: function() {
      return this.result; // Return the current result
    },
  
    // Method to reset the calculator to 0
    reset: function() {
      this.result = 0; // Reset the result to 0
      return this; // Return the Calculator object to allow chaining
    }
  };
  
  // Example usage with method chaining:
  const result = Calculator.add(10)
                           .subtract(5)
                           .multiply(2)
                           .divide(5)
                           .getResult();
  
  console.log(result); // Output: 2
  
  // Reset the calculator and perform new operations
  const newResult = Calculator.reset()
                              .add(20)
                              .multiply(3)
                              .getResult();
  
  console.log(newResult); // Output: 60
  