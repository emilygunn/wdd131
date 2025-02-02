const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.menu');

//when menu clicked, hide or show nav
function toggleNav() {
    navMenu.classList.toggle('hide');
}

//button event listener on click
menuButton.addEventListener('click', toggleNav);

//window resize: add hide class whn larger than 1k px
function handleResize() {
    if (window.innerWidth >= 1000) {
        navMenu.classList.remove('hide');
    } else {
        navMenu.classList.add('hide');
    }
}

handleResize();
window.addEventListener('resize', handleResize);

function viewerTemplate(src, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img class="viewer-img" src="/assignments/coolpics/norris-full.jpeg" alt="full picture">
        </div>`;
}

function closeViewer(element) {
    element.remove;
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    clickedElement.getAttribute('src').split('-')
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    clickedElement.push('-full.jpeg')
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    clickedElement.insertAdjacentHTML('afterbegin', viewerTemplate)
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.getElementsByClassName('close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);

