jQuery(document).ready(function($) {  

	$('.countdown').downCount({
		date: '10/30/2017 12:00:00',
		offset: +10
	}, function () {
		alert('WOOT WOOT, done!');
	});	
});

    $('.venobox').venobox({
	bgcolor: '#161617',
	overlayColor: 'rgba(46, 204, 113, 0.6)',
	spinner: 'wave',
	closeColor: '#2ecc71'
	}); 

	$(window).load(function(){
	$('#loader-wrapper').fadeOut('slow',function(){$(this).remove();});
});

