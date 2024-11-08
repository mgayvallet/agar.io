const circle = document.getElementById('circle');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
    circle.style.top = `${mouseY - circle.offsetHeight / 2}px`;
});
