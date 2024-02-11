$(document).ready(function () {
  $(".flip-card-inner").click(function () {
    let imgSRC = $(this).children().children().attr("src");

    if ($(".container .choose-one .form-check-input").is(":checked")) {
      $(".container .character img").attr("src", imgSRC);
      $(".container .choose-one .form-check-input").prop('checked', false);;
    }

    $(this).toggleClass('flip-action');
  });
});