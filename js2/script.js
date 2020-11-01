$(function(){

    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top ;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });  
    

  

    
    $('.question').on('click', function () {
        /*クリックでコンテンツを開閉*/
        $('.answer').slideDown(200);
        /*矢印の向きを変更*/
        $(this).toggleClass('rotate');
      });
    $('.question-ttl').on('click', function () {
        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle(200);
        /*矢印の向きを変更*/
        $(this).toggleClass('rotate2');
      });
    
});
