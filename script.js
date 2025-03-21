// Get the DOM elements
const numberElement = document.getElementById("number");
const increaserButton = document.getElementById("increaser");
const resetButton = document.getElementById("reset");
// Get the initial count value from localStorage or set to 0 if not found
let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;

// Set the initial displayed number
numberElement.textContent = count;

// Attach an event listener to the increaser button
increaserButton.addEventListener("click", () => {
    count++; // Increment the number
    numberElement.textContent = count; // Update the displayed number
    localStorage.setItem("count", count); // Save the new number in localStorage
});

resetButton.addEventListener("click", () =>{
    count = 0;
    numberElement.textContent = count;
    localStorage.setItem("count", count);

})