let counterValue = 0;
const spanValue = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action); 

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action); 

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
})