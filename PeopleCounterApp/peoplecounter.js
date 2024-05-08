// Get references to the HTML elements
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

// Initialize a variable to store the count
let count = 0;

// Function to handle incrementing the count
function incrementCount() {
    // Increment the count
    count++;

    // Update the text inside the count element
    countEl.textContent = count;
}

// Function to handle resetting the count
function resetCount() {
    // Reset the count to 0
    count = 0;

    // Update the text inside the count element
    countEl.textContent = count;
}
