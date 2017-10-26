/**
 * @Author: Akash Ahmed
 * @Date:   Sep 07, 2017 10:30:40 +05:30
 * @Last modified by:   Akash Ahmed
 * @Last modified time: Oct 07, 2017 00:26:11 +05:30
 */

console.log("In content_script");

// MutationObserver -- to observe changes in Page
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log("observing...");
        controlTheFlow();
    });
});

// observe
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
});

// disconnect
// observer.disconnect();

function controlTheFlow() {
    /* Old YouTube */
    // 'Up Next' Section
    var upNextOld = document.getElementById("watch7-sidebar-contents"),
        // 'Comments' Section
        commentsOld = document.getElementById("watch-discussion"),
    /* New YouTube */
        // 'Up Next' Section
        upNextNew = document.getElementById("related"),
        // 'Comments' Section
        commentsNew = document.getElementById("comments");

    if (upNextOld != null && commentsOld != null) {
        console.log("Old YouTube: Getting Hidden");
        observer.disconnect();
        hideSections(upNextOld, commentsOld);
    }
    else if (upNextNew != null && commentsNew != null) {
        console.log("New YouTube: Getting Hidden");
        observer.disconnect();
        hideSections(upNextNew, commentsNew);
    }
    else {
        console.log("Couldn't find yet");
    }
}

function hideSections(uN, c) {
    uN.style.display = 'none';
    c.style.display = 'none';
}
