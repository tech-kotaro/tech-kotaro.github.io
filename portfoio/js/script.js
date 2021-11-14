// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  /*$(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });
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
  

  //ページ内スクロール
  $('.nav-link').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html,body').animation({
        'scrollTop':position
      },3000);
      return false;
  });
  /*
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });
  */

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;//親要素へのイベントの運搬を止める
  });

  //フェードインver1
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('active');
        }
    });
});

  //ハンバーガーメニュー
  $('.icon-wrapper').click(function(){
    if($('.globalnav').hasClass('active')){
        $('.globalnav').removeClass('active');
        $('.globalnav').slideUp('slow');
    }else{
        $('.globalnav').addClass('active');
        $('.globalnav').slideDown('slow');
    }
})
});
