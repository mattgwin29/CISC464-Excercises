$( document ).ready(function() {
console.log( "ready!" );
$("#go").on("click", (event) => event.preventDefault($("#jumbotron").text($("#fname").val() + ' ' + $("#lname").val())));
});

