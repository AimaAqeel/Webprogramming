// Define variables
let colors = [];
let pickedColor;
let numOptions = 3;
let score = 0;

// Select elements
const colorDisplay = document.getElementById('colorDisplay');
const optionsContainer = document.getElementById('options');
const messageDisplay = document.getElementById('message');
const scoreDisplay = document.getElementById('scoreValue');
const restartBtn = document.getElementById('restartBtn');

// Initialize the game
init();

// Initialize the game function
function init() {
    // Generate random colors
    generateRandomColors();
    // Pick a random color from colors array
    pickedColor = pickColor();
    // Display picked color
    colorDisplay.textContent = pickedColor;

    // Create color options
    createColorOptions();

    // Reset message display
    messageDisplay.textContent = "";

    // Reset score
    score = 0;
    scoreDisplay.textContent = score;
}

// Generate random RGB color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate random colors array
function generateRandomColors() {
    colors = [];
    for (let i = 0; i < numOptions; i++) {
        colors.push(randomColor());
    }
}

// Pick a random color from colors array
function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Create color options
function createColorOptions() {
    optionsContainer.innerHTML = "";
    colors.forEach(color => {
        const option = document.createElement('div');
        option.style.backgroundColor = color;
        option.classList.add('option');
        option.addEventListener('click', function() {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                score++;
                scoreDisplay.textContent = score;
                restartBtn.textContent = "Play Again?";
            } else {
                messageDisplay.textContent = "Try Again!";
            }
        });
        optionsContainer.appendChild(option);
    });
}

// Event listener for restart button
restartBtn.addEventListener('click', function() {
    init();
});