$(document).ready(function() {
  $("#account-menu-link").click(function(){
    $("#menu").slideToggle(500);
  });

  $('#menu-header i').click(function () {
      $("#menu").slideUp(500);
  })
});
