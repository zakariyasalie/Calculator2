document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    const output = document.getElementById("output");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (button.textContent === "=") {
                output.value = eval(output.value);
            } else if (button.textContent === "C") {
                output.value = "";
            } else {
                output.value += button.textContent;
            }
        });
    });
});