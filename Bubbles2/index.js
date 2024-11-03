const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble"); // injection d'une classe
  document.body.appendChild(bubble); // injecter le span créé dans le body

  // Randomiser la taille des bulles
  const size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size; // on injecte la variable en pointant l'élément
  bubble.style.width = size; // on injecte la variable en pointant l'élément

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300);
