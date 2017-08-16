var $h2 = $('h2'),
    $li = $('li');
$h2.next().hide();
$h2.hide().slideDown();

$li.hide().each(function(i) {
    $(this).delay(500 * i).fadeIn(500);
})

$h2.on('click', function() {

    if (!$h2.next().is(":visible")) {
        $h2.next().fadeIn(500);
    } else {
        $h2.next().fadeOut(500);
    }

});


$('ul').on('click', 'li', function() {

    $(this).toggleClass('complete');

});

$('ul').on(' mouseenter', 'li', function(e) {
    var $zmienna = $(this).children();
    $(this).children().animate({
        width: '+=40'
    }, 200);
});

$('ul').on('mouseleave', 'li', function() {
    $(this).children().animate({
        width: '-=40'
    }, 200);

});

$('ul').on('click', 'span', function() {
    $(this).parent().fadeOut(700, function() {
        $(this).remove();
    });

})

$('input[type="text"]').on('keypress', function(e) {
    if (e.keyCode == 13) {
        var input = $(this).val();
        $('ul').append('<li>' + input + '<span class=" del "></span></li>');
        $(this).val("");

    }
});