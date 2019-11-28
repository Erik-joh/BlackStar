setInterval(function(){
    let containers = document.querySelectorAll('.imgContainer');
    containers.forEach(container => {
        let element = container.querySelector('.img');
        container.append(element);
        element.classList.add('imgAnimate');
    });
},10000);
