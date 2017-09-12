console.log("Hello in Extension");
var config = {
    "operation": ["show", "hide"],
    "section": ["comments", "upNext"]
};
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
        cmt = document.getElementById("input-comments"),
        nxt = document.getElementById("input-up-next");

    // Hide button click
    btnHide.addEventListener("click", function(e) {
        var code = "var operation = '" + config.operation[1] + "'";
        if (cmt.checked && nxt.checked) {
            executeShowHide(code);
        }
        else if (cmt.checked) {
            code += "var section = '" + config.section[0] + "'";
            executeShowHide(code);
        }
        else if (nxt.checked) {
            code += "var section = '" + config.section[1] + "'";
            executeShowHide(code);
        }
    }, false);

    // Show button click
    btnShow.addEventListener("click", function(e) {
        var code = "var operation = '" + config.operation[0] + "'";
        if (cmt.checked && nxt.checked) {
            executeShowHide(code);
        }
        else if (cmt.checked) {
            code += "var section = '" + config.section[0] + "'";
            executeShowHide(code);
        }
        else if (nxt.checked) {
            code += "var section = '" + config.section[1] + "'";
            executeShowHide(code);
        }
    }, false);
}

function executeShowHide(codeToExec) {
    chrome.tabs.executeScript({
        code: codeToExec
    }, function() {
        chrome.tabs.executeScript({file: "js/content_script.js"});
    });
}
