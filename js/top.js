$(document).ready(function () {
  "use strict";

  $(".product_slider").slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 4,
    centerMode: false,
  });
  $(".special_slider").slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
  });
  $(".release_slider").slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
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
  $(".product_slider .product_img").each(function (index) {
    max = Math.max(max, $(this).height());
    return max;
  });
  $(".product_slider .product_img").css("height", `${max}px`);



  $("#idx_release .release_card figure").matchHeight();
  $("#idx_release .release_card h4").matchHeight();
  $("#idx_release .release_card release_txt").matchHeight();

  
});
