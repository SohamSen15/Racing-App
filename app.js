const can = document.querySelector('.can');
const ctx = can.getContext('2d');
const bg = new Image();
let x = 10;
let y = 10;
let x2 = 10;
let y2 = 120;
bg.src = 'Land.jpg';
const r = new Image();
const r2 = new Image();
r.src = 'car1.png';
r2.src = 'car2.png';
const load = () => {
	console.log('load');
	ctx.drawImage(bg, 0, 0, 400, 400);
	ctx.drawImage(r, x, y, 15, 20);
	ctx.drawImage(r2, x2, y2, 15, 20);
	ctx.drawImage(r, 250, 0, 10, 700);
};
r.onload = () => load();
bg.onload = () => load();

document.addEventListener('keyup', (e) => {
	const w = can.getBoundingClientRect().width;
	const h = can.getBoundingClientRect().height;
	if (e.keyCode === 38) {
		//up
		x += 5;
		load();
		if (x > 250) {
			alert('Blue Wins!');
		}
	} else if (e.keyCode === 39) {
		//right
		x2 += 5;
		load();
		if (x2 > 250) {
			alert('Red Wins!');
		}
	}
});
