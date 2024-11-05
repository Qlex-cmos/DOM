// alert("coucou");

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
};

setInterval(bubbleMaker, 300);
