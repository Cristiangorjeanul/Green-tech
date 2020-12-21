
document.addEventListener('DOMContentLoaded', function () {

  //Header Slide show
  const photos = document.querySelectorAll(".photo");
  let currentSlide = 0;
  const slideTimer = 2535;

  const changeSlides = () => {
    photos.forEach((photo) => photo.style.opacity = 0)

    if (currentSlide !== photos.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    photos[currentSlide].style.opacity = 1;
  };
  setInterval(changeSlides, slideTimer);

  //Button
  var button = document.querySelector('#button');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('#button span').innerText = counter;
    counter++;
  });


  // Events
  window.addEventListener('load', run);
  window.addEventListener('resize', run);
  window.addEventListener('scroll', run);

}); 