
  // Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

  /* Slideshow */
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    const slides = document.getElementsByClassName('slides');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }
  