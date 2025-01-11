const anchors = document.querySelectorAll('.anchors-right a');
const spans = document.querySelectorAll('#text-wrapper p span');
const projectTitles = document.querySelectorAll('main h1 span, main p');
const cardHeadings = document.querySelectorAll('.card h3');
const cardDescriptions = document.querySelectorAll('.card p');
const showButtons = document.querySelectorAll('.card button > a');
const copyButtons = document.querySelectorAll('.card button:nth-last-child(1)');
const skillsHeading = document.querySelector('.skills-wrapper > h1');
const experienceLevels = document.querySelectorAll('.language span');
const ratings = document.querySelectorAll('.rating-section h1, .rating-section p, .rating-section button a');
const footerLinks = document.querySelectorAll('.rwrapper a');

async function fetchLanguages(lang) {
    try {
        const response = await fetch(`lang-${lang}.json`);
        if (!response.ok) throw new Error('Error while fetching data');

        const content = await response.json();
        anchors.forEach((anchor, index) => {
            anchor.textContent = content.header.anchors.right[index];
        });

        spans.forEach((span, index) => {
            if (index < content.heroSection.author.length) {
                span.textContent = content.heroSection.author[index];
            }
        });

        projectTitles[0].textContent = content.projects[0][0];
        projectTitles[1].textContent = content.projects[0][1];
        projectTitles[2].textContent = content.projects[0][2];

        cardHeadings.forEach((heading, index) => {
            heading.textContent = content.projects[index + 2].title;
        });

        cardDescriptions.forEach((description, index) => {
            description.textContent = content.projects[index + 2].description;
        });

        showButtons.forEach(button => {
            button.textContent = content.projects[1][0];
        });

        copyButtons.forEach(button => {
            button.textContent = content.projects[1][1];
        });

        skillsHeading.textContent = content.skillsHeading;

        experienceLevels.forEach((level, index) => {
            level.textContent = content.skills[index < 5 ? 0 : 1];
        });

        ratings[0].textContent = content.ratings.prompt;
        ratings[1].textContent = content.ratings.content;
        ratings[2].textContent = content.ratings.buttonText;

        footerLinks[0].textContent = content.footer.terms;
        footerLinks[1].textContent = content.footer.privacy;

        console.clear();

    } catch (error) {
        console.error(error);
    }
}

let language;

window.addEventListener('DOMContentLoaded', async () => {
    const browserLang = navigator.language.includes('pl') ? 'pl' : 'en';
    await fetchLanguages(browserLang);
    language = browserLang;
});

const switchToENButton = document.querySelector('#switchToENButton');
const switchToPLButton = document.querySelector('#switchToPLButton');

switchToENButton.onclick = async () => {
    await fetchLanguages('en');
    language = 'en';
};

switchToPLButton.onclick = async () => {
    await fetchLanguages('pl');
    language = 'pl';
};
