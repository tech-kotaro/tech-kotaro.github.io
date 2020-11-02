$(function(){
    $('.slide').click(function(){
        if($('.menu_wrapper').hasClass('active')){
            $('.menu_wrapper').removeClass('active');
            $('.menu_wrapper').slideUp('slow');
        }else{
            $('.menu_wrapper').addClass('active');
            $('.menu_wrapper').slideDown('slow');
        }
    })
    
    /*$('.fa-bars').click(function(){
        if($('.slide').hasClass('active')){
            $('.slide').removeClass('active');
            $('.res_menu').slideUp();
        }else{
            $('.slide').addClass('active');
            $('.res_menu').slideDown('slow');
        }
    })
    */
   $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
        scrollTop:position}, speed, "swing");
    return false;
  });  
    
    
});