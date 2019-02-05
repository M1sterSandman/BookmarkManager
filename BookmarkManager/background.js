window.onload = function(){

    // Browser action click event
    chrome.browserAction.onClicked.addListener(function () {
        openNewTab();
    });

    function openNewTab() {
        chrome.tabs.create({
            url: 'chrome://newtab',
        });
    }

};