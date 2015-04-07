// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keysUp = [38, 33, 36, 37];
var keysDown = [40, 34, 32, 39];

// on key up or key down trigger a sectionScroll with maximum inertia
// $(window).on("keydown", function(e) {
//   for (var i = keysUp.length; i--;) {
//     if (e.keyCode === keysUp[i]) {
//       $(window).scrollLeft($(window).scrollLeft()-25);
//       return;
//     }
//   }
//   for (var i = keysDown.length; i--;) {
//     if (e.keyCode === keysDown[i]) {
//       $(window).scrollLeft($(window).scrollLeft()+25);
//       return;
//     }
//   }
// });


// // on scrollwheel
// function wheel(e) {
//   var delta = -1 * Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//   $(window).scrollLeft($(window).scrollLeft()+(delta*25));
// }
// if (window.addEventListener) {
//   window.addEventListener('DOMMouseScroll', wheel, false);
// }
// window.onmousewheel = document.onmousewheel = wheel;


// Sidemenu
$('.sidemenu').slicknav({
    prependTo:'.main-nav'
});

$("a[href^=#]").click(function(e){
  if($($(e.target).attr("href")).length) {
    e.preventDefault();
    $('html, body').animate({scrollLeft: $($(e.target).attr("href")).offset().left });
  }
});