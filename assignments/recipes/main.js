import recipes from "./recipes.mjs";
// console.log('Recipies imported:', recipes); //pass check

function getRandomIndex(maxNum) {
    return Math.floor(Math.random()*maxNum);
}
// alert(getRandomIndex(recipes.length));

function getRandomListEntry(list) {
    // console.log('getRandomListEntry recieved:', list); //pass check

    const randomNum = getRandomIndex(list.length);
    // console.log('Randomly selected index:', randomNum); //pass check
    // console.log('Randomly selected recipe:', list[randomNum]); //pass check
    return list[randomNum];
}
// console.log(getRandomListEntry(recipes))

function tagsTemplate(tags) {
    console.log('tagsTemplate recieved:', tags); //fail check: returning as undefined

    if (!Array.isArray(tags) || tags.length === 0) {
        console.error('Error: Invalid tags', tags);
        return `<div class="tag-row"></div>`; // Return an empty row if no valid tags
    }

    let html = `<div class="tag-row">`;
    // loop through the tags list and transform the strings to HTML
    for (let i = 0; i < tags.length; i++) {
        html += `<span class="tag">${tags[i]}</span>`
    }
    html += `</div>`;
    return html;
}

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let n = 0; n < 5; n++) {
		// check to see if the current index of the loop is less than our rating
        // if so then output a filled star
        if (n < recipes.rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else { // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function recipeTemplate(recipe) { //loop array of tags, change info
    // console.log('recipeTemplate recieved:', recipe); //passes check
    // console.log('recipe.tags:', recipe.tags); //passes check
    
    const tags = Array.isArray(recipe.tags) ? recipe.tags : [];

    return `
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.description}">
            <div class="recipe-info">
                ${tagsTemplate(tags)}
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>`;
}
// const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    // console.log('renderRecipies recieved:', recipeList); //passes check

	// get the element we will output the recipes into
    const outputTo = document.querySelector('.recipe');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const html = recipeTemplate(recipeList);
	// Set the HTML strings as the innerHTML of our output element.
    outputTo.innerHTML = html;
}

function init() {
  // get a random recipe
    const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}
// //test
// console.log('recipies loaded:', recipes)
init();

function searchHandler(event) {
    event.preventDefault();
    const input = document.querySelector('.search').value.toLowerCase();
    filterRecipes(input);
}

function filterRecipes(query) {
    function searchCallback(item) {
        return item.name.toLowerCase().includes(query.toLowerCase())
        || item.description.toLowerCase().includes(query.toLowerCase())
        || item.tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        || item.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(query.toLowerCase()));
    }
    return recipes.filter(searchCallback);
}

recipes.sort((a,b) => {
    return a.name - b.name;
})

document.querySelector('.search').addEventListener('click', searchHandler);