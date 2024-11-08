const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

// steps
// 1. query img, forward button and backward button
// 2. displays next img when forward button is clicked
// 3. display previous image when backward button is clicked

//===================Level 1=============================
const carouselImg = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");

let currentImageIndex = 0;

function showImage(index) {
  carouselImg.setAttribute("src", images[index]);
}

function moveImageForward() {
  currentImageIndex =
    currentImageIndex + 1 === images.length ? 0 : currentImageIndex + 1;
  showImage(currentImageIndex);
}

forwardBtn.addEventListener("click", moveImageForward);

function moveImageBackwards() {
  if (currentImageIndex - 1 < 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }
  showImage(currentImageIndex);
}

backwardBtn.addEventListener("click", moveImageBackwards);

//=====================Level 2======================================
const autoBackwardBtn = document.querySelector("#auto-backward-btn");
const stopBtn = document.querySelector("#stop-btn");
const autoForwardBtn = document.querySelector("#auto-forward-btn");

let autoPlayInterval;

autoForwardBtn.addEventListener("click", () => {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    currentImageIndex =
      currentImageIndex + 1 === images.length ? 0 : currentImageIndex + 1;
    showImage(currentImageIndex);
  }, 5000);
});

autoBackwardBtn.addEventListener("click", () => {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    currentImageIndex =
      currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1;
    showImage(currentImageIndex);
  }, 5000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(autoPlayInterval);
});
