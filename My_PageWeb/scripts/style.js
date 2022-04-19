var $headline = $(".headline"),
    $inner = $(".inner"),
    $nav = $("nav"),
    navHeight = 75;

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop(),
        headlineHeight = $headline.outerHeight() - navHeight,
        navOffset = $nav.offset().top;

    $headline.css({
        opacity: 1 - scrollTop / headlineHeight
    });
    $inner.children().css({
        transform: "translateY(" + scrollTop * 0.4 + "px)"
    });
    if (navOffset > headlineHeight) {
        $nav.addClass("scrolled");
    } else {
        $nav.removeClass("scrolled");
    }
});

const homelink = () =>{
    console.log("home")
    $("#homelink").ready(function(){
        $("html, body").delay(1000).animate({
            scrollTop: $('#home').offset().top 
        }, 1000);
    });
}
const sobreMilink = () =>{
    console.log("sobreMilink")
    $("#sobreMilink").ready(function(){
        $("html, body").delay(200).animate({
            scrollTop: $('#sobreMi').offset().top 
        }, 1000);
    });
}
const contactolink = () =>{
    console.log("contactolink")
    $("#sobreMilink").ready(function(){
        $("html").delay(200).animate({
            scrollTop: $('#contacto').offset().top 
        }, 1000);
    });
}



