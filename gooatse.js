var imgURL = chrome.extension.getURL("google-goatse.gif");
var imgResultsURL = chrome.extension.getURL("google-goatse-results.png");

var hplogo = document.getElementById("hplogo");
if(hplogo==null) hplogo = document.getElementById("logo");

if(hplogo.src != undefined) {
	// Image, google.com
	hplogo.src = imgURL;
}else if(hplogo.href != undefined) {
	// Search results page
	hplogo.children[0].src = imgResultsURL;
}else{
	// Div background, eg google.be
	hplogo.style.background = "url("+imgURL+") no-repeat";
}