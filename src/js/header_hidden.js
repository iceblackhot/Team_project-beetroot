$(document).ready(function () {
  $("#showHideContent").click(function () {
    if ($("#content").is(":hidden")) {
      $("#content").show("slow");
    } else {
      $("#content").hide("slow");
    }
    return false;
  });
});

$(document).ready(function () {
  $("#hideMenu").click(function () {
    if ($("#content").is(":hidden")) {
      $("#content").show("slow");
    } else {
      $("#content").hide("slow");
    }
    return false;
  });
});
