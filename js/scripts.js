$(document).ready(function() {
  $(".formOne").submit(function(event) {
    var nameInput = $("input#userName").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();


    alert("Success!   " + "    "+ nameInput+ "   "+ descriptionInput);
    event.preventDefault();
  } );

});
