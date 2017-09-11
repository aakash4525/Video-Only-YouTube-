console.log("In content_script");
var config = {
    "operation": ["show", "hide"],
    "section": ["comments", "upNext"]
};
if (typeof operation === 'undefined') {
    operation = config.operation[1];
}
if (typeof section === 'undefined') {
    section = config.section[0];
}

// Old YouTube
if (document.getElementById("watch7-sidebar-contents") != null) {
    // 'Up Next' Section
    var upNext = document.getElementById("watch7-sidebar-contents"),
        // 'Comments' Section
        comments = document.getElementById("watch-discussion");
}
// New YouTube
else {
    // 'Up Next' Section
    var upNext = document.getElementById("related"),
        // 'Comments' Section
        comments = document.getElementById("comments");
}

// show or hide Sections
function showHideSections(uN, c) {

}
