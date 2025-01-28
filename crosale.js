document.addEventListener('DOMContentLoaded', () => {
  // First fetch and inject HTML
  fetch('crosale.html')
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById('carousel-container');
      if (container) {
        container.innerHTML = html;
        initializeCarousel(); // Initialize carousel once content is injected
      } else {
        console.error('Carousel container not found!');
      }
    })
    .catch(error => console.error('Error fetching carousel:', error));
  
  // Define the carousel initialization function
  function initializeCarousel() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    
    // Check if essential DOM elements are present
    if (!prevButton || !nextButton || !carousel || items.length === 0) {
      console.error('Carousel or its buttons are missing in the DOM.');
      return;
    }

    const totalItems = items.length;
    let currentIndex = 0;

    const updateCarousel = () => {
      const translateX = -currentIndex * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
    };

    // Handle "Previous" button click
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop backward
      updateCarousel();
    });

    // Handle "Next" button click
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems; // Loop forward
      updateCarousel();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems; // Loop forward
      updateCarousel();
    }, 5000);
  }
});
