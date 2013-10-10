$(document).ready(function() {
    $("#count").countdown({
        //to change lunch date just replace the current date with yours .
        date: "october 12, 2013, 09:00",
        //html code in count div here.
        htmlTemplate: $('#count').html()
    });
});
