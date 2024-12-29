// Get the Current Date and Time

var currentDate = new Date();
console.log(currentDate.toString());




//Extract Specific Date Components[
    var currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const dayOfMonth = currentDate.getDate();
    const dayOfWeek = currentDate.getDay();
    
    console.log("Current Year:", year);
    console.log("Current Month:", month); 
    console.log("Current Day of the Month:", dayOfMonth);
    console.log("Current Day of the Week:", dayOfWeek);



    //Modify the Date
    const currentDate = new Date();
    currentDate.setDate(15);
    currentDate.setMonth(1);
    console.log("Updated Date:", currentDate.toString());



//Handling Times Zones
const currentDate = new Date();
const localDate = currentDate.toString();

const utcDate = currentDate.toUTCString();

const localHours = currentDate.getHours();
const localMinutes = currentDate.getMinutes();
const localSeconds = currentDate.getSeconds();

const utcDay = currentDate.getUTCDate();
const utcHours = currentDate.getUTCHours();
const utcMinutes = currentDate.getUTCMinutes();
const utcSeconds = currentDate.getUTCSeconds();

console.log("Local Date and Time: ", localDate);
console.log("Local Time (hours:minutes:seconds): ", `${localHours}:${localMinutes}:${localSeconds}`);
console.log("UTC Date and Time: ", utcDate);
console.log("UTC Time (hours:minutes:seconds): ", `${utcHours}:${utcMinutes}:${utcSeconds}`);






//Optional Advanced Task[

function formatDate(date, isUTC = false) {
    // Helper function to pad single digit values with leading zeros
    function pad(num) {
      return num < 10 ? '0' + num : num;
    }
  
    // Extract components based on whether UTC or local time is needed
    const year = date.getFullYear();
    const month = pad(isUTC ? date.getUTCMonth() + 1 : date.getMonth() + 1);  // Months are 0-indexed
    const day = pad(isUTC ? date.getUTCDate() : date.getDate());
    const hours = pad(isUTC ? date.getUTCHours() : date.getHours());
    const minutes = pad(isUTC ? date.getUTCMinutes() : date.getMinutes());
    const seconds = pad(isUTC ? date.getUTCSeconds() : date.getSeconds());
  
    // Return the formatted string
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
  // Example usage:
  const currentDate = new Date();
  
  // Format using local time
  console.log("Local Time:", formatDate(currentDate));
  
  // Format using UTC time
  console.log("UTC Time:", formatDate(currentDate, true));