$(document).ready(function () {
    if (parseInt($('body')[0].scrollHeight.slice(0, -2)) > parseInt($('body')[0].clientHeight.slice(0, -2))) {
        $('#footer').css('position', 'absolute');
    }
});

function openFind() {
    $('#navigation-buttons-0').removeClass('find-button-hide');
    $('#navigation-buttons-0').removeClass('find-button-show');
    $('#find-row').removeClass('find-button-show');
    $('#find-row').removeClass('find-button-hide');

    if (!$('#navigation-buttons-0').hasClass('hidden')) {
        $('#navigation-buttons-0').addClass('find-button-hide');
        setTimeout(() => {
            $('#navigation-buttons-0').toggleClass('hidden');
            $('#find-row').toggleClass('hidden');
            $('#find-row').addClass('find-button-show');
        }, 799);        
    } else {
        $('#find-row').addClass('find-button-hide');
        console.log('hide');
        setTimeout(() => {
            $('#find-row').toggleClass('hidden');
            $('#navigation-buttons-0').toggleClass('hidden');
            $('#navigation-buttons-0').addClass('find-button-show');
        }, 799);
    }
}