$(document).ready(function() {
    $("#account-menu-link").click(function() {
        $("#menu").slideToggle(500);
    });

    $("#menu-header i").click(function() {
        $("#menu").slideUp(500);
    });

    $(".cancelBtn.btn.btn-default").click(function() {
        $("#report-range-backdrop").slideUp(100);
    });

    $("#login-button").click(function() {
        $("#login-area").slideToggle(500);
    });
});
