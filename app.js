// navbar
const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar-button');

function toggleClass() {
  setTimeout(() => {
    navbar.classList.toggle('showed-hidden-navbar');
  }, 0);

  let isClass;

  setTimeout(() => {
    isClass = (navbar.classList.contains('showed-hidden-navbar')) ? true : false;
  }, 0)

  if (isClass) {
    setTimeout(() => {
      navbar.style.visibility = 'hidden'
    }, 700);
  }

}
navbarButton.onclick = toggleClass;
navbarButton.onblur = toggleClass;


// author animation
const pTag = document.querySelector('#text-wrapper>p:nth-child(1)');

if (parseInt(window.getComputedStyle(document.body).width.slice(0, -2)) > 854) {
  window.addEventListener('DOMContentLoaded', () => {
    pTag.style.animation = 'typingAnimation 3s cubic-bezier(0.6, 0, 0.4, 1) 0s 1 normal forwards running';
  });
}

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