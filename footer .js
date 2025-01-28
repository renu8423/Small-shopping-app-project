// footer.js
document.addEventListener("DOMContentLoaded", () => {
    fetch('footer.html') // Fetch the footer.html file
        .then(response => response.text()) // Get the response as text
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data; // Insert the footer HTML
        })
        .catch(error => console.error('Error loading footer:', error)); // Handle errors
});

console.log("footer.js loaded successfully");
