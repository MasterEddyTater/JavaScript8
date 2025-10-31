$(document).ready(function () {
  $(".botanic").hide();
  $(".imgdiv").hide();
  $("h1").mouseover(function () {
      $("h1").css("color", "purple"); // I like purple :)
    })
    $("h1").mouseout(function () {
      $("h1").css("color", "darkgreen");
    });
  $("h2").mouseover(function () {
      $("h2").css("color", "purple");
    })
    $("h2").mouseout(function () {
      $("h2").css("color", "darkgreen");
    });
    $(".flower").click(function() {
    $(".botanic").hide(); // I put a hide on top, and here because It wouldn't work as intended without both
    $(this).children(".botanic").show();
    });
    $(".pic").hover(function (evt) {
      var pic = '#' + $(this).attr('title');
      var xPos = evt.pageX + 150;
	    var yPos = evt.pageY;
	    $(pic).css({ left: xPos + 'px', top: yPos + 'px' });
      $(pic).show();
    },
    function () {
      var pic = '#' + $(this).attr('title');
      $(pic).hide();
    }
  );
  $(document).keypress(function(evt) {
  var keyPressed = String.fromCharCode(evt.which);
  var keyPressed = keyPressed.toLowerCase();
  if (keyPressed >= "a" && keyPressed <= "z") { // A to Z
    window.location = "#" + keyPressed;
  }
});
});