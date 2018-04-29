//Variables for determining screen size
let screenWidth = getScreenWith();
var viewWidth;
let menuWidth = setMenuWidth(screenWidth, viewWidth);

//Variables for mobile menu
const hamburgerMenu = document.getElementById('hamburger');
const closeBtn = document.getElementById('btn-close');
const sideNav = document.querySelector('.side-nav');

function getScreenWith() {
    return screen.width;
};

function setMenuWidth(screenWidth, viewWidth) {
    if(screenWidth <= 568) {
        viewWidth = 70;
    } else {
        viewWidth = 50;
    }
    return viewWidth;
};


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



