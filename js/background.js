/**
 * @Author: Akash Ahmed
 * @Date:   Sep 07, 2017 06:31:41 +05:30
 * @Last modified by:   Akash Ahmed
 * @Last modified time: Sep 24, 2017 13:57:26 +05:30
 */

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var urlChanged = changeInfo.url;
    if (typeof urlChanged !== 'undefined' && urlChanged.indexOf('https://www.youtube.com/watch?') !== -1) {
        console.log(changeInfo.url);
        chrome.tabs.executeScript(null, {
            file: "js/content_script.js"
        });
    }
});
