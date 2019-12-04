function checkParams() {
	var name = $('#name').val();
	var email = $('#email').val();
	var text = $('#text').val();

	if(email.indexOf('@') != -1 && name.length != 0 && text.length != 0) {
		$('#submit').removeAttr('disabled');
	} else {
		$('#submit').attr('disabled', 'disabled');
	}
}
checkParams();

function hideshow() {
	document.getElementById("mG61Hd").style.cssText="animation:hierrr 1s 1 linear;display:none;";
	document.getElementById("shower").style.cssText="display:block;animation:showwww 1s 1 linear;";
}
$('#subm').click(function remover(){
	$('.privat').removeAttr('disabled');
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});