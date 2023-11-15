// Consts
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const wrapperCards = document.getElementsByClassName('wrapper-cards')[0]
const seeMore = document.getElementsByClassName('see-more')[0]

// Menu icon 

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// See more

seeMore.addEventListener('click', () =>  {
wrapperCards.classList.toggle('active')

  // See more text changer
  
    if (seeMore.innerHTML === 'See More') {
      seeMore.innerHTML = 'Hide';
      return;
    } else {
      seeMore.innerHTML = 'See More'
    }
    
})

// More button toggle 

seeMore.onclick = function myFunction() {
  const moreButton = document.getElementsByClassName('more')[0]
  if (moreButton.style.display === "block") {
    moreButton.style.display = "none";
  } else {
    moreButton.style.display = "block";
  }
}





