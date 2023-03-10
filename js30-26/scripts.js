const triggers  = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(){
	this.classList.add('trigger-enter')
	//setTimeout(function(){ ... }//this will be undefined in a normal function
	// setTimeout(() => {
	// 	if(this.classList.contains('trigger-enter')){//Using this if statement makes the content only show when the timeout is complete
	// 	this.classList.add('trigger-enter-active')
	// 	}}
	setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)//in an arrow function it inherits this from the parent and is the shortest way to write the function
	background.classList.add('open')
	const dropdown = this.querySelector('.dropdown')
	const dropdownCoords = dropdown.getBoundingClientRect()
	const navCoords = nav.getBoundingClientRect()
	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left
	}
	background.style.setProperty('width', `${coords.width}px`)
	background.style.setProperty('height', `${coords.height}px`)
	background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave(){
	this.classList.remove('trigger-enter', 'trigger-enter-active')
	background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))