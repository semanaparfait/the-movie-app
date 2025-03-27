function description(){
    document.querySelector(".description-content").style.display = "block";
    document.querySelector(".details").style.display = "none";
}
function movieDetails(){
    document.querySelector(".details").style.display = "block";
    document.querySelector(".description-content").style.display = "none";
}

// -----------------------click and opens into card---------

const movieItems = document.querySelectorAll(".movie, .image2")

movieItems.forEach(movie => {
    movie.addEventListener('click', function() {
        // Get the attributes from the clicked movie div
        const image = movie.getAttribute('data-image');
        const name = movie.getAttribute('data-name');
        const genre = movie.getAttribute('data-genre');
        const director = movie.getAttribute('data-director');
        const year = movie.getAttribute('data-year');
        const rating = movie.getAttribute('data-rating');
        const description = movie.getAttribute('data-description');
        const narrator = movie.getAttribute('data-narrator');

        // Update the movie card with the clicked movie's information
        movieCardImage.src = image;
        movieName.textContent = name;
        movieGenre1.textContent = genre;
        movieCardDirector.textContent = director;
        movieDate.textContent = year;
        movieCardRating.textContent = rating;
        movieDescriptions.textContent = description;
        movieUmusobanuzi.textContent =narrator; 

        // Show the movie card
        movieCard.style.display = 'block';
    });
});

// Function to close the movie card
function closeCard() {
    movieCard.style.display = 'none';
}