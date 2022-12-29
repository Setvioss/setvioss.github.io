/*const div = document.querySelector('div.logo');

const backdrop = document.querySelector('.backdrop');

div.addEventListener('click', () => {
    backdrop.classList.toggle('open')


    
})

backdrop.addEventListener('click', () => {
    backdrop.classList.toggle('open')
})*/

const burger_menu_icon = document.querySelector('.burger-menu_icon');
const header_nav = document.querySelector('.header-nav');
const header = document.querySelector('.main-header');

burger_menu_icon.addEventListener('click', () => {

    header_nav.classList.toggle('header-nav_open');
    header.classList.add('header_box-shadow');

})

const promo = document.querySelector('#promo');
const logo_container = document.querySelector('.logo-container');

document.addEventListener('scroll', () => {

    if (window.scrollY) {

        header.classList.add('header_box-shadow');

        header_nav.classList.remove('header-nav_open');

        header_nav.classList.add('delete-shadow');

    } else {
        header.classList.remove('header_box-shadow');
    }

})

const testimonials_button = document.querySelector('.testimonials-button');
const backdrop = document.querySelector('.backdrop');
const testimonials_modal = document.querySelector('.testimonials_modal');
const testimonials_modal_close_button = document.querySelector('.testimonials_modal_close_button');
const testimonials_modal_button = document.querySelector('.testimonials_modal_button');

testimonials_button.addEventListener('click', () => {

    backdrop.classList.add('backdrop-active');
    testimonials_modal.classList.add('testimonials_modal_active')

    testimonials_modal_close_button.addEventListener('click', () => {
        backdrop.classList.remove('backdrop-active');
        testimonials_modal.classList.remove('testimonials_modal_active')
    })

    testimonials_modal_button.addEventListener('click', () => {
        backdrop.classList.remove('backdrop-active');
        testimonials_modal.classList.remove('testimonials_modal_active')
    })

})

const nav_links = document.querySelectorAll('.header-nav_list__item');
const about_section = document.querySelector('#about');
const catalog_section = document.querySelector('#catalog');
const testimonials_section = document.querySelector('#testimonials');

console.dir(nav_links)

nav_links.forEach(item => {
    item.addEventListener('click', () => {

        if (item.innerText === 'Про Нас') {

            let i = about_section.offsetTop - logo_container.clientHeight - 50

            window.scrollTo({

                left: 0,
                top: i,
                behavior: 'smooth'
                
            })

            header_nav.classList.remove('header-nav_open')

        } else if (item.innerText === 'Каталог') {

            window.scroll({

                left: 0,
                top: catalog_section.offsetTop - logo_container.clientHeight - 50,
                behavior: 'smooth'

            })

            header_nav.classList.remove('header-nav_open')

        } else if (item.innerText === 'Відгуки') {

            window.scroll({

                left: 0,
                top: testimonials_section.offsetTop - logo_container.clientHeight - 50,
                behavior: 'smooth'

            })  

            header_nav.classList.remove('header-nav_open')

        }
    })
})

const question_block = document.querySelectorAll('.question');
const arrow_icon = document.querySelector('.question_text .arrow-icon')


question_block.forEach(item => {

    item.addEventListener('click', () => {
        console.dir(item.children[0])

        item.children[0].children[0].classList.toggle('arrow-icon_active')

        item.children[1].classList.toggle('answer_active')
    })

})



    