var marbles = document.querySelectorAll('.marble');
var currentIndex = 0;
var intervalId;

function moveMarble() {
    marbles.forEach((marble, index) => {
        marble.style.backgroundColor = index === currentIndex ? 'orange' : 'gray';
    });
    currentIndex = (currentIndex + 1) % marbles.length;
}

function startAnimation() {
    intervalId = setInterval(moveMarble, 1000);
}

function stopAnimation() {
    clearInterval(intervalId);
}

marbles.forEach(marble => {
    marble.addEventListener('mouseenter', stopAnimation);
    marble.addEventListener('mouseleave', startAnimation);
});

// Start the animation initially
startAnimation();