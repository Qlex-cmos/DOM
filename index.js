// alert("Hello");

//*** LES SELECTEURS ***//

// document.querySelector("h4").style.background = "yellow";

// Cloisonnons notre élément dans une variable, (on enferme une logique dans une variable) :
// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";

//*** LES CLICK EVENTS ***//
// on commence par créer une variable qui pointe un élément sur le DOM
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(btn1, btn2);

// après la création de chaque variable, il faut la logger dans la console pour vérifier qu'on a bien pointé l'élément
// console.log(questionContainer);

// on injecte du style à partir de javascript
// questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  //   questionContainer.style.background = "red"; // le style est injecter non pas en CSS mais directement dans sa balise
  //   questionContainer.style.border = "3px solid teal";
  // Meilleure pratique : On peut plutôt injecter une classe qui aura tous les éléments de style qu'on souhaite
  // Pour cela, il faut aller créer cette classe en css
  //   questionContainer.classList.add("question-click"); // Pas besoin de metttre le point devant la classe car on s'attend déjà à une classe*
  //   questionContainer.classList.remove("question-click"); // Pour retirer une classe
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  //   response.style.visibility = "visible";
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  //   response.style.visibility = "visible";
  response.classList.add("show-response");
  response.style.background = "red";
});

//-----------------------------------------------------------------
//   -> 58:20 ordre de priorité
// Ordre de priorité en CSS (+ vers -):
// ! important >> style dans <div> >> #id >> .class >> baliseHTML

//**** MOUSE EVENTS ***//

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

//*** MOUSE DOWN ***//
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid pink";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

//Mouse Enter -> quand la souris survole une zone (différent du hover)
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-----------------------------------------------------------------
//*** KEYPRESS ***//
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "green";
  } else if (e.key === "r") {
    keypressContainer.style.background = "yellow";
  } else {
    keypressContainer.style.background = "blue";
  }

  // ring(e.key);
});

//*** Effet sonore ***//
// const ring = (key) => {
//   const audio = new Audio();
//   audio.src = key + ".mp3";
//   audio.play();
// }
// ring(e.key);

//01:48:51 fin de effet sonore

//-----------------------------------------------------------------------
//*** SCROLL EVENTS ***//

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//---------------------------------------------------------------------
///*** INPUTS & FORM EVENTS ***//
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // pour empêcher le rechargement de la page

  // console.log(cgv.checked);

  if (cgv.checked) {
    // Affiche le contenu des variables
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo} </h3>
      <h4>Langage préféré : ${language} </h4>
      `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//---------------------------------------------------
// *** Load events ***//
window.addEventListener("load", () => {
  // console.log("document chargé");
});

//----------------------------------------------------
//*** FOR EACH ***//
// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//--------------------------------------------------
// 2 façons de faire des eventListeners ->
// addEventListener VS onClick (défaut du on-click: on ne peut déclarer qu'un seul event, il écrase les précédents si on fait plusieurs onClick successifs)

// document.body.onclick = function () {
//   console.log("Click!");
// };

// Bubbling => fin (de base l'eventListener est paramétré en mode bubbling)
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

// Usecapture => en début
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//----------------------------------------------------------
//*** STOP PROPAGATION ***//

// questionContainer.addEventListener("click", (e) => {
//   alert("Test!");
//   e.stopPropagation();
// });

//removeEventlistener -> cette méthode existe pour supprimer un écouteur d'events

//----------------------------------------------
//*** BOM : Browser object model ***//

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "cours js", "height=600");
// window.close();

// Evénements adossés à window
// -> alert("hello");
// -> confirm
// -> prompt

btn2.addEventListener("click", () => {
  confirm("Voulez-vous vraiment vous tromper?");
});

// let answer;

btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
  // += pour ne pas écraser tout ce qu'il y a avant
});

//*** TIMER, COMPTE A REBOURS ***//
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

let interval = setInterval(() => {
  document.body.innerHTML += `
  <div class='box'>
    <h2>Nouvelle box</h2>
  </div>
  `;
}, 5000);

// Pour stopper l'inerval (1er etape : contenir le setInterval dans une variable puis en dessous) et pour supprimer au click un élément de la page
document.body.addEventListener("click", (e) => {
  e.target.remove();
  clearInterval(interval);
});

// LOCATION
