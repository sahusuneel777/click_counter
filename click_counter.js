let buttonElement = document.getElementById("incrementBtn");
let counterElement = document.getElementById("counterValue");
buttonElement.onclick = function() {
    let previous_value = counterElement.textContent;
    let updated_value = parseInt(previous_value) + 1;
    counterElement.textContent = updated_value;
    localStorage.setItem("counter", updated_value);
}
let clkcount = localStorage.getItem("counter");
if (clkcount === null) {
    counterElement.textContent = 0;

} else {
    counterElement.textContent = clkcount;
}
