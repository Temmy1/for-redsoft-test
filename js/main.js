var slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__slide");
  var dots = document.getElementsByClassName("slider__dot");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active";
}
function currentSlide(n) {
  showSlides(slideIndex = n);
};
