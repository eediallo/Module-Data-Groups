const commentInput = document.querySelector("#comment-input");
const limitDisplay = document.querySelector("#character-limit-info");

function updateCharacterLimit() {
  const characterLimit = commentInput.maxLength;
  const characterTyped = commentInput.value.length;
  let remainingCharacters = characterLimit - characterTyped;
  limitDisplay.innerText = `You have ${remainingCharacters} characters remaining`;
}

commentInput.addEventListener("keyup", updateCharacterLimit);
