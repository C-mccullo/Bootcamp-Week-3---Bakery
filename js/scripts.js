
$(document).ready(function() {
  $('.hamburger').on('click', function(event){
  	// Prevent browser from refreshing
  	event.preventDefault();
  	console.log('it works');
  	$('.headerNav').toggleClass('open');
  });
}); 