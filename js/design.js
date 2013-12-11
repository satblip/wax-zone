$(document).ready(function(e) {

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
	console.log("1");
	e.preventDefault();
	if(!isValidEmailAddress($('#signup_email').val())) {
		$('#signup_email').addClass('field_with_errors');
	} else {
		console.log("2");
		$('#signup_email').removeClass('field_with_errors');
	    $.ajax('https://madmimi.com/signups/subscribe/96405', {
		    type: 'POST',
		    data: {"signup[email]": $('#signup_email').val()},
		    success: function(response) {
		        
		    },
		    error: function(err){
		      	console.log(err);
		    }
		});
	  
	}
	$('#newsletter').hide();
  	$('#newsletter_confirm').show();
});

});