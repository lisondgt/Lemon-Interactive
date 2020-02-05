// Initialize library
const observer = lozad('.lozad', {
    loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add('loaded');
    }
});
observer.observe();

// NAVBAR
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    $("#content").toggleClass("none");
    $("#footer").toggleClass("none");
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

// DROPDOWN MENU
jQuery(document).ready(function () {
    "use strict";
    var $ = jQuery.noConflict();

    function showMenu() {
        $(this).removeClass("drop-collapsed");
        $(this).addClass("open");
    }
    function hideMenu() {
        $(this).removeClass("open");
        var $dropdown = $(".dropdown");

        $dropdown.each(function () {
            $(this).addClass("drop-collapsed");
        });
    }


    var $dropdown = $(".dropdown");

    $dropdown.each(function () {
        var $this = $(this);

        var $dropmenu = $this.find(".dropdown-menu");
        $dropmenu.css("height", $dropmenu.outerHeight());
        $this.addClass("drop-collapsed");
    });


    // dropdown menu hover intent
    var hovsettings = {
        timeout: 0,
        interval: 0,
        over: showMenu,
        out: hideMenu
    };

    $(".dropdown").hoverIntent(hovsettings);



});

// SEARCH
function searchAc(){
    document.getElementById('toggle-search').style.display = "block";
    document.getElementById('content').style.display = "none";
    document.getElementById('footer').style.display = "none";
}
      
    function searchKapat(){
    document.getElementById('toggle-search').style.display = "none";
    document.getElementById('content').style.display = "block";
    document.getElementById('footer').style.display = "block";
}