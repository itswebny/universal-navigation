$(document).ready( function() {

	//go out and find anchor(s) that have the class expandable, add click event
	$('.expandable').on('click', function(event){
	
		//prevents default event action on the anchor
		event.preventDefault();
		
		//checks anchor for expanded class
		if ($(this).hasClass('expanded')){
		
			//anchor had class expanded, remove it
			$(this).removeClass('expanded');
			
		} else {
		
			//anchor didn't have class expanded, add it
			$(this).addClass('expanded');			
		}
	});
	
});