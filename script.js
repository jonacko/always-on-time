  // display current date and time on page using Moment
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // when button is clicked saves in local storage
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // saves text in localStorage
    localStorage.setItem(time, value);

  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#hour-8 .textbox').val(localStorage.getItem('hour-8'));
  $('#hour-9 .textbox').val(localStorage.getItem('hour-9'));
  $('#hour-10 .textbox').val(localStorage.getItem('hour-10'));
  $('#hour-11 .textbox').val(localStorage.getItem('hour-11'));
  $('#hour-12 .textbox').val(localStorage.getItem('hour-12'));
  $('#hour-13 .textbox').val(localStorage.getItem('hour-13'));
  $('#hour-14 .textbox').val(localStorage.getItem('hour-14'));
  $('#hour-15 .textbox').val(localStorage.getItem('hour-15'));
  $('#hour-16 .textbox').val(localStorage.getItem('hour-16'));
  $('#hour-17 .textbox').val(localStorage.getItem('hour-17'));

});
