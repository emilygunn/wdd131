import characters from "./characterInfo.mjs";

// Character Accordions
function initAccortions() {
    const acc = document.getElementsByClassName('accordion');

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', (e) => {
            const accordion = e.currentTarget
            //toggeling "active" class
            accordion.classList.toggle('active');
            //hiding and showing panel
            const panel = accordion.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
            //Accordion Animation (slide down)
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        })
    }
};

// Render Characters

    // Character Template
function charTemplate(characters) {
    return `
    <article class="characters ${characters.colorClass}">
            <button class="accordion"><b>${characters.name}</b></button>
            <div class="panel">
                <div class="char-img-contain"><img class="char-img" src="${characters.image}" alt="${characters.imgAlt}"></div>
                <p>
                    <b>Name:</b> ${characters.nameDesc}<br><br>

                    <b>Race and Class:</b> ${characters.raceAndClass}<br><br>
                    
                    <b>Background:</b> ${characters.background}<br><br>
                    
                    <b>Alignment:</b> ${characters.alignment}<br><br>
                    
                    <b>Deity or Patron:</b> ${characters.dietyOrPatron}<br><br>
                
                    <b>Personality Traits:</b> ${characters.personality}<br><br>

                    <b>Motivation:</b> ${characters.motivation}<br><br>

                    <b>Appearance:</b> ${characters.appearance}<br><br>

                    <b>Fun Fact:</b> ${characters.funFact}<br><br>

                    <b>One-Liner (Optional): </b> ${characters.oneLiner}
                </p>
            </div>
        </article>
    `;
}
    //Sort Alphabetically
characters.sort((a,b) => {
    return a.name.localeCompare(b.name);
})
    //Rendering
function renderCharacters(charList) {
    // get element to output AFTER
    const outputTo = document.querySelector('main');
    // map the list
    const html = charList.map(charTemplate).join('');
    // Set the HTML after the element
    outputTo.insertAdjacentHTML('beforeend', html);
}
function initCharacters() {
    renderCharacters(characters);
    initAccortions();
}
initCharacters();

// Color Changes on Hover
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const footerP = document.querySelector('footer p');

    //Lilthet Colors
const lilColors = document.querySelector('.lil');

lilColors.addEventListener('mouseover', () => {
    header.style.backgroundColor = 'var(--lil-color1)';
    footer.style.backgroundColor = 'var(--lil-color1)';
    footerP.style.color = 'var(--secondary-color)';
})
lilColors.addEventListener('mouseout', () => {
    header.style.backgroundColor = '';
    footer.style.backgroundColor = '';
    footerP.style.color = '';
})
    //Cerein Colors
    const cerColors = document.querySelector('.cer');

    cerColors.addEventListener('mouseover', () => {
        header.style.backgroundColor = 'var(--cer-color1)';
        footer.style.backgroundColor = 'var(--cer-color1)';
        footerP.style.color = 'var(--secondary-color)';
    })
    cerColors.addEventListener('mouseout', () => {
        header.style.backgroundColor = '';
        footer.style.backgroundColor = '';
        footerP.style.color = '';
    })