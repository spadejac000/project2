$(document).ready(function() {
  $('button.deleteButton').click(function(e) {
    e.preventDefault()
    var url = $(this).attr('href');
    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function(data) {
      window.location = '/own';
    });
  });

  $('.edit').on('submit', function(e){
  e.preventDefault();
  // added a variable for movie id
  var movieName = $('#movie').val();
  console.log($(this));
  var updatedInfo = $(this).serialize();
  console.log(updatedInfo);
  var url = $(this).attr('action');
  $.ajax({
    method: 'PUT',
    url: url,
    data: updatedInfo
  }).done(function(data) {
    // added movie id to route after /info/
    window.location = '/info/' + movieName;
  });
});
});

// hide sign up and login when logged in
// make it so you can't crash site when looking up a wrong movie
// make route for wishlist movies
// make the movies on the main page have links
// create readme.md and map routes
// make responsive
// clean up code
// deploy it
