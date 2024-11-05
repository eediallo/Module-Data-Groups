const textArea = document.querySelector("textarea"); // acce
console.log(textArea);

const textAreaValue = textArea.value;

textArea.addEventListener("keyup", () => {
  console.log(textAreaValue);
});
