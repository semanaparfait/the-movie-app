const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

// Function to move the slide
function moveSlide(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    }
    updateSlide();
}

// Function to update the slide
function updateSlide() {
    const offset = -currentIndex * 100; // Move to the correct slide
    list.style.transform = `translateX(${offset}%)`;
}

// Automatic slide every 4 seconds
function autoSlide() {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateSlide();
}

// Start the automatic slider
let slideInterval = setInterval(autoSlide, 4000);

// Pause on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => clearInterval(slideInterval));
slider.addEventListener('mouseout', () => slideInterval = setInterval(autoSlide, 4000));

// Initial display
updateSlide();