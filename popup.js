/**
 * @author Emre Deniz <https://github.com/EmreDenizz>
*/

$(function(){
    
    // Fill asin list from local storage
    chrome.storage.local.get(['asin_list'], function(result) {
	var asin_list_raw = result.asin_list;
	var asin_list = asin_list_raw.split(",");
	for (var i = 0; i < asin_list.length; i++) {
	    $("#asin_list").append('<span class="asin">'+asin_list[i]+'</span><br/>');
	}
    });
    
    // Clear list button event
    $('#clear_button').click(function(){
        $('.list span').remove();
        navigator.clipboard.writeText("");
	
        $("#message").html("<span class='text-color-black'>ASIN list cleared.</span>");
	
	chrome.storage.local.set({'asin_list': ''}, function() {});
    });
    
    // Copy list button event
    $('#copy_button').click(function(){
        var asin_list = "";
        $(".asin").each(function(){
            var asin = $(this).text();
            asin_list += asin + "\n";
        });
        
        navigator.clipboard.writeText(asin_list);
        
        $("#message").html("<span class='text-color-green'>ASIN list copied.</span>");
    });
    
});
