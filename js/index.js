$(document).ready(function(){

  function smoothScroll() {
         $('#collapsibleNavbar a[href*="#"]').on('click', function (e) {
             e.preventDefault();
             $('html, body').animate({
                 scrollTop: $($(this).attr('href')).offset().top - 60
             }, 500, 'linear');
         });
     };
    smoothScroll();
  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
         Counter: $(this).text()
    }, {
          duration: 10000,
         easing: 'swing',
         step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

});
