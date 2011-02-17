var imgURL = chrome.extension.getURL("google-goatse.gif");
var hplogo = document.getElementById("hplogo");
if(hplogo==null) hplogo = document.getElementById("logo");

if(hplogo.src == undefined) {
	// Div background, eg google.be
	hplogo.style.background = "url("+imgURL+") no-repeat";
}else{
	// Image, google.com
	hplogo.src = imgURL;
}