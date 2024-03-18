$(document).ready(function () {

  $("#send-form").click(function () {
    $.ajax({
      type: "POST",
      url: "./contacto.php",
      data: $("#email-form").serialize(),
      dataType: "json",
      beforeSend: function () {
        $("#send-form").html("Enviando...")
        console.log("enviando informacion");
      },
      success: function (response) {
        if (response.status == 'fail') {
          $("#send-form").html("Enviar");
          $("#email-response").addClass('msg-alert-danger').html(response.message);
        } else if (response.status == 'success') {
          $("#send-form").html("Enviar");
          $("#email-response").addClass('msg-alert-success').html("¡mensaje enviado!");
          setTimeout(() => {
            window.location.href = "./gracias.html";
          }, 1500);
        }
      }
    });
  })
});