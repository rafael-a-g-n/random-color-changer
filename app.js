const colors = [
  // Named colors
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "brown",
  "teal",
  "indigo",
  "violet",
  "magenta",
  "lime",
  "olive",
  "navy",
  "maroon",
  "aqua",
  "coral",

  // Hex colors
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#F1C40F",
  "#E74C3C",
  "#3498DB",
  "#2ECC71",
  "#9B59B6",
  "#1ABC9C",
  "#34495E",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#8E44AD",

  // RGB/RGBA colors
  "rgb(255, 99, 71)",
  "rgb(60, 179, 113)",
  "rgb(238, 130, 238)",
  "rgba(255, 99, 71, 0.8)",
  "rgba(60, 179, 113, 0.7)",
  "rgba(238, 130, 238, 0.9)",
  "rgba(106, 90, 205, 0.75)",
  "rgba(250, 128, 114, 0.85)",

  // HSL colors
  "hsl(0, 100%, 50%)",
  "hsl(120, 100%, 50%)",
  "hsl(240, 100%, 50%)",
  "hsla(0, 100%, 50%, 0.8)",
  "hsla(120, 100%, 50%, 0.7)",
  "hsla(240, 100%, 50%, 0.9)",
];

const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

function setColor(color) {
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
  localStorage.setItem("lastColor", color);
}

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomNumber];
  setColor(selectedColor);
});

window.addEventListener("load", () => {
  const lastColor = localStorage.getItem("lastColor");
  if (lastColor) {
    setColor(lastColor);
  }
});
