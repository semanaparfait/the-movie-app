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
// ---------------------display personal details---------
var personalInfo =  document.querySelector(".personal-info");
var personalDetail =  document.querySelector(".personal-detail");
var submitBtn = document.getElementById("submitBtn");
var nextBtn = document.getElementById("next");
nextBtn.addEventListener('click', function (){
  personalInfo.style.display = "none";
  personalDetail.style.display = "block";
  nextBtn.style.display = "none";
  submitBtn.style.display = "block";
});
    function flipCard() {
      document.getElementById('formWrapper').classList.toggle('flip');
    }
    // ------------------getting values and putting them into an array---------
    var signUpArray = []
    submitBtn.addEventListener('click', function() {
    const personalFirstname = document.getElementById("firstname").value;
    const personallastname = document.getElementById("lastname").value;
    const personalProfile = document.getElementById("profilePic").value;
    const personalEmail = document.getElementById("email").value;
    const personalPhoneNumber = document.getElementById("phoneNumber").value;
    const personalPassword = document.getElementById("password").value;

const userData = {
    firstname: personalFirstname,
    lastname: personallastname,
    profile: personalProfile,
    email: personalEmail,
    phone: personalPhoneNumber,
    password: personalPassword
  };

  signUpArray.push(userData);
  console.log(userData);
  });
