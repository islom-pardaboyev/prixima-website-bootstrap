$(document).ready(function(){
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText : ['PREV', 'NEXT'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                
            },
            768: {
                
            },
            144:{

            }
        }
    })

    // project slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin: 24,
        nav:true,
        items: 1,
        dots: true,
        smartSpeed: 1000,
        navText : ['PREV', 'NEXT'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,  
                nav: false, 
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140:{
                items: 2,
                center: true,
            }
        }
    })
})