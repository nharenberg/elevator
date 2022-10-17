jQuery(document).ready(function($) {
    var elevatorButtons = $('.elevator-buttons');
    var buttons = $('.number-button');
    var greenLight = $('div.up');
    var redLight = $('div.down');
    var currentfloorNumber = $('.floor-number');
    var selectedFloor;

  $(buttons).on('mouseenter', function(evnt) {
    $(evnt.target).css({
      'cursor': 'pointer'
    });
  });

  $(elevatorButtons).find(buttons).on('click', function(evnt) {
    selectedFloor = $(evnt.target).text();
    updateNumber(selectedFloor);
  });


  function updateNumber(selectedFloor) {
    var currentfloor = currentfloorNumber.text()

    if (selectedFloor > currentfloor) {
      greenLight.removeClass('off');
      redLight.addClass('off');
    } else {
      redLight.removeClass('off')
      greenLight.addClass('off');
    }

    currentfloorNumber.text(selectedFloor);

  }

})();
