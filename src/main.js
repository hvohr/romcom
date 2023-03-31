// Create variables targetting the relevant DOM elements here 👇
var showRandomCoverButton = document.querySelector('.random-cover-button');
var bookTitle = document.querySelector('.cover-title');
var bookCover = document.querySelector('.cover-image')
var bookTagline1 = document.querySelector('.tagline-1');
var bookTagline2 = document.querySelector('.tagline-2');

//Iteration 1 variables
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var savedCoverButton = document.querySelector('.view-saved-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewForm = document.querySelector('.form-view');
var viewHome = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');

makeYourOwnCoverButton.addEventListener('click', displayOwnCover);
savedCoverButton.addEventListener('click', viewSavedCover)

function displayOwnCover() {
console.log(makeYourOwnCoverButton);
  viewHome.classList.add('hidden');
  viewForm.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden')
}

function viewSavedCover() {
  viewHome.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  showRandomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewForm.classList.add('hidden');
}


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', makeRandomCover);
window.addEventListener('load', makeRandomCover);

// Create your event handlers and other functions here 👇 

function makeRandomCover() {
  var newCover = covers[getRandomIndex(covers)]
  var newTitle = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  var cover = createCover(newCover, newTitle, descriptor1, descriptor2)
  currentCover = cover
  showCover(cover)
}

function showCover(cover) {
  bookCover.src = cover.coverImg
  bookTitle.innerText = cover.title
  bookTagline1.innerText = cover.tagline1
  bookTagline2.innerText = cover.tagline2
}


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}


