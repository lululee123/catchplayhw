//web warn
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var sidebtn = document.getElementById("sidemenu__warn-btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

sidebtn.onclick = function() {
    modal.style.display = "block";
}

//mobile warn
var sidemenu__modal = document.getElementById('sidemenu__myModal');
var sidemenu__btn = document.getElementById("sidemenu");
var sidemenu__span = document.getElementsByClassName("sidemenu__close")[0];
sidemenu__btn.onclick = function() {
    sidemenu__modal.style.display = "block";
}
sidemenu__span.onclick = function() {
    sidemenu__modal.style.display = "none";
}

//btn
$('.button__watch').click(function(){
  $('html,body').animate({scrollTop:$('.downtitle').offset().top},800);
});

//slider
$('.center').slick({
    centerMode: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '6em',
          slidesToShow: 1, 
        }
      }, 
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '2em',
          slidesToShow: 1, 
        }
      }
    ]
  });
 