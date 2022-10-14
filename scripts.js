// $(document).ready(function () {
//     if (parseInt($('body')[0].scrollHeight.slice(0, -2)) > parseInt($('body')[0].clientHeight.slice(0, -2))) {
//         $('#footer').css('position', 'absolute');
//     }
// });

// document.onreadystatechange = ev => {
//     if (document.readyState == 'complete') {
//         if (document.body.scrollHeight > document.body.clientHeight) {
//             document.getElementById('footer').style.position = 'absolute'
//         }
//     }
// }

function openFind() {
    let nav = document.getElementById('navigation-buttons-0')
    let row = document.getElementById('find-row')

    nav.classList.remove('find-button-hide', 'find-button-show')
    row.classList.remove('find-button-show', 'find-button-hide')

    if (!nav.classList.contains('hidden')) {
        nav.classList.add('find-button-hide')
        setTimeout(() => {
            nav.classList.toggle('hidden')
            row.classList.toggle('hidden')
            row.classList.add('find-button-show')
        }, 799)
    }
    else {
        row.classList.add('find-button-hide')
        setTimeout(() => {
            row.classList.toggle('hidden')
            nav.classList.toggle('hidden')
            nav.classList.add('find-button-show')
        }, 799)
    }
}
