/**
 * @author Emre Deniz <https://github.com/EmreDenizz>
*/

window.onload = function() {
    
    var title_div = $('#titleSection');
    
    // Create "FETCH ASIN" button
    var button =  document.createElement("button");
    button.innerHTML = "FETCH ASIN";
    button.id = "addToAsinListButton";
    button.type = "submit";
    button.name = "formBtn";
    button.style.fontSize = '19px';
    button.style.fontWeight = 'bold';
    button.style.padding = '10px 10px';
    button.style.color = 'white';
    button.style.background = 'green';
    button.style.border = '1px solid green';
    
    title_div.prepend(button);
    
    // Get ASIN from current URL
    var current_url = window.location.toString();
    var index = current_url.indexOf("/dp/");
    var asin = current_url.substr(index+4, 10);
    
    // Button click event
    $("#addToAsinListButton").click(function() {
	chrome.storage.local.get(['asin_list'], function(result) {
	    var value = result.asin_list === "" ? asin : result.asin_list + "," + asin;
	    chrome.storage.local.set({'asin_list': value}, function() {});
	    $("#addToAsinListButton").attr("disabled", true);
	    $("#addToAsinListButton").css({"opacity": "0.5", "pointer-events": "none"});
	    $("#addToAsinListButton").text("Fetched");
	});
    });
    
}
