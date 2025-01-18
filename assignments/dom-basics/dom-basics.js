const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute('src','https://picsum.photos/200');
newImg.setAttribute('alt','Random image. piscum.');
document.body.appendChild(newImg);

const newSec = document.createElement('section');
newSec.innerHTML = '<h2>DOM Basics</h2><p>This was added through Javascript</p>';
document.body.appendChild(newSec);