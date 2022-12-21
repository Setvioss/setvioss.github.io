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

burger_menu_icon.addEventListener('click', () => {

    header_nav.classList.toggle('header-nav_open');

})

const promo = document.querySelector('#promo');
const header = document.querySelector('.main-header');

document.addEventListener('scroll', () => {

    if (window.scrollY) {

        header.classList.add('header_box-shadow');

        header_nav.classList.remove('header-nav_open');

        header_nav.classList.add('delete-shadow');

    } else {
        header.classList.remove('header_box-shadow');
    }

})