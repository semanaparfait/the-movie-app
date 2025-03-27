const emailInput = document.getElementById("email");
const nextButton = document.getElementById("next-button");
const errorMessage = document.getElementById("error-message");

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
    return regex.test(email);
}

emailInput.addEventListener("input", () => {
    const email = emailInput.value;

    if (validateEmail(email)) {
        errorMessage.textContent = ""; // Clear error message
        nextButton.disabled = false;  // Enable button
        alert("Valid email"); // Debugging log
    } else {
        errorMessage.textContent = "Please enter a valid email address.";
        nextButton.disabled = true;   // Disable button
        alert("Invalid email"); // Debugging log
    }
});

nextButton.addEventListener("click", () => {
    const email = emailInput.value;

    if (validateEmail(email)) {
        console.log("Redirecting to movie page...");
        window.location.href = "movie.html"; // Redirect to the next page
    } else {
        alert("Invalid email, cannot redirect.");
    }
});
