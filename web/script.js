// SCREEN SLIDE STUFF

var windowHeight = $(window).height(),
windowWidth = $(window).width();

$(".slide").css("height", windowHeight);
$(".slide").css("width", windowWidth);

$(window).resize(function() {
  "use strict";
  var windowHeight = $(window).height(),
  windowWidth = $(window).width();

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
    case 65:
    evt.preventDefault();
    leftArrowPressed();
    break;
    case 68:
    evt.preventDefault();
    rightArrowPressed();
    break;
    case 70:
    evt.preventDefault();
    toggleFullScreen();
    break;
  }
};

// FULL SCREEN STUFF

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
  (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
