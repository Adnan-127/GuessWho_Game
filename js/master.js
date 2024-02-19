$(document).ready(function () {
  $(".flip-card-inner").click(function () {
    let imgSRC = $(this).children().children().attr("src");
    let card = $(this);

    $(card).toggleClass('flip-action');
    if ($(".container .choose-one .form-check-input").is(":checked")) {
      $(".container .character img").attr("src", imgSRC);
      $(".container .choose-one .form-check-input").prop('checked', false);
      $(card).removeClass('flip-action');
    }
  });

  $(".container .choose-theme .form-check-input").on("click", function () {
    $("body,.container h1,.container,.flip-card-front,.flip-card-back,.container .choose-one .form-check-lable,.container .choose-theme .form-check-lable").toggleClass("dark");
  });
});
