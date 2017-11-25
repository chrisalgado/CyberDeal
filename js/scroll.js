	var tarjeta = document.getElementById("tarjeta");
	
	$(function(){
		$(window).scroll(function(){
		if($(this).scrollTop() > 1000){
			tarjeta.classList.toggle('fadeInDown');
		}else{
			tarjeta.removeClass('fadeInDown');
		}
	});
});