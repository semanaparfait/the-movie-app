// // Subscription Selection
// function subscribe(plan) {
//     alert(`You selected the ${plan} plan! Please proceed to payment.`);
//     // Here you would initiate the backend payment process
// }

// // Login Simulation
// function loginUser(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     console.log(`Logging in user: ${username}`);
//     alert('Login successful! Redirecting to your dashboard...');
//     // Actual login will require backend verification
// }

// // Sign-up Simulation
// function signUpUser(event) {
//     event.preventDefault();
//     const newUsername = document.getElementById('newUsername').value;
//     const newPassword = document.getElementById('newPassword').value;
//     console.log(`Signing up user: ${newUsername}`);
//     alert('Sign-up successful! You can now log in.');
//     // Here you would send user data to backend
// }
// // Sample Movies (Can be fetched from backend)
// const movies = ["Movie 1", "Movie 2", "Movie 3", "Movie 4"];

// // Show Dashboard after login
// function showDashboard() {
//     document.getElementById('dashboard').style.display = 'block';
//     document.getElementById('login').style.display = 'none';
//     document.getElementById('signup').style.display = 'none';
//     loadMovies();
//     updateSubscriptionDetails();
// }

// // Load Movie List
// function loadMovies() {
//     const movieList = document.getElementById('movieList');
//     movieList.innerHTML = ""; // Clear list before adding
//     movies.forEach(movie => {
//         movieList.innerHTML += `<li>${movie} - <button onclick="watchMovie('${movie}')">Watch</button> <button onclick="downloadMovie('${movie}')">Download</button></li>`;
//     });
// }

// // Sample user subscription data
// let userSubscription = {
//     plan: "Free Trial",
//     daysLeft: 10,
//     downloadLimit: 10,
//     downloadsUsed: 0
// };

// // Update Subscription Details on Dashboard
// function updateSubscriptionDetails() {
//     document.getElementById('subscriptionPlan').textContent = `Plan: ${userSubscription.plan}`;
//     document.getElementById('daysLeft').textContent = `Days Left: ${userSubscription.daysLeft}`;
// }

// // Watching and Downloading Movies
// function watchMovie(movie) {
//     alert(`Now watching ${movie}`);
//     // Here you'd load the movie player
// }

// function downloadMovie(movie) {
//     if (userSubscription.plan === "Free Trial") {
//         alert("Downloads are not allowed on the Free Trial. Please subscribe for downloads.");
//     } else if (userSubscription.downloadsUsed >= userSubscription.downloadLimit) {
//         alert("You have reached your download limit.");
//     } else {
//         userSubscription.downloadsUsed += 1;
//         alert(`Downloading ${movie}. Downloaded ${userSubscription.downloadsUsed} out of ${userSubscription.downloadLimit}.`);
//         updateSubscriptionDetails();
//     }
// }

// // Token Validation (For Friends' Access)
// function validateToken() {
//     const token = document.getElementById('tokenInput').value;
//     if (token === "12345") { // Example token; replace with actual token validation via backend
//         alert("Access granted with token.");
//     } else {
//         alert("Invalid token. Please try again.");
//     }
// }

// // Renew Subscription
// function renewSubscription() {
//     alert("Please select a subscription plan to renew.");
//     // Redirect or open subscription plans
// }

// // Logout User
// function logoutUser() {
//     alert("Logging out...");
//     document.getElementById('dashboard').style.display = 'none';
//     document.getElementById('login').style.display = 'block';
// }
