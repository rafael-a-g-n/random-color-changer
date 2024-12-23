const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

function setColor(color) {
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
  localStorage.setItem("lastColorHex", color); // Save to local storage
}

btn.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;
  setColor(color);
});

window.addEventListener("load", () => {
  const lastColor = localStorage.getItem("lastColorHex");
  if (lastColor) {
    setColor(lastColor);
  }
});
