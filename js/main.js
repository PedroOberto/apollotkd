$(document).ready(function() {
    // Menu
    $('.menu-anchor').on('click touchstart', function(e) {
        $('.conteudo_menu').toggleClass('expandir_menu');
        e.preventDefault();
    });    
   	$('main').on('click touchstart', function(e) {
		if($(".conteudo_menu").hasClass("expandir_menu")){			
			$('.conteudo_menu').removeClass('expandir_menu');
			e.preventDefault();
		}
	});
    
    //Esconde preloader
    $(window).load(function(){
        $('#preloader').fadeOut(1500);//1500 é a duração do efeito (1.5 seg)        
    });
});

$('.menu a[href^="#"], .nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 0
	}, 500);
    $('.conteudo_menu').removeClass('expandir_menu');
});
// Menu Scroll
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.header')
      .css({
        'background-color': '#000'
      });
  } else {
    $('.header')
      .css({
        'background-color': ''
      });
  }
});
//Carrosel Dojos
$(".rslides_dojo").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 1500,            // Integer: Speed of the transition, in milliseconds
  timeout: 8000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,          // Boolean: Show pager, true or false
  pause: true,           // Boolean: Pause on hover, true or false 
});

Visibility.onVisible(function(){
    setTimeout(function(){
        $(".anime_section").addClass("animated bounceInLeft");
    },900);
});