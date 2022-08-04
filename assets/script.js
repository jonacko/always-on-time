
  jQuery(document).ready(function () {
  
  // display current date and time on page using Moment
  jQuery('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));


  // live time update every second (check every millisecond)
  var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}

setInterval(update, 1000);


    // sets variables for what to save in local storage
    //note: explore usage of 'this' further - useful method

  jQuery('.saveBtn').on('click', function () {
 
    var scheduleNotes = jQuery(this).siblings('.textbox').val();
    var scheduleTime = jQuery(this).parent().attr('id');

    // saves text in localStorage
    window.localStorage.setItem(scheduleTime, scheduleNotes);

  });

  function hourUpdater() {

    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks then check if this time has passed
    jQuery('.hour-block').each(function () {
      var blockHour = parseInt(window.jQuery(this).attr('id').split('-')[1]);

  
      if (blockHour < currentHour) {
        jQuery(this).addClass('past');
      } else if (blockHour === currentHour) { 
        jQuery(this).removeClass('past');
        jQuery(this).addClass('present');
      } else {
        jQuery(this).removeClass('past');
        jQuery(this).removeClass('present');
        jQuery(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 10000);

  // load any saved data from localStorage
  jQuery('#hour-8 .textbox').val(localStorage.getItem('hour-8'));
  jQuery('#hour-9 .textbox').val(localStorage.getItem('hour-9'));
  jQuery('#hour-10 .textbox').val(localStorage.getItem('hour-10'));
  jQuery('#hour-11 .textbox').val(localStorage.getItem('hour-11'));
  jQuery('#hour-12 .textbox').val(localStorage.getItem('hour-12'));
  jQuery('#hour-13 .textbox').val(localStorage.getItem('hour-13'));
  jQuery('#hour-14 .textbox').val(localStorage.getItem('hour-14'));
  jQuery('#hour-15 .textbox').val(localStorage.getItem('hour-15'));
  jQuery('#hour-16 .textbox').val(localStorage.getItem('hour-16'));
  jQuery('#hour-17 .textbox').val(localStorage.getItem('hour-17'));

});

//TODO: add media queries to optimze application for different screen sizes