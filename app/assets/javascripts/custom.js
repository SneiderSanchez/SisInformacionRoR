
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: '../images/rob-bye-325768-unsplash.jpg' },        
            { src: '../images/eliabe-costa-702725-unsplash.jpg' },
            { src: '../images/scott-webb-270034-unsplash.jpg' },
            { src: '../images/kinga-cichewicz-594504-unsplash.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });


   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

