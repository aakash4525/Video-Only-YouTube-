console.log("In content_script");
var config = {
    "operation": ["show", "hide"],
    "section": ["all", "comments", "upNext"]
};
var userDriven = true;

if (typeof operation === 'undefined') {
    operation = config.operation[1];
    userDriven = false;
}
if (typeof section === 'undefined') {
    section = config.section[0];
}

// MutationObserver -- to observe changes in Page
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log("observing...");
        // if (mutation.type == 'childList') {
        controlTheFlow();
        // }
    });
});

if (userDriven) {
    controlTheFlow();
}
else {
    // observe
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
}

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
        showHideSections(upNextOld, commentsOld);
    }
    else if (upNextNew != null && commentsNew != null) {
        console.log("New YouTube: Getting Hidden");
        observer.disconnect();
        showHideSections(upNextNew, commentsNew);
    }
    else {
        console.log("Couldn't find yet");
    }
}

// show or hide Sections
function showHideSections(uN, c) {
    // Hide
    if (operation == config.operation[1]) {
        // ALL
        if (section == config.section[0]) {
            uN.style.display = 'none';
            c.style.display = 'none';
        }
        // COMMENTS
        else if (section == config.section[1]) {
            c.style.display = 'none';
        }
        // UP NEXT
        else if (section == config.section[2]) {
            uN.style.display = 'none';
        }
    }
    // Show
    if (operation == config.operation[0]) {
        // ALL
        if (section == config.section[0]) {
            uN.style.display = 'block';
            c.style.display = 'block';
        }
        // COMMENTS
        else if (section == config.section[1]) {
            c.style.display = 'block';
        }
        // UP NEXT
        else if (section == config.section[2]) {
            uN.style.display = 'block';
        }
    }
}
