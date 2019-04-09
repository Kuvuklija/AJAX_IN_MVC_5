$('#register').on('submit', function (e) {
    e.preventDefault();
    var details = $('#register').serialize();
    $.post('GetFormDataAjaxJS', details, function (data) {
        $('#register').html(data);
    });
});