$(document).ready(function() {
    $('.slides').slick({
        autoplay: true,
        arrows: false
    });
});

// $(".alternative-menu").change(function() {
//     $selected = $(".alternative-menu option:selected");
//     window.location.href = "http://www.lingulo.com/" +$selected.val();
// });

// (
//     function ($, window, document, undefined) {
//         'use strict';
//         $(function () {
//             $("#mobileMenu").hide();
//             $(".toggleMobile").click(function() {
//                 $(this).toggleClass("active");
//                 $("#mobileMenu").slideToggle(500);
//             });
//         });
//         $(window).on("resize", function() {
//             if($(this).width() > 500) {
//                 $("#mobileMenu").hide();
//                 $(".toggleMobile").removeClass("active");
//             }
//         });
//     }
// )
// (jQuery, window, document);

// $(function () {
    $("#mobileMenu").hide();
    $(".toggleMobile").click(function() {
        $(this).toggleClass("active");
        $("#mobileMenu").slideToggle(500);
    });
// });
$(window).on("resize", function() {
    if($(this).width() > 500) {
        $("#mobileMenu").hide();
        // $(".toggleMobile").removeClass("active");
    }
});