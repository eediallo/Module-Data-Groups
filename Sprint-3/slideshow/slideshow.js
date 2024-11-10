const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const forwardBtn = document.querySelector("#forward-btn");
const backBackwardBtn = document.querySelector("#backward-btn");
const carouselImg = document.querySelector("#carousel-img");

let carouselImgIndex = 0;

forwardBtn.addEventListener("click", () => {
  carouselImgIndex =
    carouselImgIndex + 1 === images.length ? 0 : carouselImgIndex + 1;
  carouselImg.setAttribute("src", images[carouselImgIndex]);
});

backBackwardBtn.addEventListener("click", () => {
  if (carouselImgIndex === 0) {
    carouselImgIndex = images.length - 1;
    console.log(carouselImgIndex);
  } else {
    carouselImgIndex = carouselImgIndex - 1;
    console.log(carouselImgIndex);
  }

  carouselImg.setAttribute("src", images[carouselImgIndex]);
});
