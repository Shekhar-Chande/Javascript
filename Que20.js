// Grocery list manager object
const groceryListManager = {
    // Initialize an empty array to hold grocery items
    list: [],
  
    // Method to add a new item to the list
    addItem: function(name) {
      // Each item is an object with 'name' and 'purchased' (initially false)
      const item = {
        name: name,
        purchased: false,
      };
      this.list.push(item);
    },
  
    // Method to mark an item as purchased
    markAsPurchased: function(name) {
      const item = this.list.find(i => i.name === name);
      if (item) {
        item.purchased = true;
      } else {
        console.log(`Item "${name}" not found.`);
      }
    },
  
    // Method to remove an item by setting it to null
    removeItem: function(name) {
      const index = this.list.findIndex(i => i.name === name);
      if (index !== -1) {
        this.list[index] = null;
      } else {
        console.log(`Item "${name}" not found.`);
      }
    },
  
    // Method to add an undefined item (demonstrating the use of undefined)
    addUndefinedItem: function() {
      this.list.push(undefined);
    },
  
    // Method to display the current list
    viewList: function() {
      console.log("Current Grocery List:");
      this.list.forEach((item, index) => {
        if (item === null) {
          console.log(`${index + 1}. Item has been removed.`);
        } else if (item === undefined) {
          console.log(`${index + 1}. Undefined item.`);
        } else {
          console.log(`${index + 1}. ${item.name} - Purchased: ${item.purchased}`);
        }
      });
    }
  };
  
  // Example usage:
  
  // Add items to the list
  groceryListManager.addItem("Milk");
  groceryListManager.addItem("Eggs");
  groceryListManager.addItem("Bread");
  
  // View the list
  groceryListManager.viewList();
  
  // Mark an item as purchased
  groceryListManager.markAsPurchased("Eggs");
  
  // Add an undefined item to the list
  groceryListManager.addUndefinedItem();
  
  // Remove an item
  groceryListManager.removeItem("Bread");
  
  // View the updated list
  groceryListManager.viewList();
  