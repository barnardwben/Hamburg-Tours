$(function () {
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
})

function water() {
    document.getElementById("overlay").style.backgroundColor = "rgba(1, 1, 1, .54)";
}

function letGo() {
    document.getElementById("overlay").style = "none";
}