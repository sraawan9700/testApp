// navbar
$(document).ready(function () {

    // Off Canvas
    'use strict'
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
    // Off Canvas End

    // Onscroll header color
    var header = $(".navbar");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
    // Onscroll header color End

    // navbar
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("newopen");
    })

    // Smooth scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 20;
        
        if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        }
    })
    
    })

});