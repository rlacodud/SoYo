(function (global, $) {

  var $menu = $('.floating-menu li a'),
      $contents = $('.scroll'),
      $doc = $('html, body');
  $(function () {
      // 해당 섹션으로 스크롤 이동
      $menu.on('click', 'a', function (e) {
          var $target = $(this).parent(),
              idx = $target.index(),
              section = $contents.eq(idx),
              offsetTop = section.offset().top;
          $doc.stop().animate({ scrollTop: offsetTop }, 600);
          return false;
      });
  });

  // menu class 추가
  $(window).scroll(function () {
      var scltop = $(window).scrollTop();
      $.each($contents, function (idx, item) {
          var $target = $contents.eq(idx),
              idx = $target.index(),
              targetTop = $target.offset().top;

          if (targetTop < scltop) {
              $menu.removeClass('on, active');
              $menu.eq(idx).addClass('on, active');
          }
          if (!(200 < scltop)) {
              $menu.removeClass('on, active');
          }
      })

  });

  // Go to the TOP


}(window, window.jQuery));

var timeout;
 
// 휠이벤트가 발생하면
window.onwheel = function(){
    clearTimeout(timeout);  //이전 휠 이벤트 제거
    timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
        
    }, 1000);
};

window.onload = function () {
    var elm = ".scrollTo";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){
                        
                    }
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 600, complete: function () {
                }
            });
        });
    });
}

  var top = window.innerHeight;
