let index = 0;
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const imgs = document.querySelectorAll("img");
if (imgs.length)
	setInterval(() => {
		imgs.forEach(img => img.style.borderColor = colors[index]);
		index = (index + 1) % 7;
	}, 150);
