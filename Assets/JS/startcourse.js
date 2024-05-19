$(window).ready (function()

{
    $(".button").click(function() {
        $('.circle-1').toggleClass('progress-20');
        $('.circle-2').toggleClass('progress-40');
        $('.circle-3').toggleClass('progress-60');
        $('.circle-4').toggleClass('progress-80');
        $('.circle-5').toggleClass('progress-100');
    });
});