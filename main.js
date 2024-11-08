const circle = document.querySelector('#circle');
let topPosition = 0; 
let leftPosition = 0; 

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            topPosition -= 10; 
            break;
        case 'ArrowDown':
            topPosition += 10;
            break;
        case 'ArrowLeft':
            leftPosition -= 10;
            break;
        case 'ArrowRight':
            leftPosition += 10;
            break;
        default:
            break;
    }

    circle.style.top = topPosition + 'px';
    circle.style.left = leftPosition + 'px';
});
