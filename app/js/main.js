document.addEventListener("DOMContentLoaded",  ()=> {

    const menuButton = document.querySelector('.menu__button');
    const closeMenuButton = document.querySelector('.close__button');
    const menuPage = document.querySelector('.wrapper_mobile-menu');
    const allPages = document.querySelector('.wrapper_mobile');

    menuButton.addEventListener('click', () => {
        menuPage.classList.remove('wrapper_mobile-menu--invisible');
        allPages.classList.add('wrapper_mobile--invisible');
    });

    closeMenuButton.addEventListener('click', () => {
        allPages.classList.remove('wrapper_mobile--invisible');
        menuPage.classList.add('wrapper_mobile-menu--invisible');
    });
    
});




