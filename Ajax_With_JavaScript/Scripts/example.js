$(function () {
    var jsonData; 
    $.ajax({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json"); //type control
            }
        }
    });

    function loadTimetable() {
        $.getJSON('EventList')
            .done(function (data) {
                jsonData = JSON.parse(data); 
            }).fail(function () {
                $('#event').html('Sorry! We could not load the timetable at the moment');
            });
    }

    loadTimetable();

    $('#content').on('click', '#event a', function (e) {
        e.preventDefault();
        var idValue = this.id.toUpperCase(); //for looking in json

        var newContent = "";

        for (var i = 0; i < jsonData[idValue].length; i++) {
            newContent += '<li><span class="time">' + jsonData[idValue][i].time + '</span>';
            newContent += '<a href="Description">'; //add here #3d-model (for load-method) don't working
            newContent += jsonData[idValue][i].title + '</a></li>';
        }
        $('#sessions').html('<ul>' + newContent + '</ul>').hide().fadeIn('slow');
        $('#event a.current').removeClass();
        $(this).addClass('current');

        $('#details').empty(); //or .text('')
    });

    $('#content').on('click', '#sessions li a', function (e) {
        e.preventDefault();
        var fragmentAddress = this.href;
        var $key=$(this).text().replace(/ /g,'-'); //for looking in html because in json " ", but in html id "-"

        $('#details').load(fragmentAddress + ' #' + $key).hide().fadeIn('slow'); //view data from controller
        $('#sessions a.current').removeClass();
        $(this).addClass('current');
    });

    $('nav a').on('click', function (e) {
        e.preventDefault();
        var loadMethod = $(this).attr('class');
        var loadParam = $(this).attr('num');

        $('nav a.current').removeClass('current');
        $(this).addClass('current');

        $('#container').remove();
        $('#content').load(loadMethod + '?load=' + loadParam + ' #container').hide().fadeIn('slow');
        var to=1;
    });
});