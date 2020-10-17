$(function(){
    $('.slide2').click(function(){
        if($('.change-btn').hasClass('next-btn')){
            $('.push').eq(6).removeClass('none-active');
            //var $num=$('.slide').length-5;
            $('.push').eq(1).addClass('none-active');
        }/*else if($('.change-btn').hasClass('prev-btn') && $('.push').eq(1).hasClass('none-active')){
            $('.push').eq(1).removeClass('none-active');
            //var $num=$('.slide').length+5;
            $('.push').eq(6).addClass('none-active');
    }*/
    });   
    $('.prev').click(function(){
        if($('.push').eq(1).hasClass('none-active')){
            $('.push').eq(1).removeClass('none-active');
            //var $num=$('.slide').length+5;
            $('.push').eq(6).addClass('none-active');
        }
        
    })


    $('.about2').hover(
        function(){
            $('.first').slideDown();
    },
        function(){
            $('.first').css('display','none');
              
    });

    $('.product2').hover(
        function(){
            $('.second').slideDown();
    },
        function(){
            $('.second').css('display','none');
    });

    $('.sns2').hover(
        function(){
            $('.third').slideDown();
    },
        function(){
            $('.third').css('display','none');
    });


    $('.next2').click(function(){
        if($('.a5,.a6').hasClass('.none-active2')){
        $('.a5').removeClass('.none-active2');
        $('.a6').removeClass('.none-active2');
        $('.a1').addClass('.none-active2');
        $('.a2').addClass('.none-active2');
        }
    });
});
