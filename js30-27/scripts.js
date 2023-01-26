const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) =>{
	isDown = true
	slider.classList.add('active')//adds the effect from the CSS when the mouse is down
	startX = e.pageX - slider.offsetLeft
	scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', () =>{
	isDown = false
	slider.classList.remove('active')
})
slider.addEventListener('mouseup', () =>{
	isDown = false
	slider.classList.remove('active')
})
slider.addEventListener('mousemove', (e) =>{
	if(!isDown) return//will only run when mouse is down
	e.preventDefault()
	const x = e.pageX - slider.offsetLeft
	const walk = x - startX
	console.log(walk)
})