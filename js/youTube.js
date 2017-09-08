console.log("Hello in Extension");

// Get Current Tab URL
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var tabUrl = tabs[0].url;
    var isTabOfYouTube = false;
    if (tabUrl.indexOf('https://www.youtube.com/watch?') !== -1) {
        isTabOfYouTube = true;
    }
    executePage(isTabOfYouTube);
});

function executePage(isTabOfYouTube) {
    console.log(isTabOfYouTube);
    if (!isTabOfYouTube) {
        document.getElementById("div-msg").style.display = "block";
        document.getElementById("div-container").style.display = "none";
        return;
    }
    else {
        document.getElementById("div-msg").style.display = "none";
        document.getElementById("div-container").style.display = "block";
    }

    var btnRemove = document.getElementById("btn-hide"),
        btnShow = document.getElementById("btn-show"),
        cmt = document.getElementById("watch-discussion"),
        nxt = document.getElementById("watch7-sidebar-contents");

    btnRemove.addEventListener("click", function(e) {
        var code;
        if (cmt.checked && nxt.checked) {
            hideAllSection();
        }
        else if (cmt.checked) {
            code = 'var comments = document.getElementById("watch-discussion"); ' +
                    'if (comments) { comments.parentNode.removeChild(comments); }';
            hideSections(code);
        }
        else if (nxt.checked) {
            code = 'var upNext = document.getElementById("watch7-sidebar-contents"); ' +
                    'if (upNext) { upNext.parentNode.removeChild(upNext); }';
            hideSections(code);
        }
    }, false);
}

function hideSections(codeToExec) {
    chrome.tabs.executeScript({
        code: codeToExec
    });
}

function hideAllSection() {
    chrome.tabs.executeScript(null, {file: "js/content_script.js"});
}
