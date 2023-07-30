const elements = {
  value: document.querySelector("#value"),
};

const counterDown = elements.value.previousElementSibling; // 1
const counterUp = elements.value.nextElementSibling; // -1

counterDown.addEventListener("click", handlerchickDown);
counterUp.addEventListener("click", handlerchickUp);

let counterValue = 0;

function handlerchickDown(evt) {
  // -1
  counterValue -= 1;
  elements.value.textContent = `${counterValue}`;
  console.log(counterValue);
}

function handlerchickUp(evt) {
  //  +1
  counterValue += 1;
  elements.value.textContent = `${counterValue}`;
  console.log(counterValue);
}
