document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopElement = document.getElementById('scroll-to-top');

    scrollToTopElement.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
});
