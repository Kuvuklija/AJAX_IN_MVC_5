$('nav a').on('click', function (e) {
    e.preventDefault();
    var url = this.href;
    var $content = $('#content'); //cash

    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    $('#container').remove();

    $.ajax({
        type: "POST",
        url: url,
        timeout: 2000,
        beforeSend: function () {
            $content.append('<div id="load">Loading...</div>');
        },
        complete: function () {
            $('#load').remove();
        },
        success: function (data) {
            $('#content').html($(data).hide().fadeIn(2000)); //$(data).find('#container') -- don't working
        },
        fail: function () {
            $('#content').html('<div class="loading">Please try again soon.</div>');
            alert("Fuck!");
        }
    });
});