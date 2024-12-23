const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  colorSpan.textContent = "#" + randomColor;
});
