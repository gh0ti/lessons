document.addEventListener('DOMContentLoaded', () => {
    const burgerElement = document.querySelector('.header__burger');

    burgerElement.addEventListener('click', event => {
        console.log(event.target);

        const navElement = document.querySelector('.nav');
        console.log('navElement', navElement);

        navElement.classList.toggle('active');
    })
});
