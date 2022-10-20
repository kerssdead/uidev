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

document.onreadystatechange = ev => {
    if (document.readyState == 'complete') {
        document.querySelectorAll('.scroll-button').forEach(v => {
            v.addEventListener('click', ev => {
                scrollToTop()
            })
        })
    }
}

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

function slider() {
    let items = document.querySelectorAll('.image-slider__item')
    let buttons = []
    let buttonsContainer = document.querySelector('.image-slider-buttons')

    console.log(items)

    let lastIndex = 0,
        current = 0


    for (let i = 0; i < items.length; i++) {
        let newButton = document.createElement('div')
        newButton.classList.add('image-slider__button')
        newButton.onclick = ev => {
            let currentButton = document.querySelector('.image-slider__button--active')
            currentButton.classList.remove('image-slider__button--active')            
            newButton.classList.add('image-slider__button--active')
            newButton.dataset.index = i
            if (lastIndex != -1) {
                items[lastIndex].classList.remove('image-slider__item--active')
                buttons[lastIndex].classList.remove('image-slider__button--active')
            }
            lastIndex = i
            items[lastIndex].classList.add('image-slider__item--active')
            buttons[lastIndex].classList.add('image-slider__button--active')
            current = lastIndex
        }
        buttons.push(newButton)
    }

    buttons.sort((a, b) => {
        return a.dataset.index - b.dataset.index
    }).forEach(v => {
        buttonsContainer.appendChild(v)
    })

    items[0].classList.add('image-slider__item--active')
    buttons[0].classList.add('image-slider__button--active')

    setInterval(() => {
        buttons[current].click()
        current = (current + 1) % items.length
    }, 10 * 1000)
}


function toggleModal() {
    document.querySelector('.modal-container').classList.toggle('hidden')
}

function scrollToTop() {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    })
}