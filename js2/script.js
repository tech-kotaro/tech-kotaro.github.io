$(function(){

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top ;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });  
    

  

    
      $('.question').click(function(){
        if($(this).hasClass('active')){
              $(this).removeClass('active');
              $(this).next().slideUp('slow');
        }else{
              $(this).addClass('active');
              $(this).next().slideDown('slow');
        }
      });
    
});
