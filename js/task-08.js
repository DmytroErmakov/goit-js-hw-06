const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formData = new FormData(event.currentTarget);
  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Внимание! необходимо заполнить все поля :)");
  } else {
    const formData = { email: email.value, password: password.value };
    console.log(formData);
  }
  
  form.reset();
}

