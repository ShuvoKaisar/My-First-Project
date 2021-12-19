
/*----------- Question Section JQuery Start -----------*/

$('.box .plus1').click(function(){
	$('.minus1').show()
	$('.plus1').hide()
	$('.answer1').slideToggle();
});
$('.box .minus1').click(function(){
	$('.minus1').hide()
	$('.plus1').show()
	$('.answer1').slideToggle();
});
$('.box .plus2').click(function(){
	$('.minus2').show()
	$('.plus2').hide()
	$('.answer2').slideToggle();
});
$('.box .minus2').click(function(){
	$('.minus2').hide()
	$('.plus2').show()
	$('.answer2').slideToggle();
});
$('.box .plus3').click(function(){
	$('.minus3').show()
	$('.plus3').hide()
	$('.answer3').slideToggle();
});
$('.box .minus3').click(function(){
	$('.minus3').hide()
	$('.plus3').show()
	$('.answer3').slideToggle();
});
$('.box .plus4').click(function(){
	$('.minus4').show()
	$('.plus4').hide()
	$('.answer4').slideToggle();
});
$('.box .minus4').click(function(){
	$('.minus4').hide()
	$('.plus4').show()
	$('.answer4').slideToggle();
});
$('.box .plus5').click(function(){
	$('.minus5').show()
	$('.plus5').hide()
	$('.answer5').slideToggle();
});
$('.box .minus5').click(function(){
	$('.minus5').hide()
	$('.plus5').show()
	$('.answer5').slideToggle();
});
$('.box .plus6').click(function(){
	$('.minus6').show()
	$('.plus6').hide()
	$('.answer6').slideToggle();
});
$('.box .minus6').click(function(){
	$('.minus6').hide()
	$('.plus6').show()
	$('.answer6').slideToggle();
});

/*----------- Question Section JQuery End -----------*/








/*----------- Mobile Responsive Menu JQuery Start -----------*/

$('.fa-align-justify').click(function(){
	$('.fa-align-justify').hide();
	$('.fa-times').show();
	$('.responsive-menu').slideToggle('slow');
});
$('.fa-times').click(function(){
	$('.fa-align-justify').show();
	$('.fa-times').hide();
	$('.responsive-menu').slideToggle('slow');
});

/*----------- Mobile Responsive Menu JQuery End -----------*/






$('.responsive-menu li a').click(function(){
	$('.responsive-menu').slideUp('fast');
	$('.fa-align-justify').show();
	$('.fa-times').hide();
});