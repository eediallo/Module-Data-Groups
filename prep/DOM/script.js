const textArea = document.querySelector("textarea"); // acce
console.log(textArea);

const textAreaValue = textArea.value;

const characterLimit = 200;

textArea.addEventListener("keyup", () => {
  console.log(textAreaValue);
});
