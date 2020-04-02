function changeColor() {
	imgs.forEach(img => img.style.borderColor = colors[index]);
	index = (index + 1) % 7;
	setTimeout(changeColor, 150);
}

let index = 0;
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const imgs = [...document.getElementsByClassName("beefball")];
if (imgs.length)
	changeColor();
