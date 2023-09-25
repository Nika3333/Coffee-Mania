// Menu icon 

  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })


// See more

  const wrapperCards = document.getElementsByClassName('wrapper-cards')[0]
  const seeMore = document.getElementsByClassName('see-more')[0]
 

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

