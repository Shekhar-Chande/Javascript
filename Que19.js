// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the Person prototype to display name and age
  Person.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  
  // Create two instances of Person
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Display their names and ages using the displayInfo method
  person1.displayInfo(); // Output: Name: Alice, Age: 30
  person2.displayInfo(); // Output: Name: Bob, Age: 25
  