import sessions from "./oocSessions.mjs";

// Session Acordions
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
    function renderSessions(sessionList) {
        // get element to output AFTER
        const outputTo = document.querySelector('main');
        // map the list
        const html = sessionList.map(sessionTemplate).join('');
        // Set the HTML strings as the innerHTML of our output element.
        outputTo.insertAdjacentHTML('beforeend', html);
    }
    function initSessions() {
        renderSessions(sessions);
        initAccortions();
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