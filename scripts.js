$(document).ready(function () {
    if (parseInt($('body')[0].scrollHeight.slice(0, -2)) > parseInt($('body')[0].clientHeight.slice(0, -2))) {
        $('#footer').css('position', 'absolute');
    }

    let buttonToTop = docuemnt.getElementById('button-to-top');
    buttonToTop.offsetWidth = window.internalWidth - 32;
    buttonToTop.offsetHeight = window.internalHeight - 32;

    buttonToTop.addEventListener('scroll', ev => {
        if (document.scrollHeight > '250px') {
            buttonToTop.classList.remove('hidden');
        } else {
            buttonToTop.classList.add('hidden');
        }
    })
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