console.log(window.scrollY);

  $(window).scroll(function(){
    if ($(window).scrollTop() < 1) {
        $('.navCircle1').removeClass('navCircleChange');
        $('.navCircle2').removeClass('navCircleChange');
        $('.navCircle3').removeClass('navCircleChange');
        $('.navCircle4').removeClass('navCircleChange');
        $('.navCircle5').removeClass('navCircleChange');
        $('.navCircle2').removeClass('active');
        $('.navCircle3').removeClass('active');
        $('.navCircle4').removeClass('active');
        $('.navCircle5').removeClass('active');
        $('.navCircle1').removeClass('activeColor');
        $('.navCircle1').removeClass('navCircleChange');
        $(".mean").removeClass("animationDefault");
        $(".iphoneL").removeClass("animationDelay1");
        $(".iphoneR").removeClass("animationDelay2");
        
        $('.navCircle1').addClass('active');
        $('.navCircle1').addClass('navCircle1');
        $('.navCircle2').addClass('navCircle2');
        $('.navCircle3').addClass('navCircle3');
        $('.navCircle4').addClass('navCircle4');
        $('.navCircle5').addClass('navCircle5');
        return;
    }
    else if ($(window).scrollTop() < 970) {
      $('.navCircle1').removeClass('active');
      $('.navCircle2').removeClass('active');
      $('.navCircle3').removeClass('active');
      $('.navCircle4').removeClass('active');
      $('.navCircle5').removeClass('active');
      $(".mean").removeClass("animationDefault");
      $(".iphoneL").removeClass("animationDelay1");
      $(".iphoneR").removeClass("animationDelay2");

      $('.navCircle1').addClass('navCircleChange');
      $('.navCircle2').addClass('navCircleChange');
      $('.navCircle1').addClass('activeColor');
      $('.navCircle3').addClass('navCircleChange');
      $('.navCircle4').addClass('navCircleChange');
      $('.navCircle5').addClass('navCircleChange');
      return;
    } else if ($(window).scrollTop() < 1938) {
        $('.navCircle1').removeClass('navCircleChange');
        $('.navCircle2').removeClass('navCircleChange');
        $('.navCircle3').removeClass('navCircleChange');
        $('.navCircle4').removeClass('navCircleChange');
        $('.navCircle5').removeClass('navCircleChange');
        
        $('.navCircle1').removeClass('active');
        $('.navCircle3').removeClass('active');
        $('.navCircle4').removeClass('active');
        $('.navCircle5').removeClass('active');
        $('.navCircle1').removeClass('activeColor');

        $(".first").removeClass("animationDefault");
        $(".sec").removeClass("animationDelay1");
        $(".blue").removeClass("animationDelay2");

        $(".mean").addClass("animationDefault");
        $(".iphoneL").addClass("animationDelay1");
        $(".iphoneR").addClass("animationDelay2");
        $('.navCircle1').addClass('navCircle1');
        $('.navCircle2').addClass('active');
        $('.navCircle2').addClass('navCircle2');
        $('.navCircle3').addClass('navCircle3');
        $('.navCircle4').addClass('navCircle4');
        $('.navCircle5').addClass('navCircle5');
        return;
    }
    // else if ($(window).scrollTop() < 2907) {
    //     $(".mean").removeClass("animationDefault");
    //     $(".iphoneL").removeClass("animationDelay1");
    //     $(".iphoneR").removeClass("animationDelay2");

    // } 
    else if ($(window).scrollTop() < 3876) {
        // $(".mean").removeClass("animationDefault");
        // $(".iphoneL").removeClass("animationDelay1");
        // $(".iphoneR").removeClass("animationDelay2");

        $(".first").addClass("animationDefault");
        $(".sec").addClass("animationDelay1");
        $(".blue").addClass("animationDelay2");

    } 
    else if ($(window).scrollTop() < 4845) {
        $('.navCircle1').removeClass('navCircleChange');
        $('.navCircle2').removeClass('navCircleChange');
        $('.navCircle3').removeClass('navCircleChange');
        $('.navCircle4').removeClass('navCircleChange');
        $('.navCircle5').removeClass('navCircleChange');
        
        $('.navCircle1').removeClass('active');
        $('.navCircle3').removeClass('active');
        $('.navCircle4').removeClass('active');
        $('.navCircle5').removeClass('active');
        $('.navCircle2').removeClass('activeColor');

        $(".first").removeClass("animationDefault");
        $(".sec").removeClass("animationDelay1");
        $(".blue").removeClass("animationDelay2");

        $('.navCircle1').addClass('navCircle1');
        $('.navCircle2').addClass('active');
        $('.navCircle2').addClass('navCircle2');
        $('.navCircle3').addClass('navCircle3');
        $('.navCircle4').addClass('navCircle4');
        $('.navCircle5').addClass('navCircle5');
        return;
    } 
    else if ($(window).scrollTop() < 5814) {
        $('.navCircle1').removeClass('navCircleChange');
        $('.navCircle2').removeClass('navCircleChange');
        $('.navCircle3').removeClass('navCircleChange');
        $('.navCircle4').removeClass('navCircleChange');
        $('.navCircle5').removeClass('navCircleChange');

        $('.navCircle2').removeClass('activeColor');
        $('.navCircle1').removeClass('active');
        $('.navCircle2').removeClass('active');
        $('.navCircle4').removeClass('active');
        $('.navCircle5').removeClass('active');

        $(".first").removeClass("animationDefault");
        $(".sec").removeClass("animationDelay1");
        $(".blue").removeClass("animationDelay2");

        $('.navCircle1').addClass('navCircle1');
        $('.navCircle2').addClass('navCircle2');
        $('.navCircle3').addClass('navCircle3');
        $('.navCircle3').addClass('active');
        $('.navCircle4').addClass('navCircle4');
        $('.navCircle5').addClass('navCircle5');
        return;
    }  else if ($(window).scrollTop() < 5904) {
        $('.navCircle1').removeClass('navCircleChange');
        $('.navCircle2').removeClass('navCircleChange');
        $('.navCircle3').removeClass('navCircleChange');
        $('.navCircle4').removeClass('navCircleChange');
        $('.navCircle5').removeClass('navCircleChange');

        $('.navCircle2').removeClass('activeColor');
        $('.navCircle1').removeClass('active');
        $('.navCircle2').removeClass('active');
        $('.navCircle4').removeClass('active');
        $('.navCircle5').removeClass('active');

        $('.navCircle1').addClass('navCircle1');
        $('.navCircle2').addClass('navCircle2');
        $('.navCircle3').addClass('navCircle3');
        $('.navCircle3').addClass('active');
        $('.navCircle4').addClass('navCircle4');
        $('.navCircle5').addClass('navCircle5');
        return;
    } 
    else if ($(window).scrollTop() < 6874) {
        $('.navCircle1').removeClass('navCircleChange');
        $('.navCircle2').removeClass('navCircleChange');
        $('.navCircle3').removeClass('navCircleChange');
        $('.navCircle4').removeClass('navCircleChange');
        $('.navCircle5').removeClass('navCircleChange');
        
        $('.navCircle2').removeClass('activeColor');
        $('.navCircle1').removeClass('active');
        $('.navCircle2').removeClass('active');
        $('.navCircle3').removeClass('active');
        $('.navCircle5').removeClass('active');

        $('.navCircle1').addClass('navCircle1');
        $('.navCircle2').addClass('navCircle2');
        $('.navCircle3').addClass('navCircle3');
        $('.navCircle4').addClass('navCircle4');
        $('.navCircle4').addClass('active');
        $('.navCircle5').addClass('navCircle5');
        return;
    }     else if ($(window).scrollTop() < 8721) {
        $('.navCircle1').removeClass('navCircleChange');
        $('.navCircle2').removeClass('navCircleChange');
        $('.navCircle3').removeClass('navCircleChange');
        $('.navCircle4').removeClass('navCircleChange');
        $('.navCircle5').removeClass('navCircleChange');
        
        $('.navCircle2').removeClass('activeColor');
        $('.navCircle1').removeClass('active');
        $('.navCircle2').removeClass('active');
        $('.navCircle3').removeClass('active');
        $('.navCircle4').removeClass('active');

        $('.navCircle1').addClass('navCircle1');
        $('.navCircle2').addClass('navCircle2');
        $('.navCircle3').addClass('navCircle3');
        $('.navCircle4').addClass('navCircle4');
        $('.navCircle5').addClass('active');
        $('.navCircle5').addClass('navCircle5');
        return;
    } 
  });

var btn = document.querySelector(".btn");
var circle = document.querySelector(".circleS");
var btnText  = document.querySelector(".btn-text");
var text = document.querySelector(".text");
var text2 = document.querySelector(".text2");
var text3 = document.querySelector(".text3");
var text4 = document.querySelector(".text4");
var text5 = document.querySelector(".text5");
var text6 = document.querySelector(".text6");
var text7 = document.querySelector(".text7");
var text8 = document.querySelector(".text8");

// console.log("연결");

function circleT(e){
    e.preventDefault();
    circle.classList.toggle("on");
    btn.classList.toggle("btnColor");
    btnText.classList.toggle("btn-textOn");
    text.classList.toggle("textOn");
    text2.classList.toggle("textOn");
    text3.classList.toggle("textOn");
    text4.classList.toggle("textOn");
    text5.classList.toggle("textOn");
    text6.classList.toggle("textOn");
    text7.classList.toggle("textOn");
    text8.classList.toggle("textOn");
}

btn.addEventListener("mouseover", circleT);