function description(){
    document.getElementById("description").style.display = "block";
    document.getElementById("details").style.display = "none";
    document.querySelector(".content-panel").classList.add = "active";
}
function movieDetails(){
    document.getElementById("details").style.display = "block";
    document.getElementById("description").style.display = "none";
    document.querySelector(".content-panel").classList.add = "active";
}

// -----------------------click and opens into card---------

// const movieItems = document.querySelectorAll(".movie, .image2")

// movieItems.forEach(movie => {
//     movie.addEventListener('click', function() {
//         // Get the attributes from the clicked movie div
//         const image = movie.getAttribute('data-image');
//         const name = movie.getAttribute('data-name');
//         const genre = movie.getAttribute('data-genre');
//         const director = movie.getAttribute('data-director');
//         const year = movie.getAttribute('data-year');
//         const rating = movie.getAttribute('data-rating');
//         const description = movie.getAttribute('data-description');
//         const narrator = movie.getAttribute('data-narrator');

//         // Update the movie card with the clicked movie's information
//         movieCardImage.src = image;
//         movieName.textContent = name;
//         movieGenre1.textContent = genre;
//         movieCardDirector.textContent = director;
//         movieDate.textContent = year;
//         movieCardRating.textContent = rating;
//         movieDescriptions.textContent = description;
//         movieUmusobanuzi.textContent =narrator; 

//         // Show the movie card
//         movieCard.style.display = 'block';
//     });
   
// });

// Function to close the movie card
function closeCard() {
    movieCard.style.display = 'none';
}



const params = new URLSearchParams(window.location.search);
const  name= params.get("name");
const year = params.get("year");
const desc = params.get("description");
const image = params.get("image");


document.getElementById("movieName").textContent = name;
document.getElementById("movieDate").textContent = "Released: " + year;
document.getElementById("movieImage").src = image;
document.getElementById("movieGenre1").textContent = params.get("genre");
document.getElementById("movieGenre2").textContent = params.get("genre2");

document.getElementById("movieDescriptions").textContent = desc;
document.getElementById("movieCountry").textContent =  params.get("country");
document.getElementById("movieUmusobanuzi").textContent = params.get("interpreter");

