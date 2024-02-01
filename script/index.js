// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 10;

// Function to check if the user's guess is correct
function checkGuess(event) {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    
    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
    } else if (userGuess < randomNumber) {
        alert("Too low. Try guessing a higher number.");
    } else {
        alert("Too high. Try guessing a lower number.");
    }
    
    remainingGuesses--;
    
    if (remainingGuesses === 0) {
        alert("Game over. You have used all your guesses.");
    }
    event.preventDefault()
}

function playAgain() {
    // Reset the random number and remaining guesses
    randomNumber = Math.floor(Math.random() * 100) + 1;
    remainingGuesses = 10;

    // Clear the guess input field
    document.getElementById("guessInput").value = "";

    // Display a message to start a new game
    alert("New game started. Guess a number between 1 and 100.");

    // Enable the guess input field
    document.getElementById("guessInput").disabled = false;
}


// Example usage
document.getElementById("submit_guess").addEventListener("click", checkGuess);

document.getElementById("playAgain").addEventListener("click", playAgain);
