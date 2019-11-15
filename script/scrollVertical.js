//buttons scroll
function scrollOnClick(name) {
    var elem = document.querySelector(name);
    elem.scrollIntoView({behavior:'smooth'});
}    


//noraml scroll
let lastScrollPosition = 0;
const body = document.querySelector('body');

function noScroll(){
    window.scrollBy(0,0);    
}
function scrollByScreen(){
    let upOrDown = window.pageYOffset - lastScrollPosition;    
    if(upOrDown > 0){
        window.scrollBy(0,body.offsetHeight / 4);    
    }
    lastScrollPosition = window.pageYOffset;
}
window.addEventListener('DOMMouseScroll',noScroll);
window.setTimeout(() => {
    window.addEventListener('DOMMouseScroll',scrollByScreen)    
},4000);


