$(document).ready(function(){

    /////Menu/////

    $('.menu-toggle').click(function() {
        $('.section-navigation').toggleClass('open');
        $('header').toggleClass('open');
    });

    /////////////
    

    /////main carousesl//////

    $('.main-carousel-theme').owlCarousel({

        items:1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });


    //////////////////////


    /////projects carousel/////

    $('.projects-theme').owlCarousel({

        responsive:{
            0: {
                items: 1
            },
            388: {
                items: 1.1
            },
            428: {
                items: 1.2
            },
            467: {
                items: 1.3
            },
            506: {
                items: 1.4
            },
            545: {
                items: 1.5
            },
            584: {
                items: 1.6
            },
            624: {
                items: 1.7
            },
            662: {
                items: 1.8
            },
            702: {
                items: 1.9
            },
            740: {
                items: 2
            },
            788: {
                items: 2.1
            },
            828: {
                items: 2.2
            },
            867: {
                items: 2.3
            },
            906: {
                items: 2.4
            },
            1045: {
                items: 2.5
            },
            1084: {
                items: 2.6
            },
            1124: {
                items: 2.7
            },
            1162: {
                items: 2.8
            },
            1202: {
                items: 2.9
            },
            1300: {
                items: 3.5
            },
            1400: {
                items: 4
            },
            1600: {
                items: 4.1
            },
            1880: {
                items: 4.8157
            },
        },
        margin: 3,
        loop:true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000
    });

    //////////////////////////


    /////tabs/////

    $('.tabs a:first').addClass('active');
    $('.tabs p').hide();
    $('.tabs p:first').show();

    $('.tabs a').click(function() {
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        $('.tabs p').hide();
       
        
        var activeTab = $(this).attr('href');
        $(activeTab).show();
    });

    //////////////

    /////button cleat/////

    $('#clear').click(function() {
        $('.input').val('');
    });

    /////////////////////

    /////twit carousel/////

    $('.twit-theme').owlCarousel({

        items:1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText:[$('.owl-navg .owl-nav-prevv'),$('.owl-navg .owl-nav-nextt')]
    });

    /////////////////////
});