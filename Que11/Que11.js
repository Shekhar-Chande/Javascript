//Que:- Explain the concept of Event Bubbling in the DOM, and explain with an example.


//Ans:-  Event bubbling is a way that events (like clicks or key presses) move through the elements in an HTML document. When an event happens in a specific element (like a button), it first affects that element and then moves up to its parent elements, triggering any event listeners attached to those parents. This process is called “bubbling” because it starts at the bottom (the innermost element) and bubbles up to the top (the outer elements).

// Event Bubbling Working:- 

// Starting Point: When you interact with an element, such as clicking a button, the event starts with that element.
// Propagation: The event then moves up through its parent elements in the DOM (Document Object Model) tree, triggering any event listeners that are set up for that event type.
// Order of Execution: The innermost element’s event listener is executed first, followed by the outer elements in the order they appear in the DOM.


document.getElementById(
    "child").addEventListener("click", function () {
        alert("You clicked the Child element!");
    }, false);

document.getElementById(
    "parent").addEventListener("click", function () {
        alert("You clicked the parent element!");
    }, false);