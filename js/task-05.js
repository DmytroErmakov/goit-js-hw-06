const inputValueRefs = document.querySelector("#name-input");
console.log(inputValueRefs);
const inputRefs = document.querySelector("#name-output");

const valueRef = inputValueRefs.addEventListener("input", onInputChange);

function onInputChange(event) {
       
    inputRefs.textContent = event.target.value.trim() ? event.target.value.trim() : "Anonymous";
    
};
