// $(".slider").slick({
// dots:true,

$(function() {
  $('.slideshow').each(function() {
    var $slides = $(this).find('img'),
      slideCount = $slides.length,
      currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 6000);

    function showNextSlide() {
      var nextIndex = (currentIndex + 1) % slideCount;
      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }


  });
});
// フェードイン フェードアウト//
$(function() {
  var h = $(window).height(); //ブラウザウィンドウの高さを取得
  $('#loader-bg ,#loader').height(h).css('display', 'block'); //ウィンドウの高さに合わせでローディング画面を表示
  $('#loader-bg').delay(900).fadeOut(1000); //または、$('#loader-bg').fadeOut(800);でも可
  $('#loader').delay(600).fadeOut(1000, function() {}); //または、$('#loader').fadeOut(300);でも可

});
