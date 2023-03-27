/**
 * @author Emre Deniz <https://github.com/EmreDenizz>
*/

// Define list string on local chrome storage
$(function(){
    chrome.storage.local.set({'asin_list': ''}, function() {});
});
