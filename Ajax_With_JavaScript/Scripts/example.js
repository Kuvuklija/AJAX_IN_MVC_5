$(function () {
    var times;
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
                times = data;
            }).fail(function () {
                $('#event').html('Sorry! We could not load the timetable at the moment');
            });
    }

    loadTimetable();

    $('#content').on('click', '#event a', function (e) {
        e.preventDefault();
        var idValue = this.id.toUpperCase(); //for looking in json

        var newContent = "";
        for (var i = 0; i < times[idValue].length; i++) {
            newContent+='<li><span class="time">'+times[idValue].[i].time+'</span>';
        }
    });
});