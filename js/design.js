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

//make menu scroll
var nav = $('.menu_container');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
});
var logo = $('.logo');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            logo.addClass("viewlogo");
        } else {
            logo.removeClass("viewlogo");
        }
});

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
$('#home_link, #home2_link').click(function(){
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
	$('#submenu').show();
});

$('#submenu').mouseover(function(){
	$('#submenu').show();
});

$('#submenu').mouseout(function(){
	$('#submenu').hide();
});

$('#soins_link').mouseout(function(){
	$('#submenu').hide();
});

$('#spa_link, #spa2_link, #spa3_link').click(function(){
	loadPage(6);
	_gaq.push(['_trackEvent', 'page_spa', 'load']);
	url_rewrite("spa","root");
});

$('#misen_link, #misen2_link').click(function(){
	loadPage(18);
	_gaq.push(['_trackEvent', 'page_spa', 'load']);
	url_rewrite("misencil","root");
});

$('#contact_link').click(function(){
	loadPage(7);
	_gaq.push(['_trackEvent', 'page_contact', 'load']);
	url_rewrite("contact","root");
});

$('#phyto2_link, #phyto_link').click(function(){
	loadPage(8);
	_gaq.push(['_trackEvent', 'page_phytomer', 'load']);
	url_rewrite("phytomer","root");
});

$('#yonka2_link, #yonka_link').click(function(){
	loadPage(9);
	_gaq.push(['_trackEvent', 'page_yonka', 'load']);
	url_rewrite("yonka","root");
});

$('#opi_link').click(function(){
	loadPage(10);
	_gaq.push(['_trackEvent', 'page_opi', 'load']);
	url_rewrite("opi","root");
});

$('#soinscorps_link').click(function(){
	loadPage(11);
	_gaq.push(['_trackEvent', 'page_soins_corps', 'load']);
	url_rewrite("soins_corps","root");
});

$('#color_link, #color2_link').click(function(){
	loadPage(12);
	_gaq.push(['_trackEvent', 'page_color', 'load']);
	url_rewrite("color","root");
});

$('#pupa2_link, #pupa_link').click(function(){
	loadPage(13);
	_gaq.push(['_trackEvent', 'page_pupa', 'load']);
	url_rewrite("pupa","root");
});

$('#nova2_link, #nova_link').click(function(){
	loadPage(14);
	_gaq.push(['_trackEvent', 'page_novaskin', 'load']);
	url_rewrite("novaskin","root");
});

$('#equa2_link, #equa_link').click(function(){
	loadPage(15);
	_gaq.push(['_trackEvent', 'page_equavie', 'load']);
	url_rewrite("equavie","root");
});

$('#job2_link').click(function(){
	loadPage(16);
	_gaq.push(['_trackEvent', 'page_jobs', 'load']);
	url_rewrite("jobs","root");
});

$('.mentions').click(function(){
	loadPage(17);
	_gaq.push(['_trackEvent', 'page_mentions', 'load']);
});

$('#lang_en, #lang2_en').click(function(){
	changeLanguage("en");
	$("#lang_fr, #lang2_fr, #lang_nl, #lang2_nl").removeClass('pink');
	$('#lang_en, #lang2_en').addClass('pink');
	$('#newsletterSubmit').val('Subscribe');
	$('#signup_email, #contact_mail').attr("placeholder", "you@example.com");
	$('#contact_submit').val('Submit');
	$('#contact_name_label').text('Name:');
	$('#contact_name').attr("placeholder", "Your name");
	$('#contact_mail_label').text('Email:');
	$('#contact_newsletter_label').text("Subscribe to newsletter");
	_gaq.push(['_trackEvent', 'lang_en', 'load']);
	lang = "en";
	urlTagsRedifine();
	document.title = getPageTitle();
});

$('#lang_fr, #lang2_fr').click(function(){
	changeLanguage("fr");
	$("#lang_en, #lang2_en, #lang_nl, #lang2_nl").removeClass('pink');
	$('#lang_fr, #lang2_fr').addClass('pink');
	$('#newsletterSubmit').val("S'inscrire");
	$('#signup_email, #contact_mail').attr("placeholder", "vous@exemple.com");
	$('#contact_submit').val('Envoyer');
	$('#contact_name_label').text('Nom :');
	$('#contact_name').attr("placeholder", "Votre nom");
	$('#contact_mail_label').text('Email :');
	$('#contact_newsletter_label').text("S'incrire à la Newsletter");
	_gaq.push(['_trackEvent', 'lang_fr', 'load']);
	lang = "fr";
	urlTagsRedifine();
	document.title = getPageTitle();
});

$('#lang_nl, #lang2_nl').click(function(){
	changeLanguage("nl");
	$("#lang_fr, #lang2_fr, #lang_en, #lang2_en").removeClass('pink');
	$('#lang_nl, #lang2_nl').addClass('pink');
	$('#newsletterSubmit').val("Registreren");
	$('#signup_email, #contact_mail').attr("placeholder", "u@example.com");
	$('#contact_submit').val('Opsturen');
	$('#contact_name_label').text('Naam :');
	$('#contact_name').attr("placeholder", "Uw naam");
	$('#contact_mail_label').text('Email :');
	$('#contact_newsletter_label').text("Registreer hier voor de nieuwsbrief");
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

// Contact form
$("#contactform").submit(function(e) {
	e.preventDefault();
	if(!isValidEmailAddress($('#contact_mail').val())) {
		$('#contact_mail').addClass('field_with_errors');
	} else {
		$('#contact_mail').removeClass('field_with_errors');
		if ($('#contact_newsletter').is(":checked")){
			if (lang == "fr"){
				newsletter_url = "https://madmimi.com/signups/subscribe/96405";
			} else if (lang == "nl"){
				newsletter_url = "https://madmimi.com/signups/subscribe/96405";
			} else {
				newsletter_url = "https://madmimi.com/signups/subscribe/96405";
			}
			
		    $.ajax(newsletter_url, {
			    type: 'POST',
			    data: {"signup[email]": $('#signup_email').val()},
			    success: function(response) {
			        
			    },
			    error: function(err){
			    }
			});
			_gaq.push(['_trackEvent', 'newsletter_subscription', 'load']);
		}
		// Submit message
		_gaq.push(['_trackEvent', 'Send_message_with_contact', 'load']);
		var chat_name = $('#contact_name').val();
		var chat_email = $('#contact_mail').val();
		var chat_message = $('#contact_message').val();
		e.preventDefault();
		$('#contactform').hide();
		$.ajax('http://ec2-54-201-155-200.us-west-2.compute.amazonaws.com/mailer/', {
	      type: 'GET',
	      data: { "name": chat_name,
	        "email": chat_email,
	        "message": chat_message
	      },
	      success: function(response) {
	        $('#contactform_confirm').fadeIn();
	        console.log(response);
	        return false;
	      },
	      error: function(err){
	        return false;
	      }
	    });
	  
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
