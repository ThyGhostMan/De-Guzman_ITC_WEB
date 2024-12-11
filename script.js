const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let autoRotateInterval;

// Function to rotate the carousel
function rotateCarousel() {
    const rotateY = -currentIndex * 90; // 90 degrees for 4 items
    carouselInner.style.transform = `rotateY(${rotateY}deg)`;
}

// Function to handle next button click
function next() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    rotateCarousel();
}

// Function to handle previous button click
function prev() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    rotateCarousel();
}

// Function to open a website in the same tab
function openWebsite(url) {
    window.location.href = url; // Open in the same tab
}

// Function to start automatic rotation
function startAutoRotate() {
    autoRotateInterval = setInterval(next, 3000); // Change image every 3 seconds
}

// Function to stop automatic rotation
function stopAutoRotate() {
    clearInterval(autoRotateInterval);
}

// Event listeners for buttons
document.getElementById('next-btn').addEventListener('click', () => {
    stopAutoRotate(); // Stop auto-rotation when manually navigating
    next();
    startAutoRotate(); // Restart auto-rotation
});

document.getElementById('prev-btn').addEventListener('click', () => {
    stopAutoRotate(); // Stop auto-rotation when manually navigating
    prev();
    startAutoRotate(); // Restart auto-rotation
});

// Add click event listeners to each carousel item
carouselItems.forEach(item => {
    const url = item.getAttribute('data-url'); // Assuming each item has a data-url attribute
    item.addEventListener('click', () => {
        openWebsite(url); // Open the URL in the same tab
    });
});

// Start the automatic rotation when the page loads
startAutoRotate();