$(document).ready(function(){

    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },{  offset:'80px;'}
                                  );

    /*Scroll*/
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });

     $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

     /*Navigation scroll */
    $('.js--scroll-to-feature').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

     $('.js--scroll-to-cities').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top},1000);
    });

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });

    $('.js--scroll-to-works').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-works').offset().top},1000);
    });


    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
     $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
     $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
     $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--nav-icon').click(function(){
    var nav= $('.js--main-nav');
        var icon =$('.js--nav-icon ion-icon');
        nav.slideToggle(200);
        if(icon.hasClass('menu-outline')){
            icon.addClass('close-outline');
            icon.removeClass('menu-outline')
        }else{
             icon.addClass('menu-outline')
            icon.removeClass('close-outline')
        }

});
});















