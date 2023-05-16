$(document).ready(function() {
  $('#taskForm').on('submit', function(e) {
    e.preventDefault();
    var newTask = $('#newTask').val();
    $('#taskList').append('<li>' + newTask + '</li>');
    $('#newTask').val('');
  });

  $('#taskList').on('click', 'li', function() {
    $(this).toggleClass('done');
  });
});
