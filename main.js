const circle = document.getElementById('circle');

let isMoving = false;

const startMoving = (event) => {
    isMoving = true;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
    circle.style.top = `${mouseY - circle.offsetHeight / 2}px`;

    document.addEventListener('mousemove', moveCircle);
};

const stopMoving = () => {
    isMoving = false;
    document.removeEventListener('mousemove', moveCircle);
};

const moveCircle = (event) => {
    if (!isMoving) return;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
    circle.style.top = `${mouseY - circle.offsetHeight / 2}px`;
};

document.addEventListener('mousedown', startMoving);
document.addEventListener('mouseup', stopMoving);
