// navbar
const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar-button');

function toggleClass() {
  navbar.classList.toggle('showed-hidden-navbar');
}
navbarButton.onclick = toggleClass;
navbarButton.onblur = toggleClass;



// appearance
const cards = document.querySelectorAll(".card");
const languages = document.querySelectorAll(".language");

cards.forEach((card, idx) => {
  card.addEventListener("mouseover", () => {
    cards[idx].style.animation =
      "move .4s ease-in-out 0s forwards normal running";
  });

  card.addEventListener("mouseout", () => {
    cards[idx].style.animation =
      "comeBack .4s ease-in-out 0s forwards normal running";
  });
});


languages.forEach((lan) => {
  lan.addEventListener("mouseover", () => {
    lan.style.animation = "zoomInLanguage .3s ease-in-out 1 normal forwards";
  });

  lan.addEventListener("mouseout", () => {
    lan.style.animation = "zoomOutLanguage .3s ease-in-out 1 normal forwards";
  });
});



// copy button in .card

function showMessage(content) {
  let message = document.createElement("section");
  message.setAttribute("class", "message");
  message.textContent = content;
  document.body.appendChild(message);
  setTimeout(() => {
    message.style.animation = "show .4s ease-in-out 0s normal forwards";
  }, 0);
  setTimeout(() => {
    message.style.animation = "hide .4s ease-in-out 0s normal forwards";
  }, 1000);
  setTimeout(() => {
    document.body.removeChild(message);
  }, 2000);
}

window.copyToClipboard = (content) => {
  navigator.clipboard.writeText(content);
  showMessage("Copied!");
};



// date in  footer
document.querySelector(".date").textContent = new Date().getFullYear();