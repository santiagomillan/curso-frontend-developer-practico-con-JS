const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobilepMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    console.log('click 5')
    const isAsideClose = aside.classList.contains('inactive')

    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    console.log('click 4')
    const isAsideClose = aside.classList.contains('inactive')

    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    console.log('click 3')
    const isMobileClosed = mobileMenu.classList.contains('inactive')
    const ismenuDesktopClosed = menuEmail.classList.contains('inactive')

    if(!isMobileClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!ismenuDesktopClosed){
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');
}