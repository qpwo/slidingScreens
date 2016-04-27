// SCROLL TO TOP

$('html,body').animate({ scrollTop: 0 }, 400);

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
  evt.preventDefault();
  evt = evt || window.event;
  switch (evt.keyCode) {
    case 65: // a
    evt.preventDefault();
    leftArrowPressed();
    break;
    case 68: // d
    evt.preventDefault();
    rightArrowPressed();
    break;
    case 70: // f
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

// PAUSE OR PLAY VIDEO ON CLICK

$("video").click(function (e) {
    if(e.offsetY < ($(this).height() - 36)) // Check to see if controls where clicked
    {
        if(this.paused)
            this.play();
        else
            this.pause();
    }
});
