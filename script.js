// Get the DOM elements
const numberElement = document.getElementById("number");
const increaserButton = document.getElementById("increaser");
const resetButton = document.getElementById("reset");
const decreaserButton = document.getElementById("decreaser");
const fireImage = document.getElementById("fireImage");


// Get the initial count value from localStorage or set to 0 if not found
let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;

// Set the initial displayed number
numberElement.textContent = count;
updateFireSize();
// Attach an event listener to the increaser button
increaserButton.addEventListener("click", () => {
    count++; // Increment the number
    numberElement.textContent = count; // Update the displayed number
    localStorage.setItem("count", count); // Save the new number in localStorage
    updateFireSize();
});

decreaserButton.addEventListener("click", () => {
    count--; // Increment the number
    numberElement.textContent = count; // Update the displayed number
    localStorage.setItem("count", count); // Save the new number in localStorage
    updateFireSize();
});

resetButton.addEventListener("click", () =>{
    count = 0;
    numberElement.textContent = count;
    localStorage.setItem("count", count);
    updateFireSize(); 

})

function updateFireSize() {
    let baseSize = 100; // minimum size in px
    let growthPerCount = 5; // size increase per streak count
    let maxSize = 500; // max size in px

    // Prevent negative sizes
    let newSize = Math.max(baseSize, baseSize + count * growthPerCount);
    newSize = Math.min(newSize, maxSize); // apply max limit

    // Apply new size
    fireImage.style.width = `${newSize}px`;
    fireImage.style.height = `${newSize}px`;
}

