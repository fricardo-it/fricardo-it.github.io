(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

// BACK TO TOP
$(document).ready(function() {
    var btn = $('#back-to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // Smooth scroll for the links
    $('.navbar a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500);
    });

    // Close responsive menu when a scroll trigger link is clicked
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navbarNav',
        offset: 100
    });
});

// PROJECT
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as miniaturas dos projetos
    const thumbnails = document.querySelectorAll('.project-thumbnails img');
  
    // Adiciona um ouvinte de evento de clique a cada miniatura
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            // Obtém o índice do slide associado à miniatura
            const slideIndex = parseInt(thumbnail.getAttribute('data-slide-to'));
  
            // Atualiza o carrossel para exibir o slide correspondente
            $('#carouselExample').carousel(slideIndex);
        });
    });
  });