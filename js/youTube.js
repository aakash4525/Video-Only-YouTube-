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

    var btnHide = document.getElementById("btn-hide"),
        btnShow = document.getElementById("btn-show"),
        cmt = document.getElementById("watch-discussion"),
        nxt = document.getElementById("watch7-sidebar-contents");

    // Hide button click
    btnHide.addEventListener("click", function(e) {
        var code;
        if (cmt.checked && nxt.checked) {
            code = 'document.getElementById("watch-discussion").style.display = "none"; ' +
                'document.getElementById("watch7-sidebar-contents").style.display = "none"; ';
            executeShowHide(code);
        }
        else if (cmt.checked) {
            code = 'document.getElementById("watch-discussion").style.display = "none"; ';
            executeShowHide(code);
        }
        else if (nxt.checked) {
            code = 'document.getElementById("watch7-sidebar-contents").style.display = "none"; ';
            executeShowHide(code);
        }
    }, false);

    // Show button click
    btnShow.addEventListener("click", function(e) {
        var code;
        if (cmt.checked && nxt.checked) {
            code = 'document.getElementById("watch-discussion").style.display = "block"; ' +
                'document.getElementById("watch7-sidebar-contents").style.display = "block"; ';
            executeShowHide(code);
        }
        else if (cmt.checked) {
            code = 'document.getElementById("watch-discussion").style.display = "block"; ';
            executeShowHide(code);
        }
        else if (nxt.checked) {
            code = 'document.getElementById("watch7-sidebar-contents").style.display = "block"; ';
            executeShowHide(code);
        }
    }, false);
}

function executeShowHide(codeToExec) {
    chrome.tabs.executeScript({
        code: codeToExec
    });
}
