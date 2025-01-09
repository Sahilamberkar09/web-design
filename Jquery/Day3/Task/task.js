$(document).ready(function () {
  $("#btn1").click(function () {
    $(".animate-box").animate(
      {
        width: "300px",
        height: "200px",
        marginTop: "150px",
        borderWidth: "10px",
      },
      function () {
        setTimeout(function () {
          $(".hello-message").css({ left: "-100px", "font-size": "36px" });
        }, 10);
      }
    );
  });

  $("#btn2").click(function () {
    $(".animate-box").animate(
      {
        width: "200px",
        height: "100px",
        marginTop: "0px",
        borderWidth: "1px",
      },
      function () {
        setTimeout(function () {
          $(".hello-message").css({ left: "200px", "font-size": "36px" });
        }, 10);
      }
    );
  });
});
