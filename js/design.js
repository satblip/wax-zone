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



});