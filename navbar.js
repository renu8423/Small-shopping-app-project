

document.addEventListener('DOMContentLoaded',()=>{
    fetch('navbar.html')
    .then(response=> response.text())
    .then(data=>{
        document.getElementById('navbar-placeholder').innerHTML=data;
    })
    .catch(error => console.error('Error loading navbar',error));
});
console.log("navbar.js loaded successfully");
