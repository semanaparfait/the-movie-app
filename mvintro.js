export const MovieIntroEmail = [];
export const useremailintro = document.getElementById("user-email-intro");
window.onload=function(){
const emailInput = document.getElementById("email");
const nextButton = document.getElementById("next-button");
const errorMessage = document.getElementById("error-message");
const alertMessage = document.querySelector(".alert");
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
    return regex.test(email);
}

emailInput.addEventListener("input", () => {
    const email = emailInput.value;

    if (validateEmail(email)) {
        errorMessage.textContent = ""; // Clear error message
        nextButton.disabled = false;  // Enable button
        // alert("Valid email"); // Debugging log
     alertMessage.style.right = "0px";

    } else {
        errorMessage.textContent = "Please enter a valid email address.";
        nextButton.disabled = true;   // Disable button
        // alert("Invalid email"); // Debugging log
    }
});

nextButton.addEventListener("click", () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 
    const alertName = document.getElementById("alert-name");
    const email = emailInput.value;
    alertName.textContent = email;
    MovieIntroEmail.unshift(email,now); 
    useremailintro .textContent = MovieIntroEmail[2]; // Display the email in the useremailintro element
    // Add email to the beginning of the array
    console.log("Email added to array:", MovieIntroEmail);
    if (validateEmail(email)) {
        console.log("Redirecting to movie page...");
             alertMessage.style.display = "flex";
        // window.location.href = "movie.html"; // Redirect to the next page
    } else {
        alert("Invalid email, cannot redirect.");
    }
});
// -------------------------------------play sound-------------------------------------
document.getElementById("English-version").addEventListener("click", function() {
    const audio = document.getElementById("audio-endlish-vesion");
    audio.play();
    // window.location.href = "movie.html"; 
    console.log("Audio played");
});
}
