$(document).ready(function () {
  "use strict";
  var _boxes = $(".overlay");
  _boxes.bind("lightup", function () {
    setTimeout(function () {
      $(".overlay").removeClass("overlay-hide");
    }, 400);
  });

  $(".hamburger").click(function (e) {
    e.preventDefault();
    $("#header").toggleClass("active");
    $(this).toggleClass("active");
    var _this = $(".overlay");
    _this.toggleClass("overlay-show");
    if (_this.hasClass("overlay-hide")) {
      _this.trigger("lightup");
    } else {
      $(".overlay").removeClass("overlay-hide");
      _this.addClass("overlay-hide");
    }
  });

  $(".product_slider").slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 4,
    centerMode: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".special_slider").slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".release_slider").slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".space_slider").slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 4,
    centerMode: false,
  });
  var max = 0;
  $(".space_slider figure").each(function (index) {
    max = Math.max(max, $(this).height());
    return max;
  });
  $(".space_slider figure").css("height", `${max}px`);

  if ($(window).width() > 490) {
    $("#idx_special .spec_card h4").matchHeight();
    $("#idx_release .release_card figure").matchHeight();
    $("#idx_release .release_card h4").matchHeight();
    $("#idx_release .release_card release_txt").matchHeight();
  }
});
