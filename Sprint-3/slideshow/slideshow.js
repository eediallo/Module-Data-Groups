const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

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
const autoBackwardBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");
const autoForwardBtn = document.querySelector("#auto-forward");

let autoPlayInterval;

function toggleDisabledButtons(disabled) {
  autoBackwardBtn.disabled = disabled;
  autoForwardBtn.disabled = disabled;
}

if (autoForwardBtn) {
  autoForwardBtn.addEventListener("click", () => {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(moveImageForward, 2000);
    toggleDisabledButtons(true);
  });
}

if (autoBackwardBtn) {
  autoBackwardBtn.addEventListener("click", () => {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(moveImageBackwards, 2000);
    toggleDisabledButtons(true);
  });
}

if (stopBtn) {
  stopBtn.addEventListener("click", () => {
    toggleDisabledButtons(false);
    clearInterval(autoPlayInterval);
  });
}
