const main = document.querySelector('main');
const buttons = document.querySelectorAll('.scrollButton');

main.addEventListener('scroll',buttonHighlight);
buttons[0].classList.add('scrollButtonHighlighted');

function removeHighlight() {
    buttons.forEach(button => {
        button.classList.remove('scrollButtonHighlighted');
    });
}

function buttonHighlight() {
    totalHeight = main.scrollHeight;
    currentHeight = main.scrollTop;
    sectionHeight = totalHeight/6;
    if(currentHeight < (sectionHeight/2)){
        removeHighlight();
        buttons[0].classList.add('scrollButtonHighlighted');
    }else if(currentHeight > (sectionHeight/2) && currentHeight < (sectionHeight*1.5)){
        removeHighlight();
        buttons[1].classList.add('scrollButtonHighlighted');
    }else if(currentHeight > (sectionHeight*1.5) && currentHeight < (sectionHeight*2.5)){
        removeHighlight();
        buttons[2].classList.add('scrollButtonHighlighted');
    }else if(currentHeight > (sectionHeight*2.5) && currentHeight < (sectionHeight*3.5)){
        removeHighlight();
        buttons[3].classList.add('scrollButtonHighlighted');
    }
}
