//Variables for mobile menu
const menuWidth = 50;
const hamburgerMenu = document.getElementById('hamburger');
const closeBtn = document.getElementById('btn-close');
const sideNav = document.querySelector('.side-nav');


hamburgerMenu.addEventListener('click', function(){
    openSideMenu(menuWidth);
});

closeBtn.addEventListener('click', function(){
    closeSideMenu();
});

function openSideMenu(menuWidth) {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.style.opacity = .9;
    sideMenu.style.width = menuWidth + 'vw';

    sideNav.style.transition = 'width ' + 0.5 + 's' + ', opacity ' + 0.8 + 's';

};

function closeSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.style.opacity = 0;
    sideMenu.style.width = 0;

    sideNav.style.transition = 'opacity ' + 0.3 + 's, width ' + 0.7 + 's';
};



