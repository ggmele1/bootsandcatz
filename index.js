const section = document.querySelector("section");
const cat = document.querySelector(".cat");
const text = document.getElementById("text");
const body = document.getElementById("text2");
const FPS = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// cat moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;
function update() {
  cat.style.left = xPosition + "px";
  cat.style.top = yPosition + "px";
}

setInterval(() => {
  if (xPosition + cat.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
    text.style.color = randomColor();
    body.style.color = randomColor();
  }
  if (yPosition + cat.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
    text.style.color = randomColor();
    body.style.color = randomColor();
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FPS);
function randomColor() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();

  return color;
}
console.log(randomColor());

window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});
