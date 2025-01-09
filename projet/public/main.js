document.addEventListener('DOMContentLoaded', (event) => {

  console.log('ok');
  //affiche les liens une fois cliqué sur le bouton burger et modifie  l'affichage de l'icone burger
  let isActive = false
  const navbar = document.querySelector('.nav-links')
  const menuButton = document.getElementById('burger-menu')

  menuButton.addEventListener("click", () => {
    if (isActive === false) {
      navbar.classList.add("active")
      menuButton.classList.add("open")
      isActive = true
    } else {
      navbar.classList.remove("active")
      menuButton.classList.remove("open")
      isActive = false
    }
  })

  // FORMULAIRE DE RECHERCHE **************************************************

  // const form = document.querySelector('.search-form');
  // const hero = document.querySelector('.hero');
  // const vehicleTypeInputs = document.querySelectorAll('input[name="vehicle-type"]');

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const vehicleType = document.querySelector('input[name="vehicle-type"]:checked').value;
  //   const location = document.querySelector('input[type="text"]').value;
  //   const startDate = document.querySelector('input[type="date"]:nth-of-type(1)').value;
  //   const endDate = document.querySelector('input[type="date"]:nth-of-type(2)').value;

  //   alert(`Recherche de ${vehicleType} à ${location} du ${startDate} au ${endDate}`);
  //   // Ici, vous pouvez ajouter la logique pour envoyer ces données à votre backend
  // });

  // vehicleTypeInputs.forEach(input => {
  //   input.addEventListener('change', (e) => {
  //     const vehicleType = e.target.value;
  //     if (vehicleType === 'van') {
  //       hero.style.backgroundImage = 'url("https://source.unsplash.com/random/1920x1080/?van-nature")';
  //     } else {
  //       hero.style.backgroundImage = 'url("https://source.unsplash.com/random/1920x1080/?campervan-nature")';
  //     }
  //   });
  // });

  // // Animation smooth scroll pour les liens de navigation
  // document.querySelectorAll('nav a').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     const href = this.getAttribute('href');
  //     if (href.startsWith('/')) {
  //       document.querySelector(href).scrollIntoView({
  //         behavior: 'smooth'
  //       });
  //     }
  //   });
  // });

  // Effet parallax pour l'image de fond
  // window.addEventListener('scroll', () => {
  //   const scrolled = window.pageYOffset;
  //   hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
  // });

  // // Animation pour le slider de témoignages
  // const testimonialSlider = document.querySelector('.testimonial-slider');
  // let isDown = false;
  // let startX;
  // let scrollLeft;

  // testimonialSlider.addEventListener('mousedown', (e) => {
  //   isDown = true;
  //   startX = e.pageX - testimonialSlider.offsetLeft;
  //   scrollLeft = testimonialSlider.scrollLeft;
  // });

  // testimonialSlider.addEventListener('mouseleave', () => {
  //   isDown = false;
  // });

  // testimonialSlider.addEventListener('mouseup', () => {
  //   isDown = false;
  // });

  // testimonialSlider.addEventListener('mousemove', (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - testimonialSlider.offsetLeft;
  //   const walk = (x - startX) * 3;
  //   testimonialSlider.scrollLeft = scrollLeft - walk;
  // });

  //     ************************************************
  // CODE POUR SLIDER
  //  ***************************************************

  const slider = document.querySelector('.vehicle-slider');
  const leftArrow = document.querySelector('.slider-arrow.left');
  const rightArrow = document.querySelector('.slider-arrow.right');
  let currentIndex = 0;
  const cardWidth = document.querySelector('.vehicle-slider .vehicle-card').offsetWidth;
  const visibleCards = 1;

  function updateSliderPosition() {
    console.log('ok je tourne')
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  leftArrow.addEventListener('click', () => {
    console.log('ok je reviens')
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  rightArrow.addEventListener('click', () => {
    console.log('ok javance')
    if (currentIndex < slider.children.length - visibleCards) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  

});