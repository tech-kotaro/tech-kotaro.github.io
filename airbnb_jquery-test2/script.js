$(function(){
    /*簡単な説明
    画像の切り替えはactiveをつけ外す処理で行っています。
    */

    /*return falseは必須です*/
    /*一枚目のコンテンツをクリック*/
    $('.img').click(function(){
        var Index = $('a').index(this);
        $('.slide').eq(Index).addClass('active');
        $('#content').css('display','none');
        $('#content3').css('display','block');
        $('#content3').addClass('animation3');
        $('#content3').removeClass('animation4');
        var slideNumber1 = parseInt(Index) + 1;
        console.log(slideNumber1);
        document.getElementById('num').innerHTML= slideNumber1+'/5';
        //33にしたい場合は5を33に付け替えてください.
        if(Index != 0){
            $('.prev-btn').show();
        }else{
            $('.prev-btn').hide();   
        }
        return false;
    });

    /*二枚目のコンテンツ左上<をクリック*/
    $('.return').click(function(){
        $('#content2').removeClass('animation');
        $('#content2').addClass('animation2');
        $('#content2').css('display','none');
        $('#content').css('display','block');
        return false;
    })

    /*<と>ボタンクリックで画像切り替え*/
    $('.change-btn').click(function(){
        var $active = $('.active');
        $active.removeClass('active');
        if($(this).hasClass('prev-btn')){
            $active.prev().addClass('active');
        }else{
            $active.next().addClass('active');
        }
        var slideIndex = $('.slide').index($('.active'));
        $('.prev-btn').show();
        $('.change-btn').show();
        if(slideIndex == 4){
            $('.next-btn').hide();
        }else if(slideIndex == 0){
            $('.prev-btn').hide();
        }   

        var slideNumber2 =  parseInt(slideIndex) + 1;
        document.getElementById('num').innerHTML = slideNumber2+'/5';
        //33にしたい場合は5を33に付け替えてください！
        return false;
    });

    /*二枚目のコンテンツクリック*/
    $('.img2').click(function(){
        var Index2 = $('a').index(this);
        var Index2 = Index2 -5
        //インデックスがIndex+5加算されてしまうで、-5引いています。
        $('.slide').eq(Index2).addClass('active');
        $('#content2').css('display','none');
        $('#content3').css('display','block');
        $('#content3').addClass('animation3');
        $('#content3').removeClass('animation4');
        var slideNumber3 = parseInt(Index2) + 1;
        document.getElementById('num').innerHTML= slideNumber3 +'/5';
        if(Index2 != 0){
            $('.prev-btn').show();
        }else{
            $('.prev-btn').hide();   
        }
        return false;

    });
    /*三枚目のコンテンツ閉じるボタンをクリック*/
    $('.close').click(function(){
        $('#content3').removeClass('animation3');
        $('#content3').addClass('animation4');
        $('#content3').css('display','none');
        $('#content').fadeIn();
        $('.active').removeClass('active');
        return false;

    });
    /*三枚目のコンテンツ全ての写真を表示をクリック*/
    $('.all').click(function(){
        $('#content2').removeClass('animation2');
        $('#content3').css('display','none');
        $('#content2').css('display','block');
        $('#content2').addClass('animation');
        $('.active').removeClass('active');
        return false;
    });

});