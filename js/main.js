const menuBtn = document.querySelector('#menu-button');
const headerMenu = document.querySelector('#header-menu');

menuBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})