$(function(){
	$('p[id="p2"]').hide();
	$('p[id="p3"]').hide();
	$('p[id="p1"]').delay(5000).fadeOut(2500);
	$('p[id="p2"]').delay(7500).fadeIn(2500).delay(5000);
	$('p[id="p2"]').fadeOut(2500);
	$('p[id="p3"]').delay(17500).fadeIn(2500);
  console.log("listo");
});