// document.addEventListener("DOMContentLoaded", function() {
// const openSignup = document.getElementById("signup-text");
// const openLogin = document.getElementById("signin-text");
// const closeSignIN = document.querySelector(".close-signin-page");
// const OpenSigninPage = document.querySelector(".login-page");
// const closeLogin = document.querySelector(".close-login");
// const openSignupPage = document.querySelector(".signup-page");
// const closeSignupPage = document.querySelector(".close-sign-up");

// openSignup.addEventListener('click', function() {
// console.log("Login clicked");
// closeSignIN.classList.add("active");
// openSignupPage.classList.add("active");
// openSignupPage.style.display = "block";
// closeSignupPage.classList.remove("active");
// // closeSignupPage.classList.remove("active");

// });
// openLogin.addEventListener('click', function() {
// console.log("Signup clicked");
// closeSignIN.classList.remove("active");
// openSignupPage.classList.remove("active");
// OpenSigninPage.classList.add("active");
// closeSignupPage.classList.add("active");
// }
// );

// });

    function flipCard() {
      document.getElementById('formWrapper').classList.toggle('flip');
    }