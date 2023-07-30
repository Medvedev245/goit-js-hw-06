const elements = {
  form: document.querySelector(".login-form"),
};

elements.form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  //   console.dir(evt.currentTarget.elements.email);
  //   console.dir(evt.currentTarget.email.value);
  if (email.value === "" || password.value === "") {
    alert("Заповни всі поля !");
  } else {
    const values = {
      mail: email.value,
      password: password.value,
    };

    console.log(values);
    elements.form.reset();
  }
}
