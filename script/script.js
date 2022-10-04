$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
        $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("How could you get this wrong ???!");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    console.log("user clicked dogeTwo 2");
        $("#outputMsg").text("Congrats!!!!!!!! your WOW is WOWing me!");
    $("#outputDiv").toggle();
      var div = $("div");
      div.animate({fontSize: '3em'}, "slow");
  });
});
