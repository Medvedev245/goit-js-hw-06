const value = {
  inputValue: document.querySelector("#font-size-control"),
  textSize: document.querySelector("#text"),
};

value.inputValue.addEventListener("input", handleRange);

// console.dir(value.inputValue);
// console.dir(value.textSize);

function handleRange(evt) {
  value.textSize.style.fontSize = evt.currentTarget.value + "px";
}
