setInterval(function(){
    let element = document.querySelector('.img');
    let container = document.querySelector('.imgContainer');
    container.append(element);
    element.classList.add('imgAnimate');
},10000);