document.addEventListener("DOMContentLoaded",  ()=> {

    const menuButton = document.querySelector('.menu__button');
    const closeMenuButton = document.querySelector('.close__button');
    const menuPage = document.querySelector('.menu-page');
    const startupPage = document.querySelector('.startup-page');

    menuButton.addEventListener('click', () => {
        menuPage.classList.remove('menu-page--invisible');
        startupPage.classList.add('startup-page--invisible');
    });

    closeMenuButton.addEventListener('click', () => {
        startupPage.classList.remove('startup-page--invisible');
        menuPage.classList.add('menu-page--invisible');
    });
    
});




