document.getElementById("profile-page").addEventListener("click", function() {
    console.log("Profile page clicked");
    document.querySelector(".profile-container").style.display = "block";
    document.querySelector(".invoices-container").style.display = "none";
});
 document.getElementById("invoice-page").addEventListener("click", function() {
    console.log("Invoice page clicked");
     document.querySelector(".profile-container").style.display = "none";
    document.querySelector(".invoices-container").style.display = "block";
}
);
document.getElementById("account-page").addEventListener("click", function() {
    document.querySelector(".account-container").style.display = "block";
         document.querySelector(".profile-container").style.display = "none";
    document.querySelector(".invoices-container").style.display = "none";

});
const container = document.querySelector(".overlay-login");
const toggleBtn = document.getElementById("open-ovelays");
const message = document.getElementById("heading3-message");

toggleBtn.addEventListener("click", () => {
    console.log("clicked");
    container.classList.toggle("active");
    if (container.classList.contains("active")) {
        message.textContent = "Enjoy creating a new account with us!";
        toggleBtn.textContent = "Log In";
    } else {
        message.textContent = "New Here?";
        toggleBtn.textContent = "Sign Up";
    }
});
