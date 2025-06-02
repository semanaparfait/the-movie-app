
  // document.getElementById('uploadForm').addEventListener('submit', function(event) {
  //   event.preventDefault();  // Prevents the form from submitting normally

  //   // Get the values from the form fields
  //   const movieName = document.getElementById('name').value;
  //   const genre = document.getElementById('genre').value;
  //   const file = document.getElementById('file').files[0];

  //   // Create a new movie card
  //   const newMovieCard = document.createElement('div');
  //   newMovieCard.classList.add('image1');

  //   // Create a new ribbon element
  //   const ribbon = document.createElement('div');
  //   ribbon.classList.add('ribbon');
  //   ribbon.innerHTML = `<span>${genre}</span>`;

  //   // Create a new image element for the movie
  //   const img = document.createElement('img');
  //   const fileURL = URL.createObjectURL(file); // Create a URL for the image
  //   img.src = fileURL;
    
  //   // Create the movie name and release date
  //   const movieNameElement = document.createElement('p');
  //   movieNameElement.innerText = movieName;
  //   const releaseDate = document.createElement('p');
  //   releaseDate.innerText = '2 hours ago'; // You can update this as per your requirements

  //   // Create the play button
  //   const playButton = document.createElement('i');
  //   playButton.classList.add('fa-solid', 'fa-play');

  //   // Append elements to the new movie card
  //   newMovieCard.appendChild(ribbon);
  //   newMovieCard.appendChild(img);
  //   newMovieCard.appendChild(movieNameElement);
  //   newMovieCard.appendChild(releaseDate);
  //   newMovieCard.appendChild(playButton);

  //   // Append the new movie card to the 'popular' section
  //   const popularSection = document.querySelector('.popular');
  //   popularSection.appendChild(newMovieCard);

  //   // Reset the form
  //   document.getElementById('uploadForm').reset();
  //   window.location.href = '../admin/movie.html';
  // });

  // -------------------------------------openingadmin login/signup-------------------------------------
 
  // function openAdminlogin() {
  //   // console.log("Admin login opened");
  //   document.querySelector(".admin-login").style.display = "block";
  //   document.querySelector(".admin-signup").style.display = "none";
  // }
  // function openAdminsignup() {
  //   document.querySelector(".admin-signup").style.display = "block";
  //   document.querySelector(".admin-login").style.display = "none";
  // }

  // -----------------------admin side bars toggle---------------
  document.getElementById("dashboard-link").addEventListener("click", function() {
    // document.getElementById("dashboard-link").classList.add("active");
    document.querySelector(".main-content").style.display = "block";
    document.querySelector(".upload-movie").style.display = "none";

  });
  document.getElementById("upload-movie-link").addEventListener("click", function() {
    // console.log("Upload movie clicked");
    document.querySelector(".main-content").classList.remove("active");
    document.querySelector(".main-content").style.display = "none";
    document.querySelector(".upload-movie").style.display = "block";
  });
document.getElementById("user-management-link").addEventListener("click", function() {
  document.querySelector(".main-content").style.display = "none";
  document.querySelector(".upload-movie").style.display = "none";
  document.querySelector(".user-management").style.display = "block";
});
// -----------------------geting user data from an array which is in movie intro-----------------------

import { MovieIntroEmail, useremailintro } from "../mvintro.js";
 let x= useremailintro.textContent = MovieIntroEmail[2]; 
 console.log("User email intro:", x);
const Mvintroid = document.getElementById("Movie-Intro-id").textContent = MovieIntroEmail[0];
const MvintroEmail = document.getElementById("Movie-intro-email").textContent = MovieIntroEmail[1];
const MvintroDate = document.getElementById("Movie-intro-date").textContent = MovieIntroEmail[2].toLocaleDateString();
const MvintroTime = document.getElementById("Movie-intro-time").textContent = MovieIntroEmail[2].toLocaleTimeString();
// console.log("MovieIntroEmail:", MovieIntroEmail);