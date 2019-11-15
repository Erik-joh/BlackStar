// hamburger button 
const enterMenu = document.querySelector('.hamburgerButton');
const exitMenu = document.querySelector('.exit');
enterMenu.addEventListener('click',function () {
    const nav = document.getElementById('myDIV');
    nav.classList.add('visible');
});
exitMenu.addEventListener('click',function () {
    const nav = document.getElementById('myDIV');
    nav.classList.remove('visible');
});

