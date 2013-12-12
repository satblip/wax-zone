// Google Analytics
var _gaq = _gaq || [];  
_gaq.push(['_setAccount', 'UA-46381455-1']);  
_gaq.push(['_trackPageview']);  
(function() {    var ga = document.createElement('script'); 
	ga.type = 'text/javascript'; ga.async = true;    
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';    
	var s = document.getElementsByTagName('script')[0]; 
	s.parentNode.insertBefore(ga, s);  
})();

// Do the magic
$(document).ready(function(e) {

// URL rewritter
var url_rewrite= function(tag,type){
  if (type == "root"){
    window.history.pushState(null, null, tag);
  } else if (type == "reset"){
    window.history.pushState(null, null, "/");
  }
}

// Get URL tag
var pathname = window.location.pathname;
var urlTag = pathname.split('/')[1];

// Get language from Browser
var lang;
var browserLang = navigator.language || navigator.userLanguage;
var urlTagsNames = {};

// Core
var loadPage = function(a){
	$("div[id*='page']").hide();
	$('#page' + a).show();	
}

// Go to page with url
var go_to_page= function(){
	if (urlTag == "concept") {
      $('#concept_link').trigger('click');
    }
   	if (urlTag == "centres" || urlTag == "centra" || urlTag == "centers") {
      $('#centres_link').trigger('click');
    }
    if (urlTag == "tarifs" || urlTag == "prices" || urlTag == "prijs") {
      $('#tarifs_link').trigger('click');
    }
    if (urlTag == "soins" || urlTag == "treatments" || urlTag == "verzorgingen") {
      $('#soins_link').trigger('click');
    }
   	if (urlTag == "spa") {
      $('#spa_link').trigger('click');
    }
    if (urlTag == "contact") {
      $('#contact_link').trigger('click');
    }

}

// Define rewriting names
var urlTagsRedifine = function(){
	urlTagsNames = {};
	if (lang == "fr"){
		urlTagsNames['centres'] = "centres";
		urlTagsNames['tarifs'] = "tarifs";
		urlTagsNames['soins'] = "soins";

	} else if (lang == "en"){
		urlTagsNames['centres'] = "centers";
		urlTagsNames['tarifs'] = "prices";
		urlTagsNames['soins'] = "treatments";
	} else if (lang == "nl"){
		urlTagsNames['centres'] = "centra";
		urlTagsNames['tarifs'] = "prijs";
		urlTagsNames['soins'] = "verzorgingen";
	}
}

// Get Page title
var getPageTitle = function(){
	if (lang == "fr"){
		return "Wax-Zone // Institut de beauté";
	} else if (lang == "en"){
		return "Wax-Zone // Beauty Center";
	} else if (lang == "nl"){
		return "Wax-Zone // Schoonheidssalon";
	}
}


// Triggers
$('#home_link').click(function(){
	loadPage(1);
	_gaq.push(['_trackEvent', 'page_home', 'load']);
	url_rewrite("","reset");
});
$('#concept_link').click(function(){
	loadPage(2);
	_gaq.push(['_trackEvent', 'page_concept', 'load']);
	url_rewrite("concept","root");
});

$('#centres_link').click(function(){
	loadPage(3);
	_gaq.push(['_trackEvent', 'page_centres', 'load']);
	url_rewrite(urlTagsNames['centres'],"root");
});

$('#tarifs_link').click(function(){
	loadPage(4);
	_gaq.push(['_trackEvent', 'page_tarifs', 'load']);
	url_rewrite(urlTagsNames['tarifs'],"root");
});

$('#soins_link').click(function(){
	loadPage(5);
	_gaq.push(['_trackEvent', 'page_soins', 'load']);
	url_rewrite(urlTagsNames['soins'],"root");
});

$('#soins_link').mouseover(function(){

});

$('#spa_link').click(function(){
	loadPage(6);
	_gaq.push(['_trackEvent', 'page_spa', 'load']);
	url_rewrite("spa","root");
});

$('#contact_link').click(function(){
	loadPage(7);
	_gaq.push(['_trackEvent', 'page_contact', 'load']);
	url_rewrite("contact","root");
});

$('#job2_link').click(function(){
	loadPage();
	_gaq.push(['_trackEvent', 'page_contact', 'load']);
	url_rewrite("contact","root");
});

$('#contact_link').click(function(){
	loadPage();
	_gaq.push(['_trackEvent', 'page_contact', 'load']);
	url_rewrite("contact","root");
});

$('#lang_en').click(function(){
	changeLanguage("en");
	$('#lang_fr, #lang_nl').removeClass('pink');
	$('#lang_en').addClass('pink');
	$('#newsletterSubmit').val('Subscribe');
	$('#signup_email').attr("placeholder", "you@example.com");
	_gaq.push(['_trackEvent', 'lang_en', 'load']);
	lang = "en";
	urlTagsRedifine();
	document.title = getPageTitle();
});

$('#lang_fr').click(function(){
	changeLanguage("fr");
	$('#lang_en, #lang_nl').removeClass('pink');
	$('#lang_fr').addClass('pink');
	$('#newsletterSubmit').val("S'inscrire");
	$('#signup_email').attr("placeholder", "vous@exemple.com");
	_gaq.push(['_trackEvent', 'lang_fr', 'load']);
	lang = "fr";
	urlTagsRedifine();
	document.title = getPageTitle();
});

$('#lang_nl').click(function(){
	changeLanguage("nl");
	$('#lang_fr, #lang_en').removeClass('pink');
	$('#lang_nl').addClass('pink');
	$('#newsletterSubmit').val("Registreren");
	$('#signup_email').attr("placeholder", "u@example.com");
	_gaq.push(['_trackEvent', 'lang_nl', 'load']);
	lang = "nl";
	urlTagsRedifine();
	document.title = getPageTitle();
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
		_gaq.push(['_trackEvent', 'newsletter_subscription', 'load']);
		$('#newsletter').hide();
  		$('#newsletter_confirm').show();
	  
	}

});

// Force language on load
if (browserLang == "fr" || browserLang == "en" || browserLang == "nl"){
	lang = browserLang;
} else {
	lang = "en";
}
_gaq.push(['_trackEvent', 'lang_'+lang, 'load']);
urlTagsRedifine();
$('#lang_'+lang).trigger('click');

// Go to page if url tag
go_to_page();

// Change page title regarding language
document.title = getPageTitle();

});
