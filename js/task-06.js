const inputRefs = document.querySelector("#validation-input");
inputRefs.addEventListener("blur", onInputBlur);

inputRefs.classList.add("valid");
const dataLengthAtribute = inputRefs.getAttribute("data-length");

function onInputBlur(event) {
// console.log(event.target.value.trim().length);
if (event.target.value.trim().length === Number(dataLengthAtribute)) {
  inputRefs.classList.remove("invalid");
  inputRefs.classList.add("valid");
} else {
  inputRefs.classList.remove("valid");
  inputRefs.classList.add("invalid");
}
};



