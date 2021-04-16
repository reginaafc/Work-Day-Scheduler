// This sets the firts view
$(".container").hide()

$("#start").click(function () {
  $(".container").show()
  $("#start").hide()
});

// This display the current date on the header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Save button function
$(".lock").click(function () {
  // Makes sure that the nearest textarea is saved when lock button is clicked
  var activity = $(this).siblings(".activity").val();
  var hour = $(this).parent().attr("id");

  // This saves the activities in localStorage
  localStorage.setItem(hour, activity);
});

// This gets all the activities saved in the local storage
$("#7 .activity").val(localStorage.getItem("7"));
$("#8 .activity").val(localStorage.getItem("8"));
$("#9 .activity").val(localStorage.getItem("9"));
$("#10 .activity").val(localStorage.getItem("10"));
$("#11 .activity").val(localStorage.getItem("11"));
$("#12 .activity").val(localStorage.getItem("12"));
$("#13 .activity").val(localStorage.getItem("13"));
$("#14 .activity").val(localStorage.getItem("14"));
$("#15 .activity").val(localStorage.getItem("15"));
$("#16 .activity").val(localStorage.getItem("16"));
$("#17 .activity").val(localStorage.getItem("17"));
$("#18 .activity").val(localStorage.getItem("18"));



function currentHourfunc() {
  // This gets the current hours
  var currentHour = moment().hours();

  // This checks that each div has its correspondant background color
  $(".time-block").each(function() {
    var currentHourComp = parseInt($(this).attr("id"));

    // This checks if that hour has passed
    if (currentHourComp < currentHour) {
      $(this).css("background-color", "#d3d3d3");
    }  // This checks if it is the current hour
    else if (currentHourComp === currentHour) {
      $(this).css("background-color", "#ff6961");
    }  // This checks if that hour hasn't arrived
    else {
      $(this).css("background-color", "#77dd77");
    }
  });
}

currentHourfunc();

// This resets all the activities
$(".reset").click(function () {
  localStorage.clear();
  $(".activity").val("");
});


