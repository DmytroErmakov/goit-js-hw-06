const inputFontRefs = document.querySelector("#font-size-control");
const inputFontSizeRefs = inputFontRefs.getAttribute("range");
const textSpanRefs = document.querySelector("#text");

inputFontRefs.addEventListener("input", onInputChange);

function onInputChange(event) {
    let fontSize = event.target.value;
    // console.log(`${fontSize}`);
    textSpanRefs.style.fontSize = `${fontSize}px`;
}

