const circle = document.getElementById("circle");

let isMoving = false;
let lastMouseX = 0;
let lastMouseY = 0;

const getRandomColor = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColor}`;
};

const getRandomSize = () => {
	const size = Math.floor(Math.random() * 81) + 20;
	return `${size}px`;
};

const startMoving = (event) => {
	isMoving = true;
	lastMouseX = event.clientX;
	lastMouseY = event.clientY;

	circle.style.left = `${lastMouseX - circle.offsetWidth / 2}px`;
	circle.style.top = `${lastMouseY - circle.offsetHeight / 2}px`;
    circle.style.backgroundColor = getRandomColor()

	const newdiv = document.createElement("div");
	newdiv.className = "circle";
	newdiv.style.left = `${event.clientX - 25}px`;
	newdiv.style.top = `${event.clientY - 25}px`;
	newdiv.style.backgroundColor = getRandomColor();
	newdiv.style.width = getRandomSize();
	newdiv.style.height = newdiv.style.width;

	document.body.appendChild(newdiv);

	document.addEventListener("mousemove", moveCircle);
};

const stopMoving = (event) => {
	isMoving = false;

	document.removeEventListener("mousemove", moveCircle);
};

const moveCircle = (event) => {
	if (!isMoving) return;

	lastMouseX = event.clientX;
	lastMouseY = event.clientY;

	circle.style.left = `${lastMouseX - circle.offsetWidth / 2}px`;
	circle.style.top = `${lastMouseY - circle.offsetHeight / 2}px`;
};

document.addEventListener("mousedown", startMoving);
document.addEventListener("mouseup", stopMoving);
