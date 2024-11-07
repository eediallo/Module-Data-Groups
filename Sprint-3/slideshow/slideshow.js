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

const carouselImg = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");

let currentImageIndex = 0;

function showImage(index) {
  carouselImg.setAttribute("src", images[index]);
}

