$(document).ready(() => {
  $(".js-nav-opener").on("click", function () {
    if ($(".button__holder").hasClass("active")) {
      $(".button__holder").removeClass("active");
    } else {
      $(".button__holder").addClass("active");
    }
  });
});
