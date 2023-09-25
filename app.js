// Menu icon 

  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })


// See more

  const wrapperCards = document.querySelector('.wrapper-cards')
  const seeMore = document.querySelector('.see-more')

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

