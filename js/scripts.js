/* set logo and background images according to mobile or not */
function setMobileContent(){
    if ($('#mobile-detect').is(':visible')) {
        $('#logo').attr('src', 'images/logo-mobile.png');
        $('#logo').removeClass('logo-margin');
        $('#section1').removeClass('bg-1');
        $('#section3').removeClass('bg-3');
        $('header').removeClass('desktop');
    } else {
        if($('body').hasClass('home')) {
            // homepage
            $('#logo').attr('src', 'images/logo.png');
            $('#logo').addClass('logo-margin');
            $('#section1').addClass('bg-1');
            $('#section3').addClass('bg-3');
            $('header').addClass('desktop');
        }
    }
}

$(document).ready(function(){

    setMobileContent();
/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})

});
$(window).resize(function(){
    setMobileContent();
}); 