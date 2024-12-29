//Que:- Describe the purpose and usage of the localStorage and sessionStorage APIs in web development. Give suitable examples for each.

//Ans:- 1. localStorage

//localStorage provides a way to store data that persists even after the user closes the browser or restarts the device. Data stored in localStorage is available across browser sessions and will only be removed if explicitly deleted by the developer or the user. It's typically used for storing user preferences, settings, or any data that should be available across multiple visits or sessions to a website.localStorage typically allows up to 5MB of data per origin (domain).

//Example:- 
// Storing data in localStorage
localStorage.setItem('username', 'johnDoe');

// Retrieving data from localStorage
let username = localStorage.getItem('username');
console.log(username);  // Output: johnDoe

// Updating the stored data
localStorage.setItem('username', 'janeDoe');

// Removing a specific item
localStorage.removeItem('username');

// Clearing all localStorage data
localStorage.clear();


// Use Case:
// Imagine a web app where a user logs in, and their username is stored in localStorage. Even if the user closes the browser and returns later, they will still be logged in without needing to re-enter their username.






//2. sessionStorage

//sessionStorage is used to store data that is specific to a particular session and is only available as long as the browser tab or window is open. Once the tab is closed, the data is cleared. This makes it ideal for storing temporary data that doesn’t need to persist across sessions.It's commonly used for storing session-specific data like authentication tokens, form data, or temporary state that should not persist beyond the current session.sessionStorage also typically allows 5MB of storage per origin, similar to localStorage.

// Storing data in sessionStorage
sessionStorage.setItem('cartItem', 'laptop');

// Retrieving data from sessionStorage
let cartItem = sessionStorage.getItem('cartItem');
console.log(cartItem);  // Output: laptop

// Updating the stored data
sessionStorage.setItem('cartItem', 'smartphone');

// Removing a specific item
sessionStorage.removeItem('cartItem');

// Clearing all sessionStorage data
sessionStorage.clear();


// Use Case:
// Imagine an e-commerce website where the user adds items to a shopping cart during their session. The sessionStorage can hold these items temporarily. Once the tab is closed, the cart data will be lost, preventing unnecessary persistence of that information.