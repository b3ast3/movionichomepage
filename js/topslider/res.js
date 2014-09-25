$(function() {
    $(".rslides").responsiveSlides();
  });

// You can also use "$(window).load(function() {"
    $(function () {

      // Slideshow 1
      $("#slider1").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 500,
        maxwidth: 1600,
        namespace: "centered-btns"
      });
 });