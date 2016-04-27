var windowHeight = $(window).height(),
windowWidth = $(window).width();

$(".slide").css("height", windowHeight);
$(".slide").css("width", windowWidth);

$(window).resize(function() {
  "use strict";
  var windowHeight = $(window).height(),
  windowWidth = $(window).width(),
  centerHeight = windowHeight / 2,
  centerWidth = windowWidth / 2;

  $(".slide").css("height", windowHeight);
  $(".slide").css("width", windowWidth);

});

var current = 0;
var sections = $(".slide")

function leftArrowPressed() {
  "use strict";
  current -= 1;
  current = Math.min(sections.length - 1, Math.max(current, 0));
  $("html, body").animate({
    scrollTop: sections.eq(current).offset().top
  });
}

function rightArrowPressed() {
  "use strict";
  current += 1;
  current = Math.min(sections.length - 1, Math.max(current, 0));
  $("html, body").animate({
    scrollTop: sections.eq(current).offset().top
  });
}

document.onkeydown = function(evt) {
  "use strict";
  evt = evt || window.event;
  switch (evt.keyCode) {
    case 37:
    leftArrowPressed();
    break;
    case 39:
    rightArrowPressed();
    break;
  }
};
