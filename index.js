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
