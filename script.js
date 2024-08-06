const colorContainer = document.getElementById("color-container");
const colorButton = document.getElementById("color-button");

const colors = ["red", "blue", "yellow", "green", "orange", "brown", "white", "indigo", "violet"];

colorButton.addEventListener("click", () => {
    const background = document.getElementById("background");
    background.style.backgroundColor = colors[Math.floor(Math.random() * colors.length - 1)];
});


