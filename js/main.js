$('.open-menu-btn').on('click', function (){
    $('header').addClass('menu-is-open');
})
$('.close-menu-btn').on('click', function (){
    $('header').removeClass('menu-is-open');
})
$('select').selectpicker();

$("form").parsley({
    triggerAfterFailure: 'input changed.bs.select'
})