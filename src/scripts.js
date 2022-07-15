import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData } from './data/recipes';
// import { raw } from 'file-loader';
import Recipe from '../src/classes/Recipe'
import { ingredientsData } from './data/ingredients';

const getRandomId = () => {return Math.floor(Math.random()) * 41 + 1}
const users = []
<<<<<<< HEAD

=======
const userId = getRandomId();
const recipeID = getRandomRecipe();
const user = new Users(usersData[2])
const recipe = new Recipe(recipeData[recipeID])
console.log('user: ', user)
>>>>>>> de03794cfead1db1035e997f8551a047bf44a057
// QuerySelectors
const allRecipesButton = document.querySelector('#recipe-button')
const favoriteButton = document.querySelector('#favorite-button')
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')
const radioSearchButton = document.querySelector('.radio-search-container')
const viewRecipeButton = document.querySelector('.view-recipe-button')
const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
const cardFavoriteButton = document.querySelector('.favorite-button')
const unFavoriteButton = document.querySelector('.un-favorite-button')
<<<<<<< HEAD
=======
const userGreeting = document.querySelector("#userName");
const recipeLocation = document.querySelector('#recipeName')
const recipeImage = document.querySelector('.heart')
const wholeImage = document.querySelector('.right-box')
const goBack = document.querySelector('.take-home')
const recipeCard = document.querySelector('.recipe-card')
const viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
>>>>>>> de03794cfead1db1035e997f8551a047bf44a057

// EventListeners
// favoriteButton.addEventListener('click',)
// cookbookButton.addEventListener('click',)
// radioSearchButton.addEventListener('click',)
// viewRecipeButton.addEventListener('click',)
// addToCookbookButton.addEventListener('click',)
// cardFavoriteButton.addEventListener('click',)
// unFavoriteButton.addEventListener('click',)
viewRecipeButtons.forEach((button) => {
  button.addEventListener('click', viewRecipeCard)
})

console.log('buttons:',viewRecipeButtons)

// Global Variables
let recipeRepo = new RecipeRepository(recipeData)
const newRecipe = new Recipe(ingredientsData)



function showAllRecipes() {
    const recipes = recipeRepo.createAllRecipes()
    console.log('recipe: ',recipes)

    recipes.forEach((recipe) => {
      recipeCard.innerHTML += `<button class="view-recipe-button"> <h2> ${recipe.name} </h2> 
      <img src=${recipe.image} alt=${recipe.name}>
      </button>`
    })

    hide(searchBar)
    // HERE we need to: recipeRepo.allRecipes append to main section of our app
    // want to loop through all recipes somehow, forEach/for loop
    // in order to get it to populate on the DOM
    // inner.HTML
    hide(favoriteButton)
    hide(cookbookButton)
    hide(cardFavoriteButton);
    hide(allRecipesButton);
    hide(addToCookbookButton);
    hide(unFavoriteButton);
    hide(wholeImage);
    show(goBack)
    console.log('IT WOEKS')
<<<<<<< HEAD
    var currentRecipe = new Recipe(data.id, data.image. data.name)
=======

    // HERE we need to: recipeRepo.allRecipes append to main section of our app
    // want to loop through all recipes somehow, forEach/for loop
    // in order to get it to populate on the DOM
    // inner.HTML

    //MAKE WHATS COOKING A TOGGLE SO IT CAN TAKE US BACK TO THE
    //TAKE HOME PAGE WHEN WE CLICK IT AFTER SHOWING ALL RECIPES
>>>>>>> de03794cfead1db1035e997f8551a047bf44a057
}
// function getRandomCoverPageLoad(event) {
//     var cover = covers[getRandomIndex(covers)]
//     var title = titles[getRandomIndex(titles)]
//     var descriptor1 = descriptors[getRandomIndex(descriptors)]
//     var descriptor2 = descriptors[getRandomIndex(descriptors)]
//     currentCover = new Cover(cover, title, descriptor1, descriptor2)
//     coverImage.src = currentCover.cover
//     coverTitle.innerText = currentCover.title
//     taglineOne.innerText = currentCover.tagline1
//     taglineTwo.innerText = currentCover.tagline2
//   }
//   getRandomCoverPageLoad()

allRecipesButton.addEventListener('click', showAllRecipes, console.log(recipeRepo.createAllRecipes()))

<<<<<<< HEAD
=======
// for each button we need to add a eventlistener and the call back in this recipe card to call back.
function viewRecipeCard() {
  console.log('hi')
  console.log(recipe.name)
}


const userBuildAttributes = (sumtine) => {
    userGreeting.innerHTML = `Welcome ${sumtine.name.split(" ")[0]}!`
    // recipeImage.src = `${recipe.image}`;
    //recipeLocation.innerHTML = `${recipe.name}`
};


>>>>>>> de03794cfead1db1035e997f8551a047bf44a057
function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
<<<<<<< HEAD
  element.classList.add('hidden');
}
=======
    element.classList.add('hidden');
};


allRecipesButton.addEventListener('click', showAllRecipes, console.log(recipeRepo.createAllRecipes()))
userBuildAttributes(user);
goBack.addEventListener('click', userBuildAttributes)
>>>>>>> de03794cfead1db1035e997f8551a047bf44a057
