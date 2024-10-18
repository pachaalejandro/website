// JavaScript for Slider
document.querySelector('.prev-btn').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.next-btn').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
