// alert("coucou");
const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);
  bubble.classList.add("bubble");

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  setTimeout(() => {
    bubble.remove();
  }, 4000);

  bubble.addEventListener("click", () => {
    bubble.remove();
    counter++;
    counterDisplay.textContent = counter;
  });
};

setInterval(bubbleMaker, 300);
