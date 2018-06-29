$(document).ready(function() {
  $('button.deleteButton').click(function(e) {
    e.preventDefault()
    var url = $(this).attr('href');
    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function(data) {
      window.location = '/own';
    })
  })

});
