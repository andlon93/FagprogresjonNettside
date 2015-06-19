var main = function(){
	$('.form-group').hide();

	$('.addCourse').click(function(){
		$('.courses').hide();
		$('.form-group').show();
	});

	$('.courseBTN').click(function(){
		$('.form-group').hide();
		var courseName = $('courseName').val();
		$('<li>').text(courseName).appendTo('.courses');
		$('.courses').show();

				
	});
};

$(document).ready(main);