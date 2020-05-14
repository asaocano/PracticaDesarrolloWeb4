$(document).ready(function () {
  $("#button").on("click", console.log("click"));
  $("#correo").on("blur", function () {
    if (
      $("#correo").val().indexOf("@") < 0 ||
      $("#correo").val() === "" ||
      $("#correo").val().indexOf(".") < 0
    ) {
      $("#correo").css({ border: "1px solid red" });
      $(".error").show();
    } else {
      $("#correo").css({ border: "1px solid #5381F3" });
      $(".error").hide();
    }
  });
});
