function detectarScroll(){
	var scrollvertical = $(window).scrollTop();
}

function muevete(){
	$('#inicio').onclick('click', function(){
		var body = $("html, body");
 		body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
		alert("Finished animating");
});
	});
}

