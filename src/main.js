var showRandomCoverButton = document.querySelector('.random-cover-button');
var bookTitle = document.querySelector('.cover-title');
var bookCover = document.querySelector('.cover-image')
var bookTagline1 = document.querySelector('.tagline-1');
var bookTagline2 = document.querySelector('.tagline-2');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var viewSaveCoverButton = document.querySelector('.view-saved-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewForm = document.querySelector('.form-view');
var viewHome = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var createNewBookButton = document.querySelector('.create-new-book-button');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDescription1 = document.querySelector('.user-desc1');
var userDescription2 = document.querySelector('.user-desc2');
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedCovers = [];
var currentCover;

makeYourOwnCoverButton.addEventListener('click', displayOwnCover);
viewSaveCoverButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', displayHome);
createNewBookButton.addEventListener('click', createNewBook);
saveCoverButton.addEventListener('click', saveCurrentCover);
savedCoversSection.addEventListener('dblclick', deleteSavedCover);
showRandomCoverButton.addEventListener('click', makeRandomCover);
window.addEventListener('load', makeRandomCover);

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

function displayOwnCover() {
  hide(viewHome);
  show(viewForm);
  hide(showRandomCoverButton);
  hide(saveCoverButton);
  show(homeButton);
  hide(savedView);
};

function viewSavedCovers() {
  hide(viewHome);
  hide(saveCoverButton);
  hide(showRandomCoverButton);
  show(homeButton);
  hide(viewForm);
  show(savedView);
  displaySavedCovers();
};

function displayHome() {  
  show(viewHome);
  hide(viewForm);
  show(showRandomCoverButton);
  show(saveCoverButton);
  show(homeButton);
  hide(homeButton);
  show(makeYourOwnCoverButton);
};

function createNewBook() {
  event.preventDefault();
  var inputCover = userCover.value;
  var inputTitle = userTitle.value;
  var inputDescription1 = userDescription1.value;
  var inputDescription2 = userDescription2.value;
  covers.push(inputCover);
  descriptors.push(inputDescription1, inputDescription2);
  titles.push(inputTitle);
  
  var cover = createCover(inputCover, inputTitle, inputDescription1, inputDescription2);
  currentCover = cover
  showCover(cover);
  
  displayHome();
};

function makeRandomCover() {
  var newCover = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var descriptor1 = descriptors[getRandomIndex(descriptors)];
  var descriptor2 = descriptors[getRandomIndex(descriptors)];
  var cover = createCover(newCover, newTitle, descriptor1, descriptor2);
  currentCover = cover;
  showCover(cover);
};

function showCover(cover) {
  bookCover.src = cover.coverImg;
  bookTitle.innerText = cover.title;
  bookTagline1.innerText = cover.tagline1;
  bookTagline2.innerText = cover.tagline2;
};

function saveCurrentCover() {
 var match = false;
  for (var i = 0; i < savedCovers.length; i++) {
  var cover = savedCovers[i]
  if (cover.id === currentCover.id) {
   match = true
  }
 }
 if (match === false) {
  savedCovers.push(currentCover);
 }
};

function displaySavedCovers() {
  savedCoversSection.innerHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
    console.log(savedCovers[i])
    savedCoversSection.innerHTML += `
    <section class="mini-cover" id="${savedCovers[i].id}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <img class="cover-image" src="${savedCovers[i].coverImg}">
      <h3 class="tagline"> A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>
    `
  }
};

function deleteSavedCover(e) {
  for (var i = 0; i <savedCovers.length; i++) {
      if (parseInt(e.target.closest('section').id) === savedCovers[i].id) {
        savedCovers.splice(i, 1);
      }
  }
      displaySavedCovers();
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover;
};
