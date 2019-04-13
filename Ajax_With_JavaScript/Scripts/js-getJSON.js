$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
    $.getJSON('GetAjaxJson')
        .done(function (data) {
            var d = new Date();
            var hrs = d.getHours();
            var mins = d.getMinutes();
            var msg = '<h2>Exchange Rates<h2>';
            $.each(data, function (key, val) {
                msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
            });
            msg += '<br>Last update: ' + hrs + ':' + (mins<10 ? "0"+mins:mins) + '<br>';
            $('#rates').html(msg);

        }).fail(function () {
            $('aside').empty().append('Sorry, we can\'t load rates');
        }).always(function () {
            var reload = '<a id="refresh" href="#">';
            reload += '<img src="/img/refresh.png" alt="refresh" /></a>';
            $('#reload').html(reload);

            $('#refresh').on('click', function (e) {
                e.preventDefault();
                alert('You updating exchange rates!');
                loadRates();
            });
        });
    setTimeout("loadRates()", 300);
};

loadRates();