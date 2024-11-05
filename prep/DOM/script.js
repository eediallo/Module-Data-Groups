const textArea = document.querySelector("textarea"); // acce
const limitDisplay = document.querySelector('#character-limit-info')

const textAreaValue = textArea.value;

const characterLimit = textArea.maxLength;
const characterTyped = textAreaValue.length;
let remainingCharacters = characterLimit - characterTyped;

textArea.addEventListener("keyup", () => {
  console.log(textAreaValue);
});
