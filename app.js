$(document).ready(function() {
  $('#menu').click(function(e) {
    if ($('#menu').attr('aria-checked') === 'true') {
      $('#tray').slideToggle();
      $('#menu').attr('aria-checked', 'false');
    } else {
      $('#tray').slideToggle();
      $('#menu').attr('aria-checked', 'true');
    }
  });
});
