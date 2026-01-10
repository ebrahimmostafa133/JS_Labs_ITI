var divImages = document.getElementById("divImages");
imgList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var currentIndex = 0;
var intervalId = null;

function showImage(index) {
    divImages.innerHTML = "";
    var img = document.createElement("img");
    img.src = "./SlideShow/" + imgList[index];
    img.width = "200";
    img.height = "150";
    divImages.appendChild(img);
}

function showNext() {
    if (currentIndex < imgList.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
}

function SlideShow() {
    if (intervalId === null) {
        intervalId = setInterval(function() {
            currentIndex = (currentIndex + 1) % imgList.length;
            showImage(currentIndex);
        }, 2000);
    }
}

function stop() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// Initial display
showImage(currentIndex);
