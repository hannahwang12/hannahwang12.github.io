$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      event.stopPropagation();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});

function openProjectsTab(e, tabName) {
  var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).className += " active";
    e.currentTarget.className += " active";
}

function openAVModal() {
	document.getElementById('AVModal').style.display = "block";
}

function closeAVModal() {
	document.getElementById('AVModal').style.display = "none";
}

function openRestarantModal() {
	document.getElementById('restarantModal').style.display = "block";
}

function closeRestarantModal() {
	document.getElementById('restarantModal').style.display = "none";
}

function openClaireModal() {
	document.getElementById('claireModal').style.display = "block";
}

function closeClaireModal() {
	document.getElementById('claireModal').style.display = "none";
}

function openLiftModal() {
	document.getElementById('liftModal').style.display = "block";
}

function closeLiftModal() {
	document.getElementById('liftModal').style.display = "none";
}

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var claireSlideIndex = 1;
showClaireSlides(claireSlideIndex);

// Next/previous controls
function plusClaireSlides(n) {
  showClaireSlides(claireSlideIndex += n);

}

function showClaireSlides(n) {
  console.log(n)
  var i;
  var slides = document.getElementsByClassName("claireSlides");
  var dots = document.getElementsByClassName("claireSlides");
  if (n > slides.length) {claireSlideIndex = 1}
  if (n < 1) {claireSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[claireSlideIndex-1].style.display = "block";
  dots[claireSlideIndex-1].className += " active";
}

var liftSlideIndex = 1;
showLiftSlides(liftSlideIndex);

// Next/previous controls
function plusLiftSlides(n) {
  showLiftSlides(liftSlideIndex += n);

}

function showLiftSlides(n) {
  console.log(n)
  var i;
  var slides = document.getElementsByClassName("liftSlides");
  var dots = document.getElementsByClassName("liftSlides");
  if (n > slides.length) {liftSlideIndex = 1}
  if (n < 1) {liftSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[liftSlideIndex-1].style.display = "block";
  dots[liftSlideIndex-1].className += " active";
}