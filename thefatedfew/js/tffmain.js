import sessions from "./oocSessions.mjs";
import characters from "./characterInfo.mjs";

// Character Accordions
document.addEventListener("DOMContentLoaded", () => {
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
});

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

                    <b>One-Liner: (Optional)</b> ${characters.oneLiner}
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
        const outputTo = document.querySelector('.odyess-char-h3');
        // map the list
        const html = charList.map(charTemplate).join('');
        // Set the HTML after the element
        outputTo.insertAdjacentHTML('afterend', html);
    }
    function initCharacters() {
        renderCharacters(characters);
    }
    initCharacters();

// Color Changes on Hover
const header = document.querySelector('header');
const footer = document.querySelector('footer');

    //Lilthet Colors
const lilColors = document.querySelector('.lil');

lilColors.addEventListener('mouseover', () => {
    header.style.backgroundColor = 'var(--lil-color1)';
    footer.style.backgroundColor = 'var(--lil-color1)';
})
lilColors.addEventListener('mouseout', () => {
    header.style.backgroundColor = '';
    footer.style.backgroundColor = '';
})

// Session Record Accordions and Searching

    //Template
function sessionTemplate(sessions) { 
    return `
        <article class="sessions s${sessions.season}">
        <button class="accordion"><b>Season ${sessions.season} - ${sessions.date}</b> - ${sessions.title}</button>
        <div class="panel">
            <p>
                <b>Session Recap:</b><br><br>
                ${sessions.recap}
                <em>-	From the Journal of ${sessions.author}</em>
            </p>
        </div>
        </article>`;}

    //Rendering
function getRandomIndex(maxNum) {
    return Math.floor(Math.random()*maxNum);
}
function getRandomListEntry(list) {
    const randomNum = getRandomIndex(list.length);
    return list[randomNum];
}
function renderSessions(sessionList) {
	// get element to output AFTER
    const outputTo = document.querySelector('.hr1');
	// Set the HTML strings as the innerHTML of our output element.
    outputTo.insertAdjacentHTML('afterend', sessionTemplate(sessionList));
}
function initSessions() {
    // get a random session
    const session = getRandomListEntry(sessions)
    // render
    renderSessions([session]);
}
initSessions();

    //Searching
function searchHandler(event) {
    event.preventDefault();
    const input = document.querySelector('.search').value.toLowerCase();
    filterSessions(input);
}

function filterSessions(query) {
    function searchCallback(item) {
        return item.season.toLowerCase().includes(query.toLowerCase())
        || item.date.toLowerCase().includes(query.toLowerCase())
        || item.title.toLowerCase().includes(query.toLowerCase())
        || item.author.toLowerCase().includes(query.toLowerCase())
        || item.recap.toLowerCase().includes(query.toLowerCase())
    }
    return recipes.filter(searchCallback);
}

sessions.sort((a,b) => {
    return a.date - b.date;
})

document.querySelector('.search').addEventListener('click', searchHandler);