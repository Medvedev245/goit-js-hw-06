const elements = {
  inputValue: document.querySelector("#name-input"),
  valueSpan: document.querySelector("#name-output"),
};
elements.inputValue.placeholder = "Anonymous";
// console.log(elements.inputValue.placeholder);

elements.inputValue.addEventListener("input", handlerSearch);

function handlerSearch(evt) {
  elements.valueSpan.textContent = evt.currentTarget.value.trim();
}
