// JavaScript for Clients Slider
document.querySelector('.prev-btn').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.querySelector('.next-btn').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});