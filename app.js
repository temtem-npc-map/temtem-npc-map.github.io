$(document).ready(function() {
  $('#menu').click(function(e) {
    if ($('#menu').attr('aria-checked') === 'true') {
      $('#tray').slideToggle();
      $('#menu').find('.material-icons').text('menu');
      $('#menu').attr('aria-checked', 'false');
    } else {
      $('#tray').slideToggle();
      $('#menu').find('.material-icons').text('clear');
      $('#menu').attr('aria-checked', 'true');
    }
  });
});
