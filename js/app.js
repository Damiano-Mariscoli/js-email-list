/*
Descrizione
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)
*/

const url = "https://flynn.boolean.careers/exercises/api/random/mail";
const btn = document.getElementById("btn");
const emailCard = document.getElementById("main-container");

btn.addEventListener("click", function () {
  emailCard.innerHTML = "";
  const col = document.createElement("div");
  col.classList.add("col-4", "mt-5");

  for (let i = 0; i < 10; i++) {
    fetch(url)
      .then((email) => {
        return email.json();
      })
      .then((obj) => {
        const emailText = document.createElement("p");
        emailText.textContent = obj.response;
        col.appendChild(emailText);
        console.log(obj.response)
      })
      .catch((err) => {
        console.log("errore", err);
      });
  }
  emailCard.appendChild(col);
});

