const value = {
  inputId: document.querySelector("#validation-input"),
};

value.inputId.addEventListener("blur", handlerSearch);

// console.dir(value.inputId);

function handlerSearch(evt) {
  if (
    evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  ) {
    evt.currentTarget.classList.add("valid");
  } else {
    evt.currentTarget.classList.add("invalid");
  }
  console.log(evt.currentTarget.value.length);
}
