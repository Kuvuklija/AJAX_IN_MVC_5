var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="img/t-gray.png" id="gray" alt="серого цвета" /><p id="ajax1"></p></a></div><div class="third"><a href="http://example.org?tshirt=yellow"><img src="img/t-yellow.png" id="yellow" alt="желтого цвета" /><p id="ajax2"></p></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="img/t-green.png" id="green" alt="зеленого цвета" /><p id="ajax3"></p></a></div></div>';
$('#selector').append(vote);

$('#selector a').on('click', function (e) {
    e.preventDefault();
    var currentEl = e.target;
    var $img=$('#'+ currentEl.id);
    var parametersString = 'vote=' + currentEl.id;
    $.get('Home/AjaxJS', parametersString, function (data) {
        $img.next().html(data);
    });
});