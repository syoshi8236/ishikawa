$(function () {
  $(".slider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // fade: true,
    slidesToShow: 3,
    speed: 400,

    responsive: [
      {
        breakpoint: 771, // 770px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        },
      },
    ],
  });

});
