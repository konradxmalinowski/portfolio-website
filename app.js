// menu
const navbarMenu = document.querySelectorAll('.navbar');
const navbarButtons = document.querySelectorAll('.navbar-button');

function hideNavbar() {
  navbarMenu.forEach((navbar) => {
    navbar.classList.add('hidden-navbar');
    navbar.style.display = 'none';
  });
}

window.addEventListener('resize', () => {
  hideNavbar();
});

hideNavbar();

function toggleClass() {
  navbarMenu.forEach((navbar) => {
    let isClass = navbar.classList.contains('shown-navbar');

    if (isClass) {
      setTimeout(() => {
        navbar.classList.add('hidden-navbar');
        navbar.classList.remove('shown-navbar');
      }, 0);

      setTimeout(() => {
        navbar.style.display = 'none';
      }, 750);
    } else {
      setTimeout(() => {
        navbar.classList.add('shown-navbar');
        navbar.classList.remove('hidden-navbar');
      }, 0);

      setTimeout(() => {
        navbar.style.display = 'block';
      }, 750);
    }
  });
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// change language
const langSets = document.querySelectorAll('.lang-set');
const langlistMenu = document.querySelectorAll('.lang-list');
const arrowDown = document.querySelector('img[alt="arrow-down"]');
const langlist = document.querySelectorAll('.lang-list span');

function toggleLang() {
  langlistMenu.forEach((langlist) => {
    if (window.getComputedStyle(langlist).display === 'none') {
      langlist.style.display = 'block';
    } else {
      langlist.style.display = 'none';
    }
  });

  if (window.getComputedStyle(arrowDown).rotate === '0deg') {
    arrowDown.style.animation = 'rotate1 .5s ease-in-out 0s normal forwards';
  }

  if (window.getComputedStyle(arrowDown).rotate === '180deg') {
    arrowDown.style.animation = 'rotate2 .5s ease-in-out 0s normal forwards';
  }
}

// change language switch
langSets.forEach((langSet) => {
  langSet.onclick = toggleLang;
});

navbarButtons.forEach((navbarButton) => {
  navbarButton.onclick = toggleClass;
});

langlist.forEach((lang, idx) => {
  lang.onclick = () => {
    changeLanguage(idx);
  }
});


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// copy to clipboard
const links = [
  'https://portfolio-website.ct8.pl/websites/text-statistics',
  'https://portfolio-website.ct8.pl/websites/converter',
  'https://portfolio-website.ct8.pl/websites/exam-test/'
];
const copyButtons = document.querySelectorAll('.card__items .card__button:nth-of-type(2)');
console.log(copyButtons);

function handleCopyButtonClick() {
  document.addEventListener('click', (event) => {
    let index = [...copyButtons].indexOf(event.target);
    if (index != -1) {
      copyLink(links[index]);
    }
  });
}

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

function copyLink(link) {
  navigator.clipboard.writeText(link);
  let messageValue = 'Copied!';

  if (browserDefaultLanguage.includes('pl')) {
    messageValue = 'Skopiowano';
  }

  showMessage(messageValue);
}

handleCopyButtonClick();

// date in footer
document.querySelector(".date").textContent = new Date().getFullYear();