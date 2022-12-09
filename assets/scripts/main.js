const dot = document.querySelector(".dot_wrap");
let colors = [
	"220, 20, 60",
	"0, 0, 255",
	"255, 20, 147",
	"128, 0, 128",
	"255, 127, 80",
	"0, 128, 0",
	"75, 0, 130",
	"138, 43, 226",
	"128, 0, 128",
	"255, 127, 80",
	"138, 43, 226",
];

for (let i = 0; i < 100; i++) {
	const dotClone = dot.cloneNode(true);
	let randomIndex = Math.floor(Math.random() * colors.length);

	dotClone.querySelector(
		".dot__item"
	).style.background = `rgb(${colors[randomIndex]})`;

	dotClone.querySelector(
		".dot__item"
	).style.boxShadow = `0 0 20px rgba(${colors[randomIndex]}, 50%)`;

	document.querySelector(".dots").appendChild(dotClone);
}
