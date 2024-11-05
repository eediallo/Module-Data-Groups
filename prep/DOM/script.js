const textArea = document.querySelector("textarea"); // acce
console.log(textArea);

const textAreaValue = textArea.value;

const characterLimit = textArea.maxLength;
const characterTyped = textAreaValue.length;
let remainingCharacters = characterLimit - characterTyped;

textArea.addEventListener("keyup", () => {
  console.log(textAreaValue);
});
