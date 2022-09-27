$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
        $("#outputDiv").hide();

    console.log("user clicked dogeOne");
    $("#outputMsg").text("How could you get this wrong ???!");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    console.log("user clicked dogeTwo");
        $("#outputMsg").text("Congrats!!!!!!!! your WOW is WOWing me!");
    $("#outputDiv").toggle();
      var div = $("div");
      div.animate({fontSize: '2em'}, "slow");
  });
});

var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});