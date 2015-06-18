var main = function(){
	$('.addCourse').click(function(){
		$('<li>').text("TDT4171").appendTo('.courses');
	});
};

$(document).ready(main);