$(document).ready(function(e) {

var lang;
var browserLang = navigator.language || navigator.userLanguage;



// Core
var loadPage = function(a,b,c,d,e,f,g){
	$('#page' + b +', #page' + c +', #page' + d +', #page' + e +', #page' + f +', #page' + g).hide();
	$('#page' + a).show();	
}


// Triggers
$('#home_link').click(function(){
	loadPage(1,2,3,4,5,6,7);
});
$('#concept_link').click(function(){
	loadPage(2,1,3,4,5,6,7);
});

$('#centres_link').click(function(){
	loadPage(3,4,5,6,7,1,2);
});

$('#tarifs_link').click(function(){
	loadPage(4,5,6,7,1,2,3);
});
$('#soins_link').click(function(){
	loadPage(5,6,7,1,2,3,4);
});
$('#spa_link').click(function(){
	loadPage(6,5,7,1,2,3,4);
});
$('#contact_link').click(function(){
	loadPage(7,1,2,3,4,5,6);
});

//ORBIT

$('#slider').orbit();

// Valid email address
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

// Newsletter
$("#newsletter_signup_form").submit(function(e) {
	e.preventDefault();
	if(!isValidEmailAddress($('#signup_email').val())) {
		$('#signup_email').addClass('field_with_errors');
	} else {
		if (lang == "fr"){
			newsletter_url = "https://madmimi.com/signups/subscribe/96405";
		} else if (lang == "nl"){
			newsletter_url = "https://madmimi.com/signups/subscribe/96405";
		} else {
			newsletter_url = "https://madmimi.com/signups/subscribe/96405";
		}
		$('#signup_email').removeClass('field_with_errors');
	    $.ajax(newsletter_url, {
		    type: 'POST',
		    data: {"signup[email]": $('#signup_email').val()},
		    success: function(response) {
		        
		    },
		    error: function(err){
		    }
		});
		$('#newsletter').hide();
  		$('#newsletter_confirm').show();
	  
	}

});

$('#lang_en').click(function(){
	changeLanguage("en");
	$('#lang_fr, #lang_nl').removeClass('pink');
	$('#lang_en').addClass('pink');
	$('#newsletterSubmit').val('Subscribe');
	$('#signup_email').attr("placeholder", "you@example.com");
});


$('#lang_fr').click(function(){
	changeLanguage("fr");
	$('#lang_en, #lang_nl').removeClass('pink');
	$('#lang_fr').addClass('pink');
	$('#newsletterSubmit').val("S'inscrire");
	$('#signup_email').attr("placeholder", "vous@exemple.com");
});


$('#lang_nl').click(function(){
	changeLanguage("nl");
	$('#lang_fr, #lang_en').removeClass('pink');
	$('#lang_nl').addClass('pink');
	$('#newsletterSubmit').val("Registreren");
	$('#signup_email').attr("placeholder", "u@example.com");
});

if (browserLang == "fr" || browserLang == "en" || browserLang == "nl"){
	lang = browserLang;
} else {
	lang = "en";
}
$('#lang_'+lang).trigger('click');


});