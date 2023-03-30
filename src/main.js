// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var bookTitle = document.querySelection('.cover-title');
var bookCover = document.querySelection('.cover-image')
var bookTagline1 = document.querySelection('.tagline-1');
var bookTagline2 = document.querySelection('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇

randomCoverButton.addEventListeners('click', changeRandomCover);
window.randomCoverButton.addEventListeners('load', changeRandomCover);

// Create your event handlers and other functions here 👇

function makeRandomCover() {
  
}


currentCover = 

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
