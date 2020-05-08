$(document).ready(function () {
  $("#correo").on("blur", function () {
    if ($("#correo").val().indexOf("@") < 0 || $("#correo").val() === "") {
      $("#correo").css({ border: "1px solid red" });
    } else {
      $("#correo").css({ border: "1px solid #5381F3" });
    }
  });
});
