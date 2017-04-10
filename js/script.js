$(document).ready(function(){
	
	/*For the sticky nav*/
	$('.js--waypoint').waypoint(function(direction){
		if(direction=="down"){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
	},{
		offset:'60px;'
});


	/*https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});

new GMaps({
  div: '.map',
  lat: -41.288209,
  lng: 174.778290,
  zoom:15
});

});