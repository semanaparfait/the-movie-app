// const list = document.querySelector('.list');
// const items = document.querySelectorAll('.item');
// let currentIndex = 0;

// // Function to move the slide
// function moveSlide(direction) {
//     if (direction === 'left') {
//         currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
//     } else if (direction === 'right') {
//         currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
//     }
//     updateSlide();
// }

// // Function to update the slide
// function updateSlide() {
//     const offset = -currentIndex * 100; // Move to the correct slide
//     list.style.transform = `translateX(${offset}%)`;
// }

// // Automatic slide every 4 seconds
// function autoSlide() {
//     currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
//     updateSlide();
// }

// // Start the automatic slider
// let slideInterval = setInterval(autoSlide, 4000);

// // Pause on hover
// const slider = document.querySelector('.slider');
// slider.addEventListener('mouseover', () => clearInterval(slideInterval));
// slider.addEventListener('mouseout', () => slideInterval = setInterval(autoSlide, 4000));

// // Initial display
// updateSlide();




document.addEventListener('DOMContentLoaded', () => {
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideIndicator = document.querySelector('.slide-indicator');
const mainContainer = document.getElementById('mainContainer');
const locationInfo = document.getElementById('locationInfo');
const locationRegion = document.getElementById('locationRegion');
const locationName = document.getElementById('locationName');
const locationDescription = document.getElementById('locationDescription');

let currentIndex = 0;

function updateCarousel() {
// Remove active class from all items
carouselItems.forEach(item => item.classList.remove('active'));

// Add active class to current item
carouselItems[currentIndex].classList.add('active');

// Fade out location info
locationInfo.classList.add('fade-out');

// Wait for fade-out animation
setTimeout(() => {
    // Update background
    mainContainer.style.backgroundImage = carouselItems[currentIndex].style.backgroundImage;
    
    // Update location info
    locationRegion.textContent = carouselItems[currentIndex].getAttribute('data-region');
    locationName.textContent = carouselItems[currentIndex].getAttribute('data-name');
    locationDescription.textContent = carouselItems[currentIndex].getAttribute('data-description');
    
    // Update slide indicator
    slideIndicator.textContent = `0${currentIndex + 1}`;
    
    // Fade in location info
    locationInfo.classList.remove('fade-out');
}, 500);
}

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % carouselItems.length;
updateCarousel();
});

prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
updateCarousel();
});

// Auto-rotate every 3 seconds
setInterval(() => {
currentIndex = (currentIndex + 1) % carouselItems.length;
updateCarousel();
}, 3000);
});
// --------------------------------------------



const movieItems = document.querySelectorAll(".movie")

movieItems.forEach(movie => {
    movie.addEventListener('click', function() {
        console.log("ghfcbcbbc")
        // Get the attributes from the clicked movie div
        const image = movie.getAttribute('data-image');
        const name = movie.getAttribute('data-name');
        const genre = movie.getAttribute('data-genre');
        const director = movie.getAttribute('data-director');
        const year = movie.getAttribute('data-year');
        const rating = movie.getAttribute('data-rating');
        const description = movie.getAttribute('data-description');
        const narrator = movie.getAttribute('data-narrator');

       
    });
});

// Function to close the movie card
function closeCard() {
    movieCard.style.display = 'none';
}