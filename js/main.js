$('.open-menu-btn').on('click', function () {
    $('header').addClass('menu-is-open');
})

$('.close-menu-btn').on('click', function () {
    $('header').removeClass('menu-is-open');
})

if ($('select').length) {
    $('select').selectpicker();
}

$("form").parsley({
    triggerAfterFailure: 'input changed.bs.select'
})

$('.custom-file input').on('change', function (e) {
    //get the file name
    var fileName = e.target.files[0].name
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
    $(this).next('.custom-file-label').addClass('change')
})