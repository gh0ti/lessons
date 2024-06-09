document.addEventListener('DOMContentLoaded', () => {
    const burgerElement = document.querySelector('.header__burger');
    const navElement = document.querySelector('.nav');
    const navItemMenuElements = document.querySelectorAll('.nav__item-menu');

    burgerElement.addEventListener('click', event => {
        navElement.classList.toggle('active');
        burgerElement.classList.toggle('active');
    });

    navItemMenuElements.forEach(menuItem => {
        menuItem.addEventListener('click', event => {
            navElement.classList.remove('active');
            burgerElement.classList.remove('active');
        })
    })
});
