console.log("In content_script");
var upNext = document.getElementById("watch7-sidebar-contents");
var comments = document.getElementById("watch-discussion");
// remove Elements
if (upNext) {
    // upNext.parentNode.removeChild(upNext);
    upNext.style.display = "none";
}
if (comments) {
    // comments.parentNode.removeChild(comments);
    comments.style.display = "none";
}


// change the style of 'page-container'
// var pId = document.getElementById("page-container");
// pId.style.display = '-webkit-box';
// pId.style.textAlign = '-webkit-center';


// JQuery
// $("#watch7-sidebar-contents").remove();
// $("#watch-discussion").remove();
// $("#page-container").css({'display': '-webkit-box', 'text-align': '-webkit-center'});
