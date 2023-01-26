const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole
function randomTime(min, max){
	return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes){
	const idx = Math.floor(Math.random() * holes.length)
	const hole = holes[idx]
	if(hole === lastHole){
		console.log('Ah nah that is the same one bud')
		return randomHole(holes)
	}
	lastHole = hole
	return hole
}

function peep(){
	const time = randomTime(200, 1000)
	const hole = randomHole(holes)
	console.log(time, hole)
}