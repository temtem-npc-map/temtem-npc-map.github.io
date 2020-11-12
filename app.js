$(document).ready(function() {
  $('#menu').click(function(e) {
    if ($('#menu').attr('aria-checked') === 'true') {
      $('#tray').removeClass('script-display-none').slideToggle();
      $('#menu').attr('aria-checked', 'false');
    } else {
      $('#tray').removeClass('script-display-none').slideToggle();
      $('#menu').attr('aria-checked', 'true');
    }
  });
});
