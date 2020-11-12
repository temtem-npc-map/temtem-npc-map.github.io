$(document).ready(function(){
  
  /* Accordion Functionality */
  // Activated on click of .accordian-head div
  $('.accordion-head').click(function () {
    
    // Variables to navigate this specific accordion
    var accordionSegment = $(this);
    var accordionLi = accordionSegment.parents('li');
    var accordion = accordionSegment.parents('.accordion');
    var checkedSegments = accordion.find('div[aria-checked=true]');
    var checkedLi = checkedSegments.parent();  
    
    // Removes the default 'display:none' as this is only there to collapse things by default on page load
    accordionLi
      .children('.accordion-content')
      .removeClass('script-display-none');
    
    // Opens a passed in segment of the accordion
    function accordionToggleOpen(segment) {
      segment
        .attr('aria-checked','true');
      segment
        .children('i.accordion-arrow')
        .html("expand_less");
      segment
        .parent('li')
        .children('.accordion-content')
        .removeClass('collapsed')
        .slideToggle( "fast" );
    }
    
    // Closes a passed in segment of the accordion
    function accordionToggleClose(segment) {
      segment.attr('aria-checked','false');
      segment
        .children('i.accordion-arrow')
        .html("expand_more");
      segment
        .parent('li')
        .children('.accordion-content')
        .addClass('collapsed')
        .slideToggle( "fast" );
    }
    
    // Determines which of the above functions to run on the current (this) segment
    function accordionToggle() {
      if (accordionSegment.attr('aria-checked') === 'false') {
        accordionToggleOpen(accordionSegment);
      } else {
        accordionToggleClose(accordionSegment);
      }
    }
    
    // Changes functionality slightly if accordion has class '.single-select' so only one segment can be open at a time
    if (accordion.hasClass("single-select")) {
      //Takes all segments that are open and subtracts the current segment, then passes them through the accordionToggleClose functon
      checkedSegments
        .not(accordionSegment)
        .each(function( index ) {
          var currentSegment = $(this);
          accordionToggleClose(currentSegment);
        });
      //Runs the accordionToggle function on the current segment as usual once the before is done
      accordionToggle();
    } else {
      //Runs the accordionToggle function on the current segment
      accordionToggle();
    }
  });
  
  // For accessibility, ensures that accordion can be toggled with return or space keys
  $('.accordion-head').keydown(function (e) {
        var code = e.which;
        // 13 = Return, 32 = Space
        if ((code === 13) || (code === 32)) {
            $(this).click();
        }
    });
});
